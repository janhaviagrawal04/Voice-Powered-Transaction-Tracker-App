import React, { useState, useContext } from 'react'
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { TransactionTrackerContext } from '../../../context/context';
import useStyles from './styles';
import { v4 as uuidv4 } from 'uuid';
import { receiptsCategories, payablesCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import CustomizedSnackbar from '../../Snackbar/Snackbar';

const initialState = {
  amount: '',
  category: '',
  name: '',
  type:'',
  date: formatDate(new Date()),
}

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(TransactionTrackerContext);
  const [open, setOpen] = useState(false);

  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }

    setOpen(true);
    addTransaction(transaction);
    setFormData(initialState);
  }

  const selectedCategories = formData.type === 'Receipts' ? receiptsCategories : payablesCategories;

  return (
    <Grid container spacing={2}>
      <CustomizedSnackbar open={open} setOpen={setOpen} />
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value})}
          >
            <MenuItem value="Receipts">Receipts</MenuItem>
            <MenuItem value="Payables">Payables</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="amount"
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value})}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="date"
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value)})}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="name"
          type="text"
          label="Name"
          fullWidth
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value})}
        />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  )
}

export default Form;