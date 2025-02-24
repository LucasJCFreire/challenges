import style from "./Modal.module.scss";
import Button from "../button/Button";
import { useState } from "react";
import FocusTrap from "focus-trap-react";

export default function Modal({ type, title, text, closeModal, onConfirm }) {
  const [inputValue, setInputValue] = useState("");

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleConfirm = () => {
    if (type === "add") {
      onConfirm(inputValue);
    } else {
      onConfirm();
    }
    closeModal();
  };

  return (
    <section
      onClick={handleOverlayClick}
      className={`${style.overlay} ${style[type]}`}
      aria-modal="true"
      role="dialog"
      title="Modal de confirmação"
      aria-label={title}
    >
      <FocusTrap>
        <div className={style.action} onClick={(e) => e.stopPropagation()}>
          <h2>{title}</h2>
          <p>{text}</p>
          {type === "add" && (
            <input
              type="text"
              placeholder="Digite"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              title="Digite o valor a ser adicionado"
              aria-label="Campo para digitar o valor a ser adicionado"
            />
          )}
          <div className={style.btn}>
            <Button
              text="Cancelar"
              btnType="cancel"
              onClick={closeModal}
              title="Clique para cancelar a ação"
              aria-label="Cancelar a ação"
            />
            <Button
              text={type === "add" ? "Adicionar" : "Deletar"}
              btnType={type === "add" ? "add" : "remove"}
              onClick={handleConfirm}
              title={
                type === "add" ? "Clique para adicionar" : "Clique para deletar"
              }
              aria-label={
                type === "add" ? "Adicionar a tarefa" : "Deletar a tarefa"
              }
            />
          </div>
        </div>
      </FocusTrap>
    </section>
  );
}
