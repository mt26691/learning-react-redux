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

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector(state => state.entries);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(t => t.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].isExpense = isExpense;
      newEntries[index].value = value;
      // setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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

  function resetEntry() {
    setEntryId()
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex(t => t.id === id);
      const entry = entries[index];
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
      setEntryId(id);
    }
  }

  function addEntry() {
    const result = entries.concat({ id: entries.length + 1, description: description, value: value, isExpense: isExpense });
    // setEntries(result);
    resetEntry();
  }

  return (
    <Container>
      <MainHeader title="Budget"></MainHeader>
      <DisplayBalance title="Your Balance:" value={total} color="black" size="small" />
      <DisplayBalances totalIncomes={incomeTotal} totalExpenses={expenseTotal} />
      <MainHeader title="History" type="h3"></MainHeader>
      <EntryLines entries={entries} editEntry={editEntry} />
      <MainHeader title="Add New Transaction" type="h3"></MainHeader>
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;
