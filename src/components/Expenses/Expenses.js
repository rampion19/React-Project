import ExpenseItem from "./Expenseitem";
import './Expenses.css';
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">

      {props.items.map(expense =>(
        <ExpenseItem
          title={expense.title}
          key = {expense.id}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        catagory={props.items[0].catagory}
      />

      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        catagory={props.items[1].catagory}
      />

      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        catagory={props.items[2].catagory}
      />

      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        catagory={props.items[3].catagory}
      /> */}
    </Card>
  )
}
export default Expenses;