import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import EntryForm from './EntryForm';

const ModalEdit = ({ isOpen, setIsOpen, addEntry, description, value, isExpense, setDescription, setValue, setIsExpense }) => {

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} addEntry={addEntry} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button primary onClick={() => setIsOpen(false)}>Save</Button>
            </Modal.Actions>
        </Modal>);
}

export default ModalEdit;