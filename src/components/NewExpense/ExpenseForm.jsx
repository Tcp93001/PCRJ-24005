import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpense }) => {
  // const [title, setTitle] = useState('')
  // const [amount, setAmount] = useState('')
  // const [date, setDate] = useState('')

  const [data, setData] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const titleChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      title: event.target.value
    }))
  }

  const amountChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      amount: event.target.value
    }))
  }

  const dateChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      date: event.target.value
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    // Agregamos este paso para convertir nuestra fecha (string)
    // en el objeto que vamos a salvar (objeto tipo Date)
    const expense = {
      ...data,
      date: new Date(data.date)
    }

    // Ahora el tipo de nuestro data es correcto y lo mandamos a App
    onSaveExpense(expense)
    // const expense = {
    //   title,
    //   amount,
    //   date
    // }

    setData((prevState) => ({
      ...prevState,
      title: '',
      amount: '',
      date: ''
    }))
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Descripción</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={data.title}
          />
        </div>
        <div className="new-expense-control">
          <label>Monto</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={data.amount}
          />
        </div>
        <div className="new-expense-control">
          <label>Fecha</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={data.date}
          />
        </div>
      </div>

      <div className="new-expense-actions">
        <button type="submit">Agregar</button>
      </div>
    </form>
  )
}

export default ExpenseForm
