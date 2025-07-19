import Card from "../UI/Card"
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
  const saveExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString()
    }

    onAddExpense(newExpense)
  }

  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpense} />
    </Card>
  )
}

export default NewExpense
