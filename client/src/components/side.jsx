import React from 'react';
import {Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import useContracts from '../utils/balanceCal';
import useStyles from './css';

const Side = ({title}) => {
    const { total, chartData } = useContracts(title);
    const classes = useStyles();
    console.log(chartData)
    return (
    <Card className={title === 'Income' ? classes.income: classes.expense}>
        <CardHeader title={title} />
        <CardContent>
            <Typography variant="h5">£{total}</Typography>
            <Doughnut data={chartData} />
        </CardContent>
    </Card>
    );
    }

export default Side;