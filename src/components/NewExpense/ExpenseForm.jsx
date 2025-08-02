import { useState, useRef } from "react";
import Modal from "../UI/Modal";
import styles from "./ExpenseForm.module.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);
  const [error, setIsError] = useState(null)

  const titleRef = useRef(null)
  const amountRef = useRef(null)

  const titleChangeHandler = (event) => {
    const { value } = event.target;
    if (value.length > 0) setIsTitleValid(true);
    setTitle(value);
  };

  const amountChangeHandler = (event) => {
    const { value } = event.target;
    if (value.length > 0) setIsAmountValid(true);
    setAmount(value);
  };

  const dateChangeHandler = (event) => {
    const { value } = event.target;
    if (value.length > 0) setIsDateValid(true);
    if (new Date(value) > new Date()) {
      setIsDateValid(false)
      setIsError({
        title: 'Fecha inválida',
        message: `La fecha no debe ser mayor a ${new Date().toLocaleDateString()}`
      })
    }
    setDate(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    validateFields();
    if (!(isTitleValid && isAmountValid && isDateValid)) return;

    const expense = {
      title,
      amount,
      date: new Date(date),
    };

    props.onSaveExpense(expense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const validateFields = () => {
    if (title.trim().length === 0) {
      setIsTitleValid(false)
      titleRef.current.focus()
    }

    if (amount.trim().length === 0) {
      setIsAmountValid(false);
      amountRef.current.focus()
    }

    if (date.trim().length === 0) {
      setIsDateValid(false);
    }
  };

  const errorHandler = () => {
    setIsError(null)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles["new-expense-controls"]}>
          <div
            className={`${styles["new-expense-control"]} ${
              !isTitleValid && styles.invalid
            }`}
          >
            <label>Descripción</label>
            <input
              type="text"
              value={title}
              onChange={titleChangeHandler}
              ref={titleRef}
            />
          </div>
          <div
            className={`${styles["new-expense-control"]} ${
              !isAmountValid && styles.invalid
            }`}
          >
            <label>Monto</label>
            <input
              type="number"
              min="1"
              step="1"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div
            className={`${styles["new-expense-control"]} ${
              !isDateValid && styles.invalid
            }`}
          >
            <label>Fecha</label>
            <input
              type="date"
              min="2023-01-01"
              max="2027-12-31"
              value={date}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={styles["new-expense-actions"]}>
          <button type="submit">Agregar</button>
        </div>
      </form>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    </>
  );
}

export default ExpenseForm;