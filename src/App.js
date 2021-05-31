import './App.css';
import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/Display-Balances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title="Budget"></MainHeader>
      <DisplayBalance title="Your Balance:" value="2,550.53" color="black" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3"></MainHeader>
      <EntryLine isExpense={false} description="Income" value={1000.0} />
      <EntryLine isExpense={true} description="Expense" value={5000.0} />
      <MainHeader title="Add New Transaction" type="h3"></MainHeader>
      <NewEntryForm />
    </Container>
  );
}

export default App;
