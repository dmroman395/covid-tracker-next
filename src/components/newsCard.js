import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import styles from '../css/newsCard.module.css'

function NewsCard({data}) {
    const {title, excerpt, webUrl, provider} = data
    const publisher = provider.name

    let modExcerpt

    if (excerpt.length > 200) {
        modExcerpt = excerpt.substring(0, 200) + '...'
    } else {
        modExcerpt = excerpt
    }

    return(
        <Card 
            className={styles.newsCard}
            sx={{
                borderRadius:0,
                borderBottom: 1,
                borderColor: 'divider'
            }}
        >
            <CardContent
                sx={{
                    width: '75%'
                }}
            >
                <Typography 
                    variant='subtitle1' 
                    sx={{
                        fontSize: 14,
                        fontWeight: 600,
                    }}
                >
                    {title}
                </Typography>
                <Typography 
                    variant='body2'
                    sx={{
                        marginBottom: 1,
                        fontSize: 12,
                    }}
                >
                    {modExcerpt}
                </Typography>
                <Typography 
                    variant='caption'
                    sx={{
                        fontStyle: 'italic'
                    }}
                >
                    {`Published by ${publisher}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Link
                    underline='always'
                    href={webUrl}
                    target='_blank'
                    rel='noopener'
                >
                    <Typography variant='subtitle2'>View Article</Typography>
                </Link>
            </CardActions>
        </Card>
    )
}

export default NewsCard