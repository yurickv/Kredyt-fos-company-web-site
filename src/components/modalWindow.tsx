import React from "react";
import { useEffect, useState } from "react";
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
  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-[50px] relative m-4 overflow-auto">
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
