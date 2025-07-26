import { useState } from 'react'
// import styles from './ExpenseForm.module.css'
import styled from 'styled-components'

const FormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`
const FormControl = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: ${(props) => (props.invalid ? '#AD0000' : '#000000')}
  }

  & input {
    background-color: white;
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid ${({ invalid }) => (invalid ? '#AD0000' : '#000000')};
    width: 20rem;
    max-width: 100%;
  }
`

const FormActions = styled.div`
  text-align: right;
`

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid #464646;
  background-color: #464646;
  color: #e5e5e5;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  &:active {
    background-color: #AFAFAF;
    border-color: #AFAFAF;
    color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ExpenseForm = ({ onSaveExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(true)
  const [isValidAmount, setIsValidAmount] = useState(true)
  const [isValidDate, setIsValidDate] = useState(true)

  const titleChangeHandler = (event) => {
    const { value } = event.target
    if (value.length) setIsValidTitle(true)
    setTitle(value);
  };

  const amountChangeHandler = (event) => {
    const { value } = event.target
    if (value.length) setIsValidAmount(true)
    setAmount(value);
  };

  const dateChangeHandler = (event) => {
    const { value } = event.target
    console.log('value', value)
    if (value.length) setIsValidDate(true)
    setDate(value);
  };

  const validateFields = () => {
    if (!title.trim().length) {
      setIsValidTitle(false)
    }
    if (amount.trim().length === 0) {
      setIsValidAmount(false)
    }
    if (date.trim().length === 0) {
      console.log('date', date.length)
      // pendiente de validar correctamente
      setIsValidDate(false)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const isReadyToSubmit = isValidTitle && isValidAmount && isValidDate
    validateFields()
    if(isReadyToSubmit) {
      const expense = {
        title,
        amount,
        date: new Date(date),
      };

      onSaveExpense(expense);

      setTitle("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControls>
        <FormControl invalid={!isValidTitle}>
          <label>Descripción</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={title}
          />
        </FormControl>
        <FormControl invalid={!isValidAmount}>
          <label>Monto</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={amount}
          />
        </FormControl>
        <FormControl invalid={!isValidDate}>
          <label>Fecha</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </FormControl>
      </FormControls>

      <FormActions>
        <Button type="submit">Agregar</Button>
      </FormActions>
    </form>
  )
}

export default ExpenseForm
