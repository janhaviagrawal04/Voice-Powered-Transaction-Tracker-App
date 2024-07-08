import React from 'react'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import useTransactions from '../../useTransactions';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';


const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions( title);

  return (
    <Card className={title === 'Receipts' ? classes.receipts : classes.payable}>
        <CardHeader title= { title } />
        <CardContent>
            <Typography variant="h5">&#8377;{total}</Typography>
            <Doughnut data = {chartData} />
        </CardContent>
    </Card>
  );
}

export default Details
