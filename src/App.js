// import logo from './logo.svg';

import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expenses = [
  {
    id : 1,
    title: 'Pizza',
    amount: 300,
    date: new Date(2023, 0, 26),
    catagory: "food"
  },
  {
    id : 2,
    title: 'Camera',
    amount: 15000,
    date: new Date(2023, 0, 12),
    catagory: "electronics"
  },
  {
    id : 3,
    title: 'Car Insurance',
    amount: 7000,
    date: new Date(2023, 0, 22),
    catagory: "vehicle"
  },
  {
    id : 4,
    title: 'Books',
    amount: 1500,
    date: new Date(2023, 0, 25),
    catagory: "education"
  }
]
const App = () => {

  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
