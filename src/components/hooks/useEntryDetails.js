import { useEffect, useState } from 'react';
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { closeEditModal } from '../actions/modals.action';

function useEntryDetails(des = '', val = '', isExp = true) {
    const [description, setDescription] = useState(des);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch();
    function addEntry() {
        dispatch(addEntryRedux(
            {
                id: uuidv4(),
                description,
                value,
                isExpense
            }
        ));
        resetValues();
    }

    useEffect(() => {
        setDescription(des);
        setValue(val);
        setIsExpense(isExp);
    }, [des, val, isExp]);

    function updateEntry(id) {
        dispatch(updateEntryRedux(
            id,
            {
                id,
                description,
                value,
                isExpense
            }
        ));
        resetValues();
        dispatch(closeEditModal());
    }

    function resetValues() {
        setDescription('');
        setValue('');
        setIsExpense(true);

    }

    return {
        description, setDescription, value, setValue, isExpense, setIsExpense, addEntry, updateEntry
    }
}

export default useEntryDetails;