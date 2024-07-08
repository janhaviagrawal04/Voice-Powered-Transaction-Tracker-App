import React, { useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';

import Main from './components/Main/Main';
import Details from './components/Details/Details';
import useStyles from './styles';


const App = () => {
  const classes = useStyles();

  useEffect(() => {
    if (window.annyang) {
      // Define the commands to fill the form
      const commands = {
        'fill form with type :type category :category amount :amount date :date name :name': (type, category, amount, date, name) => {
          document.getElementById('type').value = type;
          document.getElementById('category').value = category;
          document.getElementById('amount').value = amount;
          document.getElementById('date').value = date;
          document.getElementById('name').value = name;
        },
      };
      window.annyang.addCommands(commands);
      window.annyang.start();
    }
  }, []);

  const handleVoiceCommand = () => {
    if (window.annyang) {
      window.annyang.start();
    }
  };

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>       
          <Details title="Receipts" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>       
          <Details title="Receipts" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Payables" />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant="contained" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }} onClick={handleVoiceCommand}>
            Start Voice Command
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;