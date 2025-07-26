import styles from './ExpenseDate.module.css'

function ExpenseDate({ date }) {
  const month = date.toLocaleDateString("es-MX", { month: "long"})
  const day = date.toLocaleDateString("es-MX", { day: "2-digit"})
  const year = date.getFullYear()

  return (
    <div className={styles['expense-date']}>
      <div className={styles['expense-date-month']}>{month}</div>
      <div className={styles['expense-date-year']}>{year}</div>
      <div className={styles['expense-date-day']}>{day}</div>
    </div>
  )
}

export default ExpenseDate