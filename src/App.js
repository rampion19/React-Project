// import logo from './logo.svg';


import Expenses from './components/Expenses/Expenses';
const App = ()=> {
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
  

  return (
    <div>
      <h2>Lets get started!</h2>
    <Expenses items = {expenses} />
    </div>
  );
}

export default App;
