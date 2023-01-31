import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
const ExpenseItem = (props) => {

    const clickHandler = () => {
        console.log('clicked!')
    };

    const deleteHandler = () => {
        const details = document.getElementById('details');
        details.remove();
    };
    return (
        <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <ExpenseDetails title={props.title} catagory={props.catagory} amount={props.amount} />
                <button onClick={clickHandler}>Click Me</button>
                <button onClick={deleteHandler}>Delete</button>
        </Card>
    )
}
export default ExpenseItem;