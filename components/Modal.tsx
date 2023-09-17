import React, { useCallback } from "react";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}: ModalProps) {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="
      bg-neutral-800
        bg-opacity-70
        fixed
        inset-0 
        opacity-40%
        justify-center 
        items-center 
        flex 
        overflow-x-hidden 
        overflow-y-auto 
        z-50 
        outline-none 
        focus:outline-none
    "
      >
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
          
        </div>
      </div>
    </>
  );
}

export default Modal;
