import React from 'react';
import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';

const EntryLine = ({ description, value, isExpense = false, }) => {

    const color = isExpense ? 'red' : 'green';
    return (<Segment color={color}>
        <Grid columns="3" textAlign="right">
            <Grid.Row>
                <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
                <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
                <Grid.Column width={3}>
                    <Icon name="edit" bordered></Icon>
                    <Icon name="trash" bordered></Icon>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>);
}

export default EntryLine;