import React from 'react';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { selectCountry } from '../redux/countrySlice'
import { selectDarkMode } from '../redux/darkModeSlice'
import { useSelector } from 'react-redux'
import NewsCardPanel from './newsCardPanel';
import StatsCardPanel from './statsCardPanel';
import styles from '../css/infoCard.module.css'

function InfoCard() {
    const [tabValue, setTabValue] = useState('1');
    const country = useSelector(selectCountry)
    const darkMode = useSelector(selectDarkMode)

    const handleChange = (e, newVal) => {
      setTabValue(newVal);
    };

    return(
        <Paper
            elevation={10}
            sx={{
                borderRadius: 1,
                minHeight: '700px',
                maxHeight: '700px',
                width: '65%',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                // position: 'relative'
            }}
        >
            <Typography 
                variant='h4' 
                align='center'
                sx={{
                    margin: '15px 0'
                }}
            >
                {country.name}
            </Typography>
            <TabContext value={tabValue}>
                <Box
                    sx={{
                        borderBottom: 1, 
                        borderColor: 'divider',
                        borderTopLeftRadius: 3,
                        borderTopRightRadius: 3
                    }}
                >
                    <TabList variant='fullWidth' onChange={handleChange}>
                        <Tab label='News' value='1'/>
                        <Tab label='Stats' value='2'/>
                    </TabList>
                </Box>
                <TabPanel className={darkMode ? `${styles.panelContainer} ${styles.dark}` : `${styles.panelContainer} ${styles.light}`} value='1'>
                    <NewsCardPanel/>
                </TabPanel>
                <TabPanel className={styles.panelContainer} value='2'>
                    <StatsCardPanel/>
                </TabPanel>
            </TabContext>
        </Paper>  
    )
}

export default InfoCard