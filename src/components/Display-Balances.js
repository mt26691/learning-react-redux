import React from 'react';
import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({ title, value, color = 'black', size = "tiny" }) => {
    return (<Segment textAlign="center">
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <DisplayBalance title="Income" value="1253.0" color="green" />
                </Grid.Column>
                <Grid.Column>
                    <DisplayBalance title="Expenses" value="623.50" color="red" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>);
}

export default DisplayBalances;