import React, { useContext } from 'react';
import useStyles from './styles';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { TransactionTrackerContext } from '../../../context/context';

const List = () => {
    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(TransactionTrackerContext);

  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar className={transaction.type === 'Receipts' ? classes.avatarReceipts : classes.avatarPayables}>
                        <MoneyOff />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.name} secondary={`Rs.${transaction.amount} - ${transaction.date} - ${transaction.category}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </MUIList>
  )
}

export default List
