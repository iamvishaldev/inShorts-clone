import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    NewsDownloadApp:{
        display:"flex",
        alignItems:"center",
        background:"#f44336",
        width:"95%",
        height:"48px",
        color:"white",
        marginTop:"48px",
        paddingRight:"40px",
        paddingLeft:"40px",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)"
    },
    NewsDownloadAppText:{
        flex:1,
        fontFamily:"inherit"
    },
    NewsDownloadAppIcon:{
        margin:"1rem"
    },
    "@media (max-width: 960px)":{
        NewsDownloadApp:{
            display:"none"
        }
    }


  });