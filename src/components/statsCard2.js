import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { selectDarkMode } from '../redux/darkModeSlice'
import { useSelector } from 'react-redux'
import styles from '../css/statsCard.module.css'

function StatsCard2({type, stat}) {
    const darkMode = useSelector(selectDarkMode)

    let color
    const modNum = stat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (type.includes('Confirmed')) {
        if(darkMode) color = 'lightGreen'

        if(!darkMode) color = 'green'
    }

    if (type.includes('Death')) color = 'red'

    if (type.includes('Recovered')) color = 'orange'

    return (
        <Card 
            className={styles.gridItem2}
            elevation={0}
        >
            <CardContent>
                <Typography variant='h6' align='center'>{type}</Typography>
                <Typography variant='h6' align='center' color={color}>{modNum}</Typography>
            </CardContent>
        </Card>
    )
}

export default StatsCard2