import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarReceipts: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarPayables: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));
