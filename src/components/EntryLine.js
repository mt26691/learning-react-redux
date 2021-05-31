import React, { Fragment } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

const EntryLine = ({ id, description, value, isExpense = false, deleteEntry, editEntry }) => {

    const color = isExpense ? 'red' : 'green';
    
    return (<Fragment>
        <Segment color={color}>
            <Grid columns="3" textAlign="right">
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
                    <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" bordered onClick={() => editEntry(id)}></Icon>
                        <Icon name="trash" bordered onClick={() => deleteEntry(id)}></Icon>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </Fragment>);
}

export default EntryLine;