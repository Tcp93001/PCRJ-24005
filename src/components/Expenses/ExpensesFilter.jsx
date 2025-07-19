import "./ExpensesFilter.css";

function ExpensesFilter({ onChangeFilter, year}) {
  const changeHandler = (event) => {
    onChangeFilter(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filtrar por año</label>
        <select selected={year} onChange={changeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;