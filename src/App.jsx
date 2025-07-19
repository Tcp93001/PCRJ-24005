// import './App.css'
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([])

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense])
  }

  // const expenses = [
  //   {
  //     id: Math.random(),
  //     date: new Date(2022, 4, 23),
  //     title: "Libros",
  //     amount: 250,
  //   },
  //   {
  //     id: Math.random(),
  //     date: new Date(2022, 2, 20),
  //     title: "Café",
  //     amount: 50,
  //   },
  //   {
  //     id: Math.random(),
  //     date: new Date(2022, 3, 18),
  //     title: "Comida",
  //     amount: 600,
  //   },
  // ];


  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  )
}

export default App
