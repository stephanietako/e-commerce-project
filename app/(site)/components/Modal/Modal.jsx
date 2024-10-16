import React from "react";
import styles from "./styles.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className={styles.modal}
      id="modal"
      onClick={(event) => event.stopPropagation()}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
