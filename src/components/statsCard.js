import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { selectDarkMode } from '../redux/darkModeSlice'
import { useSelector } from 'react-redux'
import styles from '../css/statsCard.module.css'

function StatsCard({type, stat}) {
    const darkMode = useSelector(selectDarkMode)

    let color
    const modNum = stat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (type.includes('Confirmed')) {
        if(darkMode) color = 'lightGreen'

        if(!darkMode) color = 'green'
    }

    if (type.includes('Death')) color = 'red'

    if (type.includes('Recovered')) color = 'orange'

    // if(type === 'Chart') 

    return (
        <Card 
            elevation={0}
            sx={{
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
            <CardContent>
                <Typography variant='h6' align='center'>{type}</Typography>
                <Typography variant='h6' align='center' color={color}>{modNum}</Typography>
            </CardContent>
        </Card>
    )
}

export default StatsCard