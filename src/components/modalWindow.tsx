import React from "react";
import { useEffect, useState } from "react";
import OnCloseIcon from "./icons/creditPage/onCloseIcon";
import { ConsultForm } from "./main-page/sectionConsult/formConsult";

interface ModalProps {
  formData: {
    credits: string;
    duration: number;
    targetSum: number;
    dateInput: string;
  };
  title: string;
  textButton: string;
  onClose: () => void;
}

export const ModalWindow: React.FC<ModalProps> = ({
  formData,
  title,
  textButton,
  onClose,
}) => {
  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 relative m-4 overflow-auto">
        <h3 className="text-[32px] font-bold text-primary_400">{title}</h3>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-primary_400 hover:text-primary_300 p-2 font-bold"
        >
          <OnCloseIcon />
        </button>
        <ConsultForm
          data={formData}
          title={title}
          textButton={textButton}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
