import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from '../NewsCard/styles'



export default function NewsCard(props) {

    const classes = useStyles();

    //2021-01-09T12:15:30Z
    const fulldate = new Date(props.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
    var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
    const hour = parseInt(date[4].substring(0, 2)); //
    const time = hour > 12 ? true : false;


    return (
        <Card className={classes.CardContainer}>
            <CardMedia
                image={props.image
                }
                className={classes.cardImage}
            />
            <CardContent className={classes.cardTextContainer}>
                <CardHeader
                    title={props.title}
                    subheader={`short by ${props.author ? props.author : "by inshorts"} / ${props.publishedAt}`}
                    className={classes.cardHeader}
                />
                <Typography className={classes.description} variant="body2" color="textSecondary" component="p"  >
                    {props.description}
                </Typography>
                <span className={classes.readmore}>
                    read more at <a href={props.url} style={{ textDecoration: "none", color: "black" }}>{props.sourceName}</a>
                </span>
            </CardContent>
        </Card>
    );
}

