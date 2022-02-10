import React from 'react'
import NewsCard from './newsCard'
import { selectNews } from '../redux/newsSlice'
import { useSelector } from 'react-redux'
import styles from '../css/newsCardPanel.module.css'
import { Typography } from '@mui/material'

function NewsCardPanel() {
  const data = useSelector(selectNews)

  let newsCardList

  if (data.length > 0) {
    newsCardList = data.map((article, i) => {
      return <NewsCard data={article} key={i}/>
    })
  } 

  return(
      <div className={data.length > 0 ? styles.newsCardPanel : styles.empty}>
          {data.length > 0 ? newsCardList : <Typography align={'center'} sx={{ marginTop: '10px'}}>No information currently available</Typography>}
      </div>
  )
}

export default NewsCardPanel