import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    CardContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        margin: "20px",
        boxShadow: " 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
    },
    cardImage: {
        height: "260px",
        width: "100%",
        margin: "10px",
        borderRadius: "5px",
        overflow:"hidden",
        objectFit:"cover"
    },
    cardHeader: {
        marginTop: 0
    },
    description: {
        fontFamily: "Roboto",
        marginBottom:"10px"
    },
    readmore:{
        fontWeight:"bold",
    },

    "@media (max-width:500px)": {
        CardContainer: {
            display: "flex",
            flexDirection: "column"
        },
        cardImage: {
            height: "250px",
            width: "85vw",
            margin: "10px",
            borderRadius: "5px"
        },
        description: {
            fontFamily: "Roboto",
            width:"80vw",
            minWidth:"100px",
            marginLeft:"20px"
        },
    }
}));
