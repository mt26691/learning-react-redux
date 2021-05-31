import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
    return (<Form unstackable>
        <Form.Group>
            <Form.Input icon='tags' width={12} label="Description" placeholder="New shiny thing" />
            <Form.Input icon='dollar' width={4} label="Value" placeholder="100.00" iconPosition="left" />
        </Form.Group>
        <ButtonSaveOrCancel />
    </Form>);
}

export default NewEntryForm;