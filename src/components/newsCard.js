import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';


const test = {
    path: "_news/2021-02-25-hong-kong-records-13-new-coronavirus-infections-three-of-them-untraceable.md",
    title: "Hong Kong records 13 new coronavirus infections, three of them untraceable",
    excerpt: "One of the untraceable cases involved a 62-year-old man who went to work the day after testing positive for reasons that remain unclear.",
    sourceUrl: null,
    webUrl: "https://www.scmp.com/news/hong-kong/health-environment/article/3123077/hong-kong-records-13-new-coronavirus-infections",
    originalUrl: "https://www.scmp.com/news/hong-kong/health-environment/article/3123077/hong-kong-records-13-new-coronavirus-infections",
    featuredContent: null,
    highlight: null,
    heat: 103,
    tags: ["China-HongKong", "CN", "CN-HK"],
    images: [
      {
        url: "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_coronavirus_generic/public/d8/images/methode/2021/02/25/1c14a918-7763-11eb-8b9d-76c80a88a6d4_image_hires_204027.jpg?itok=3AHu9yh1&v=1614256833",
        width: 1200,
        height: 630,
        title: null,
        attribution: null,
        isCached: true
      }
    ],
    content: "\r\n",
    type: "article",
    ampWebUrl: "https://amp.scmp.com/news/hong-kong/health-environment/article/3123077/hong-kong-records-13-new-coronavirus-infections",
    cdnAmpWebUrl: "https://amp-scmp-com.cdn.ampproject.org/c/s/amp.scmp.com/news/hong-kong/health-environment/article/3123077/hong-kong-records-13-new-coronavirus-infections",
    publishedDateTime: "2021-02-25T06:55:00-08:00",
    updatedDateTime: null,
    provider: {
      name: "South China Morning Post",
      domain: "scmp.com",
      images: null,
      publishers: null,
      authors: null
    },
    locale: "en-us",
    categories: ["news"],
    topics: ["Coronavirus in China", "Coronavirus in Asia", "Coronavirus"]
  }

const {images, title, excerpt, webUrl, provider} = test
const image = images[0].url
const publisher = provider.name

function NewsCard() {
    return(
        <>
            <Card variant='outlined'>
                <CardMedia
                    component='img'
                    height='80%'
                    image={image}
                />
                <CardContent>
                    <Typography variant='subtitle1' fontWeight='600'>{title}</Typography>
                    <Typography variant='body2'>{excerpt}</Typography>
                    <Typography variant='caption'>{`Published by ${publisher}`}</Typography>
                </CardContent>
                <CardActions>
                    <Link
                        underline='always'
                        href={webUrl}
                        target='_blank'
                        rel='noopener'
                    >
                        <Typography variant='caption'>View Article</Typography>
                    </Link>
                </CardActions>
            </Card>
        </>
    )
}

export default NewsCard