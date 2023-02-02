import ExpenseItem from "./Expenseitem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

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

      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filterdExpenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          catagory={expense.catagory}
          date={expense.date}
        />
      ))}
    </Card>
  )
  
}
export default Expenses;