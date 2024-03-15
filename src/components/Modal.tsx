"use client";
import { useRef } from "react";

import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function Modal(props: ComponentsPropsNamespace.Modal) {
  const {
    isOpen,
    onClose,
    children,
    dismissible = false,
    overlayExtendedClassName = "",
    modalContainerExtendedClassName = "",
    modalContentExtendedClassName = "",
    ...restProps
  } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!dismissible) return null;
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <BaseComponentLayout {...restProps}>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={handleClickOutsideModal}
      >
        <div
          className={`modal-overlay  ${overlayExtendedClassName}`}
          onClick={onClose}
        ></div>
        <div
          className={`modal-container ${modalContainerExtendedClassName}`}
          ref={modalRef}
        >
          <div className={`modal-content ${modalContentExtendedClassName}`}>
            {children}
          </div>
        </div>
      </div>
    </BaseComponentLayout>
  );
}
