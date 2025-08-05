import React from 'react';
import { Button } from '../ui/button';

function Modal({ children, isOpen, onClose, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <Button
            variant="ghost"
            className="text-red-500 hover:text-red-700 hover:cursor-pointer"
            onClick={onClose}
          >
            X
          </Button>
        </div>
        <div className="text-sm text-gray-800 dark:text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
