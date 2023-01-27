import ExpenseItem from "./Expenseitem";
import './Expenses.css';
import Card from "../UI/Card";
const Expenses = (props) => {
    return (
        <Card className="expenses">
        <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        catagory={props.items[0].catagory}
       />

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        catagory={props.items[0].catagory}
      />

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        catagory={props.items[0].catagory}
      />

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        catagory={props.items[0].catagory}
      />
      </Card>
    )
}
export default Expenses;