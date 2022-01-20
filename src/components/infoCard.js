import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
// import { selectDarkMode } from './redux/darkModeSlice';
// import { selectTheme } from './redux/themeSlice'
// import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';



function InfoCard() {
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (e, newVal) => {
      setTabValue(newVal);
    };

    const theme = useTheme()

    return(
        <Paper
            sx={{
                borderRadius: 3,
                height: '600px',
                width: '500px'
            }}
        >
            <Box
                sx={{
                    borderBottom: 1, 
                    borderColor: 'divider',
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3
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
                <Tabs value={tabValue} variant='fullWidth' onChange={handleChange}>
                    <Tab label='News'></Tab>
                    <Tab label='Stats'></Tab>
                </Tabs>
            </Box>
        </Paper>
        
    )
}

export default InfoCard