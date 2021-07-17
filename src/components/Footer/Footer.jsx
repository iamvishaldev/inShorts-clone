import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from '../Footer/styles'

function Copyright() {
    return (
        <Box >
            <Typography variant="body2" color="textPrimary" align="center" >
                {'Copyright © '}
                <Link  color="inherit" href="https://material-ui.com/">
                    Your Website
                </Link>
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}

export default function Footer(props) {

    const classes = useStyles();
    const { description, title } = props;

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    <img className={classes.iconStyle} src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" />
                </Typography>
                <Divider />
                <Copyright  />
            </Container>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};