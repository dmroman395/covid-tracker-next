import React from 'react';
import InfoCard from'./infoCard'
import GlobeContainer from '../threeJS/globeContainer';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import IconButton from '@mui/material/IconButton';
import styles from '../css/app.module.css';

function MobileView() {

    return (
        <>
            <div className={styles.content}>
                <div className={styles.infoCardContainer}>
                    <InfoCard/>
                </div>
                <div className={styles.globeContainer}>
                    <GlobeContainer/>
                </div>
            </div>
            <IconButton color='primary'>
                <ThreeSixtyIcon/>
            </IconButton>
        </>
    )
}

export default MobileView