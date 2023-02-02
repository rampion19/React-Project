import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filterdExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  
  return (
    <Card className="expenses">
      <ExpenseFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler} 
      />
      {/* {filterdExpenses.length === 0 ? 
      (<p><b>No expenses found</b></p>) : 
      (filterdExpenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          catagory={expense.catagory}
          date={expense.date}
        />
      ))
      )} */}
      <ExpensesList items = {filterdExpenses} />
    </Card>
  )
}
export default Expenses;