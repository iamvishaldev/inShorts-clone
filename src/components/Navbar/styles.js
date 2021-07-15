import { makeStyles } from '@material-ui/core/styles';
import {Theme} from '../Theme'

export default makeStyles(()=>({
    navbar:{
        backgroundColor:Theme.colors.base1,
    },
    iconStyle:{
        height:"57px",
    },
    icon:{
      display:"flex",
      flex:0.95,
      justifyContent:"center"
    }
}))