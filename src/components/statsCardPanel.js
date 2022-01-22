import React from "react";
import StatsCard from './statsCard'
import ChartCard from './chartCard'
import styles from '../css/statsCardPanel.module.css'

const test =  {
    totalConfirmedCases: 112567104,
    newlyConfirmedCases: 423205,
    totalDeaths: 2512203,
    newDeaths: 9756,
    totalRecoveredCases: 72468921,
    newlyRecoveredCases: 303107,
}

function StatsCardPanel() {
    return (
        <div className={styles.statsGrid}>
            <StatsCard type={'Total Confirmed Cases'} stat={test.totalConfirmedCases}/>
            <StatsCard type={'Newly Confirmed Cases'} stat={test.newlyConfirmedCases}/>
            <StatsCard type={'Total Deaths'} stat={test.totalDeaths}/>
            <StatsCard type={'New Deaths'} stat={test.newDeaths}/>
            <StatsCard type={'Total Recovered Cases'} stat={test.totalRecoveredCases}/>
            <StatsCard type={'Newly Recovered Cases'} stat={test.newlyRecoveredCases}/>
            <ChartCard type={'Newly Recovered Cases'} stat={test.newlyRecoveredCases}/>
        </div>
    )
}

export default StatsCardPanel