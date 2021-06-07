import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/Display-Balances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';

function App() {

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector(state => state.entries);
  const { isOpen, id } = useSelector(state => state.modals);
  const [entry, setEntry] = useState();

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries])


  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map(t => {
      if (t.isExpense) {
        return totalExpenses += Number(t.value);
      }
      else {
        return totalIncomes += Number(t.value);
      }
    });
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses);
    setTotal(totalIncomes - totalExpenses);
  }, [entries])


  return (
    <Container>
      <MainHeader title="Budget"></MainHeader>
      <DisplayBalance title="Your Balance:" value={total} color="black" size="small" />
      <DisplayBalances totalIncomes={incomeTotal} totalExpenses={expenseTotal} />
      <MainHeader title="History" type="h3"></MainHeader>
      <EntryLines entries={entries} />
      <MainHeader title="Add New Transaction" type="h3"></MainHeader>
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
