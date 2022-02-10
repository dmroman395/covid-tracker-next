import React from "react";
import StatsCard from './statsCard'
import ChartCard from './chartCard'
import styles from '../css/statsCardPanel.module.css'
import { selectStats } from'../redux/statsSlice'
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

function StatsCardPanel() {
    const stats = useSelector(selectStats)

    const statsCards = <>
      <StatsCard type={'Total Confirmed Cases'} stat={stats.totalConfirmedCases}/>
      <StatsCard type={'Newly Confirmed Cases'} stat={stats.newlyConfirmedCases}/>
      <StatsCard type={'Total Deaths'} stat={stats.totalDeaths}/>
      <StatsCard type={'New Deaths'} stat={stats.newDeaths}/>
      <StatsCard type={'Total Recovered Cases'} stat={stats.totalRecoveredCases}/>
      <StatsCard type={'Newly Recovered Cases'} stat={stats.newlyRecoveredCases}/>
      <ChartCard dataSet={stats.history}/>
    </>

    return (
        <div className={styles.statsGrid}>
            {Object.keys(stats).length > 0 ? statsCards : <Typography align={'center'} sx={{ marginTop: '10px', colSpan: '2'}}>No information currently available</Typography>}
        </div>
    )
}

export default StatsCardPanel