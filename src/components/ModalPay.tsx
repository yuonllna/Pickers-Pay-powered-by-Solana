import React, { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function ModalPay(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay-pay" onClick={props.toggle}>
          <div  className="modal-box-pay">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
