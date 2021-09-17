import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import Form from './form';
import List from './list';

import useStyles from './css';

const Main = () => {
    const classes = useStyles();
    return (
    <Card className={classes.Main}>
        <CardHeader title="Expense Tracker"  subheader="Powered by Speechly" />
        <CardContent>
            <Typography variant="h5">Total Balance</Typography>
            <Typography variant="subtitle1" >Total Balance</Typography>
            {/* <Doughnut data="DATA" /> */}
            <Form/>
        </CardContent>
        <CardContent className={classes.Main2} >
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    );
    }

export default Main;