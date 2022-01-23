import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { selectDarkMode } from '../redux/darkModeSlice'
import { useSelector } from 'react-redux'
import styles from '../css/statsCard.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  

function ChartCard({dataSet}) {
    const darkMode = useSelector(selectDarkMode)

    let history = []
    let labels = []
    let confirmed = []
    let death = []
    let recovered = []

    for (let i = 0; i < dataSet.length; i += 40) {
        const newDate = new Date(dataSet[i].date)
        const data = {
            ...dataSet[i],
            date: newDate
        }
        history.push(data)
    }

    for (let point of history) {
        labels.push(point.date.toLocaleDateString("en-US"))
        confirmed.push(point.confirmed)
        death.push(point.deaths)
        recovered.push(point.recovered)
    }

    ChartJS.defaults.color = darkMode ? '#FFFFFF' : '#666'

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              fontColor: darkMode ? '#FFFFFF' : '#666'
            }
          },
        },
        layout: {
          padding: 15
        },
      };
      
    const data = {
      labels,
      datasets: [
        {
          label: 'Confirmed Cases',
          data: confirmed,
          borderColor: 'orange',
        },
        {
          label: 'Deaths',
          data: death,
          borderColor: 'red',
        },
        {
          label: 'Recovered Cases',
          data: recovered,
          borderColor: darkMode ? 'lightGreen' : 'green',
        }
      ],
    };

    return (
        <Card 
            className={styles.gridItem2}
            elevation={0}
        >
            <CardContent sx={{flexGrow: 1, padding: '0 !important', maxWidth: '100%'}}>
                <Line options={options} data={data} />
            </CardContent>
        </Card>
    )
}

export default ChartCard