import React from 'react';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import NewsCardPanel from './newsCardPanel';
import styles from '../css/infoCard.module.css'

function InfoCard() {
    const [tabValue, setTabValue] = useState('1');

    const handleChange = (e, newVal) => {
      setTabValue(newVal);
    };

    return(
        <Paper
            sx={{
                borderRadius: 1,
                maxHeight: '700px',
                width: '70%',
                overflow: 'hidden'
            }}
        >
            <Typography 
                variant='h4' 
                align='center'
                sx={{
                    margin: '15px 0'
                }}
            >
                Global
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
                <TabPanel className={styles.newsCardPanelContainer} value='1'>
                    <NewsCardPanel/>
                </TabPanel>
                <TabPanel className={styles.newsCardContainer} value='2'>
                    Stats
                </TabPanel>
            </TabContext>
        </Paper>  
    )
}

export default InfoCard