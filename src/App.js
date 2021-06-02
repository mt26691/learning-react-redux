import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/Display-Balances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

const initialEntries = [
  {
    id: 1,
    description: 'Work Income',
    value: 1000,
    isExpense: false
  },
  {
    id: 2,
    description: 'Water bill',
    value: 10,
    isExpense: true
  },
  {
    id: 3,
    description: 'Rental fee',
    value: 300,
    isExpense: true
  },
  {
    id: 4,
    description: 'Power Bill',
    value: 50,
    isExpense: true
  },
];
function App() {
  const [entries, setEntries] = useState(initialEntries);

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(t => t.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].isExpense = isExpense;
      newEntries[index].value = value;
      setEntries(newEntries);
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
  function deleteEntry(id) {
    const result = entries.filter(t => t.id !== id);
    setEntries(result);
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
    setEntries(result);
    resetEntry();
  }

  return (
    <Container>
      <MainHeader title="Budget"></MainHeader>
      <DisplayBalance title="Your Balance:" value={total} color="black" size="small" />
      <DisplayBalances totalIncomes={incomeTotal} totalExpenses={expenseTotal} />
      <MainHeader title="History" type="h3"></MainHeader>
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
      <MainHeader title="Add New Transaction" type="h3"></MainHeader>
      <NewEntryForm description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} addEntry={addEntry} />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;
