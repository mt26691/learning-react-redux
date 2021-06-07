import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import useEntryDetails from '../hooks/useEntryDetails';
const NewEntryForm = () => {
    const {
        description, setDescription, value, setValue, isExpense, setIsExpense, addEntry
    } = useEntryDetails();

    return (<Form unstackable>
        <EntryForm description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense}></EntryForm>
        <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense} />
    </Form>);
}

export default NewEntryForm;