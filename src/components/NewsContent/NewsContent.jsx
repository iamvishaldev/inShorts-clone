import React from 'react';
import Container from '@material-ui/core/Container';
import { Box, Typography } from '@material-ui/core';
import useStyles from '../NewsContent/Styles';
import NewsCard from '../NewsCard/NewsCard';

const NewsContent = (props) => {

    const classes = useStyles()

    return (
        <Container maxWidth="md">
            <Box className={classes.NewsDownloadApp}>
                <Typography className={classes.NewsDownloadAppText}>For the best experience use inshorts app on your smartphone</Typography>
                <img style={{ height: "80%" }} className={classes.NewsDownloadAppIcon} src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="App Store" />
                <img style={{ height: "80%" }} src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="App Store" />
            </Box>
            {
                props.newsArray.map((currentNews) => (
                    <NewsCard key={currentNews.title} title={currentNews.title}
                        author={currentNews.author} description={currentNews.description} image={currentNews.urlToImage}
                        publishedAt={currentNews.publishedAt} url={currentNews.url} sourceName={currentNews.source.name}
                    />
                ))
            }
        </Container>
    )
}

export default NewsContent
