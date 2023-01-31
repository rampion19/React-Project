import React, { useState } from 'react';
import './Expenseitem.css';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setTitle('updated!');
        console.log(title);
    };

    const updateHandler = () => {
        setAmount(100);
        console.log(amount);
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} catagory={props.catagory} amount={amount} />
            <button onClick={clickHandler}>Change title</button>
            <button onClick={updateHandler}>Change amount</button>
        </Card>
    )
}
export default ExpenseItem;