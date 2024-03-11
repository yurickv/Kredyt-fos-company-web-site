import React from "react";
import onCloseIcon from "../icons/onCloseIcon";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 relative">
        {children}{" "}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary_400 hover:text-primary_300 p-2 font-bold"
        >
          X
        </button>
      </div>
    </div>
  );
};
