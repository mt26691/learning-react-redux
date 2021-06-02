import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';
import { closeEditModal } from './actions/modals.action';
import EntryForm from './EntryForm';
import useEntryDetails from './hooks/useEntryDetails';

const ModalEdit = ({ isOpen, description, value, isExpense, id }) => {
    const entryUpdate = useEntryDetails(description, value, isExpense);
    const dispatch = useDispatch();
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm description={entryUpdate.description} value={entryUpdate.value} isExpense={entryUpdate.isExpense} setDescription={entryUpdate.setDescription}
                    setValue={entryUpdate.setValue} setIsExpense={entryUpdate.setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => { dispatch(closeEditModal()) }}>Close</Button>
                <Button primary onClick={() => entryUpdate.updateEntry(id)}>Save</Button>
            </Modal.Actions>
        </Modal>);
}

export default ModalEdit;