import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 249.67, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'Groceries', amount: 30.02, date: new Date(2021, 5, 28) },
    { id: 'e3', title: 'Electricity', amount: 50.98, date: new Date(2021, 20, 28) },
    { id: 'e4', title: 'Water', amount: 34.88, date: new Date(2021, 24, 28) }
  ];

  // return (
  //   <div>
  //     <ExpenseItem
  //       title={expenses[0].title}
  //       amount={expenses[0].amount}
  //       date={expenses[0].date}
  //     />
  //   </div>
  // );

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
