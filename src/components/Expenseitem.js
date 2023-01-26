import './Expenseitem.css';
function ExpenseItem(props) {

    // const expenseDate = new Date(2023,0,26);
    // const expenseTitle = 'Pizza';
    // const expenseAmount = 300;
    // const locationOfExpenditure = 'food';

    return (<div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h2>{props.catagory}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    </div>)
}

export default ExpenseItem;