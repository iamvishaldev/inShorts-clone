import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    CardContainer: {
        width:"100%",
        display:"flex",
        alignItems:"center",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));
