import React, { useState } from 'react';
import InfoCard from'./infoCard'
import GlobeContainer from '../threeJS/globeContainer';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import IconButton from '@mui/material/IconButton';
import styles from '../css/app.module.css';

function MobileView() {
    const [isLeft, setIsLeft] = useState(true)


    function toggleContent() {
        const mobileDiv = document.querySelector('#mobile')

        if(isLeft) {
            mobileDiv.style.left = '-50%'
            mobileDiv.style.right = '50%'
        } else {
            mobileDiv.style.left = '50%'
            mobileDiv.style.right = '0%'
        }
        
        setIsLeft(!isLeft)
    }
    

    return (
        <>
            <div className={`${styles.content} ${styles.mobile}`} id='mobile'>
                <div className={styles.infoCardContainer}>
                    <InfoCard/>
                </div>
                <div className={styles.globeContainer}>
                    <GlobeContainer/>
                </div>
            </div>
            <IconButton color='primary' onClick={toggleContent}>
                <SwapHorizIcon/>
            </IconButton>
        </>
    )
}

export default MobileView