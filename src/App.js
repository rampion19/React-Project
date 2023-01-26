// import logo from './logo.svg';


import ExpenseItem from './components/Expenseitem';
function App() {
  const expenses = [
    {
      title: 'Pizza',
      amount: 300,
      date: new Date(2023, 0, 26),
      catagory: "food"
    },
    {
      title: 'Camera',
      amount: 15000,
      date: new Date(2023, 0, 12),
      catagory: "electronics"
    },
    {
      title: 'Car',
      amount: 700000,
      date: new Date(2023, 0, 22),
      catagory: "vehicle"
    },
    {
      title: 'Books',
      amount: 1500,
      date: new Date(2023, 0, 25),
      catagory: "education"
    }
  ]
  
  // for(let i=0; i<expenses.length; i++);
  
  return (
    <div>
      <h2>Lets get started!</h2>
      
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        catagory={expenses[0].catagory}>
      </ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        catagory={expenses[1].catagory}>
      </ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        catagory={expenses[2].catagory}>
      </ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        catagory={expenses[3].catagory}>
      </ExpenseItem>
    </div>
  );
}

export default App;
