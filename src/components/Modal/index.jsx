import React from "react";
import style from "./modal.module.scss";

function Modal({ isShow, onHide, children }) {
  return (
    <>
      {isShow && (
        <div className={style.modal}>
          <div className={style.overlay} onClick={onHide}></div>
          <div className={style.modal_content}>
            <div className={style.modal_content_wrapper}>{children}</div>
            <button
              title="Close"
              className={style.close_modal}
              onClick={onHide}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
