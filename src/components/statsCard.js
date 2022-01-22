import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { selectDarkMode } from '../redux/darkModeSlice'
import { useSelector } from 'react-redux'

function StatsCard({type, stat}) {
    const darkMode = useSelector(selectDarkMode)

    let color
    const modNum = stat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (type.includes('Recovered')) {
        if(darkMode) color = 'lightGreen'

        if(!darkMode) color = 'green'
    }

    if (type.includes('Death')) color = 'red'

    if (type.includes('Confirmed')) color = 'orange'

    return (
        <Card 
            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 0,
                border: 1,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderColor: 'divider',
                "&:nth-child(odd)": {
                    borderRight: 1,
                    borderColor: 'divider'
                }
            }}
        >
            <CardContent sx={{flexGrow: 1, padding: '0 !important'}}>
                <Typography variant='body1' align='center' fontWeight='500'>{type}</Typography>
                <Typography 
                    variant='body1' 
                    align='center' 
                    color={color}
                    fontWeight='500'
                    sx={{
                        textShadow: darkMode ? `0 0 10px ${color}` : null
                    }}
                >
                    {modNum}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default StatsCard