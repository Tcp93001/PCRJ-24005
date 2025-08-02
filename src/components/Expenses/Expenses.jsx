import { useState, Fragment } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

function Expenses({ items }) {
  const [year, setYear] = useState('2025')

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear)
  }

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === year
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={year}
      />
      {filteredExpenses.length === 0 ? (
        <h3>No encontramos gastos</h3>
      ) : (
        filteredExpenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))
      )}
    </Card>
  )
}

export default Expenses