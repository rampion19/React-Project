import React from 'react';
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
const ExpenseItem = (props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <ExpenseDetails title={props.title} catagory={props.catagory} amount={props.amount} />
            </Card>
        </li>

    )
}
export default ExpenseItem;