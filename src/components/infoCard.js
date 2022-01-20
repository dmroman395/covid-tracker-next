import React from 'react';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import NewsCard from './newsCard';

function InfoCard() {
    const [tabValue, setTabValue] = useState('1');

    const handleChange = (e, newVal) => {
      setTabValue(newVal);
    };

    return(
        <Paper
            sx={{
                borderRadius: 3,
                height: '600px',
                width: '500px'
            }}
        >
            <Typography 
                variant='h4' 
                align='center'
                sx={{
                    margin: '15px 0'
                }}
            >
                Country
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
                <TabPanel value='1'>
                    <NewsCard/>
                </TabPanel>
                <TabPanel value='2'>
                    Stats
                </TabPanel>
            </TabContext>
        </Paper>  
    )
}

export default InfoCard