import React from "react";
import { useEffect, useState } from "react";
import OnCloseIcon from "../icons/onCloseIcon";

interface ModalProps {
  formData: {
    credits: string;
    creditDuration: number;
    creditSum: number;
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
  const { credits, creditDuration, creditSum, dateInput } = formData;
  const [paymentSchedule, setPaymentSchedule] = useState<any[]>([]);

  useEffect(() => {
    const generatePaymentSchedule = () => {
      let schedule = [];
      let remainingBalance = creditSum;

      for (let i = 1; i <= creditDuration; i++) {
        const date = new Date(dateInput);
        date.setMonth(date.getMonth() + i - 1); // Increase month by i - 1
        const paymentAmount = payment;
        const accruedInterest = (remainingBalance * persent).toFixed(2);
        const principalPayment = (
          paymentAmount - parseFloat(accruedInterest)
        ).toFixed(2);
        if (i === 1) {
          remainingBalance = creditSum;
        } else {
          remainingBalance -= parseFloat(principalPayment);
        }

        schedule.push({
          date: formatDate(date),
          paymentAmount: paymentAmount.toFixed(2),
          remainingBalance: remainingBalance.toFixed(2),
          principalPayment,
          accruedInterest,
        });
      }

      setPaymentSchedule(schedule);
    };

    generatePaymentSchedule();
  }, [creditDuration, creditSum, dateInput, payment, persent]);

  const formatDate = (date: Date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${month}/${year}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 relative">
        <h3 className="text-[32px] font-bold text-primary_400 mt-8">
          {credits}
        </h3>
        <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary_400 hover:text-primary_300 p-2 font-bold"
        >
          <OnCloseIcon />
        </button>
        <table className="border-collapse border border-gray-400 mt-2 md:mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Дата платежу</th>
              <th className="border border-gray-400 px-4 py-2">
                Сума платежу за розрахунковий період, грн.
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Залишок осовної суми кредиту
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Основна сума до сплати
              </th>
              <th className="border border-gray-400 px-4 py-2">% нарах</th>
            </tr>
          </thead>
          <tbody>
            {paymentSchedule.map((payment, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">
                  {payment.date}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {payment.paymentAmount}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {payment.remainingBalance}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {payment.principalPayment}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {payment.accruedInterest}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
