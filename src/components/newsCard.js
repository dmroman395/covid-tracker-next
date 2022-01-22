import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import styles from '../css/newsCard.module.css'

function NewsCard({data}) {
    const {title, excerpt, webUrl, provider, images} = data
    const image = images !== null ? images[0].url : null
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
                borderColor: 'divider',
                alignItems: 'center'
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
                    underline='none'
                    href={webUrl}
                    target='_blank'
                    rel='noopener'
                    sx={{
                        border: 1,
                        borderColor: 'primary',
                        padding: '5px',
                        borderRadius: '4px'
                    }}
                >
                    <Typography variant='subtitle2' align='center'>View Article</Typography>
                </Link>
            </CardActions>
        </Card>
    )
}

export default NewsCard