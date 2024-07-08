import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { TransactionTrackerContext } from '../../context/context';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(TransactionTrackerContext);

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="Transaction Tracker" align="center" />
        <Divider />
        <CardContent>
            <Typography align="center" variant="h5">Total Balance &#8377;{balance}</Typography>
            <Typography variant="subtitle1" style={{ linearHeight: '1.5em', marginTop: '20px'}}>
            Try saying: Add name John Alexander
            </Typography>
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cartContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Main
