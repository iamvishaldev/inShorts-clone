import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
      backgroundColor:"#323232",
      padding: theme.spacing(6, 0),
      color:"white"
    },
    copyright:{
        color:"white"
    },
    iconStyle:{
        height:"60px",
        objectFit:"contain",
        cursor:"pointer"
    }
  }));