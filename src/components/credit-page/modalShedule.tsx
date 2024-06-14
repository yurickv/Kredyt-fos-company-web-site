import React from "react";
import { useRef, useEffect, useState } from "react";
import OnCloseIcon from "../icons/creditPage/onCloseIcon";

interface ModalProps {
  formData: {
    credits: string;
    duration: number;
    targetSum: number;
    dateInput: string;
  };
  payment: number;
  persent: number;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  formData,
  payment,
  persent,
  onClose,
}) => {
  const { credits, duration, targetSum, dateInput } = formData;
  const [paymentSchedule, setPaymentSchedule] = useState<any[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (modalRef.current) {
        body.style.overflow = "hidden"; // Disable scrolling
      } else {
        body.style.overflow = ""; // Enable scrolling
      }
    }

    return () => {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflow = ""; // Ensure scrolling is re-enabled when the modal is closed
      }
    };
  }, [modalRef]);

  useEffect(() => {
    const generatePaymentSchedule = () => {
      let schedule = [];
      let remainingBalance = targetSum;
      let currentDate = new Date(dateInput);

      for (let i = 1; i <= duration; i++) {
        const year =
          currentDate.getFullYear() +
          Math.floor((currentDate.getMonth() + i) / 12);
        const month = ((currentDate.getMonth() + i) % 12) + 1;
        const lastDayOfMonth = new Date(year, month, 0).getDate();
        const day = Math.min(currentDate.getDate(), lastDayOfMonth);
        const adjustedDate = new Date(year, month - 1, day);

        const paymentAmount = payment;
        const accruedInterest = (remainingBalance * persent).toFixed(2);
        const principalPayment = (
          paymentAmount - parseFloat(accruedInterest)
        ).toFixed(2);

        remainingBalance -= parseFloat(principalPayment);

        schedule.push({
          date: formatDate(adjustedDate),
          paymentAmount: paymentAmount.toFixed(2),
          remainingBalance: remainingBalance.toFixed(2),
          principalPayment,
          accruedInterest,
        });
      }

      setPaymentSchedule(schedule);
    };

    generatePaymentSchedule();
  }, [duration, targetSum, dateInput, payment, persent]);

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 relative m-4 overflow-auto max-h-[90vh]"
      >
        <h3 className="text-[32px] font-bold text-primary_400 mt-8">
          {credits}
        </h3>
        <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-primary_400 hover:text-primary_300 p-2 font-bold"
        >
          <OnCloseIcon />
        </button>
        <table className="mt-2 md:mt-4">
          <thead>
            <tr className="">
              <th className="px-4 py-2">Дата платежу</th>
              <th className="px-4 py-2">
                Сума платежу за розрахунковий період, грн.
              </th>
              <th className="px-4 py-2">Залишок осовної суми кредиту</th>
              <th className="px-4 py-2">Сплата основної суми кредиту</th>
              <th className="px-4 py-2">% нарах</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-netural_400 text-center">
            {paymentSchedule.map((payment, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{payment.date}</td>
                <td className="px-4 py-2">{payment.paymentAmount}</td>
                <td className="px-4 py-2">{payment.remainingBalance}</td>
                <td className="px-4 py-2">{payment.principalPayment}</td>
                <td className="px-4 py-2">{payment.accruedInterest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
