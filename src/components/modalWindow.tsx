import React from "react";
import { useRef, useEffect } from "react";
import OnCloseIcon from "./icons/creditPage/onCloseIcon";
import { ConsultForm } from "./main-page/sectionConsult/formConsult";

interface ModalProps {
  formData: {
    credits?: string | undefined;
    deposits?: string | undefined;
    duration?: number | undefined;
    targetSum?: number | undefined;
    dateInput?: string | undefined;
  };
  title: string;
  textButton: string;
  style?: string;
  onClose: () => void;
}

export const ModalWindow: React.FC<ModalProps> = ({
  formData,
  title,
  textButton,
  style,
  onClose,
}) => {
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

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
      <div
        className="bg-white rounded-lg px-4 py-[50px] md:px-[50px] relative m-4 overflow-auto"
        ref={modalRef}
      >
        <h3 className="text-[20px] font-bold text-primary_700">{title}</h3>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-11 right-10 text-primary_400 hover:text-primary_300 p-2 font-bold"
        >
          <OnCloseIcon />
        </button>
        <ConsultForm
          data={formData}
          title={title}
          textButton={textButton}
          style={style}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
