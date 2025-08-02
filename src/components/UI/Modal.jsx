import { createPortal } from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./Modal.module.css";

const Backdrop = ({ onConfirm }) => {
  return (
    <div className={styles.backdrop} onClick={onConfirm} />
  )
}

const ModalOverlay = ({ title, message, onConfirm }) => (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{title}</h2>
    </header>
    <div className={styles.content}>
      <p>{message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={onConfirm}>Aceptar</Button>
    </footer>
  </Card>
);

function Modal({ title, message, onConfirm }) {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onConfirm={onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </>
  )
}

export default Modal;