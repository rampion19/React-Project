import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    const setEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditing = () => {
        setIsEditing(false);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick = {setEditingHandler}>Add new expense</button>}
        {isEditing && <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel = {stopEditing} />}
    </div>
};

export default NewExpense;