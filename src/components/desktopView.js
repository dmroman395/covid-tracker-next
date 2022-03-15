import React from 'react';
import InfoCard from'./infoCard'
import GlobeContainer from '../threeJS/globeContainer';
import styles from '../css/app.module.css';

function DesktopView() {

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
        </>
    )
}

export default DesktopView