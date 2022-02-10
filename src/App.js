import styles from './css/app.module.css';
import React, { useEffect } from "react";
import Header from './components/header';
import Box from '@mui/material/Box';
import InfoCard from'./components/infoCard'
import ThemeDialog from './components/themeDialog';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { setLoadingFalse, setLoadingTrue } from './redux/loadingSlice'
import { useDispatch } from 'react-redux';
import { selectDarkMode } from './redux/darkModeSlice';
import { selectTheme } from './redux/themeSlice'
import { useSelector } from 'react-redux';
import { updateNews } from './redux/newsSlice';
import { updateStats } from './redux/statsSlice';
import GlobeContainer from './threeJS/globeContainer';

const covidController = require('./controllers/covidController')

const { getInitialData } = covidController

function App() {
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(setLoadingTrue())

    const data = await getInitialData()

    dispatch(updateNews(data.news))
    dispatch(updateStats(data.stats))

    dispatch(setLoadingFalse())
  },[])

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: customTheme
      },
      background: {
        default: darkMode ? '#303030' : '#f2f2f2',
        paper: darkMode ? '#424242' : '#fafafa'
      },
    },
    typography: {
      fontFamily: 'Quicksand'
    },
    components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'plain' },
          style: {
            height: 65,
            width: 'inherit',
            borderRadius: 0
          },
        },
      ],
    },
  },
  })

  return (
    <ThemeProvider theme={theme}>
      <ThemeDialog/>
      <Box 
        className={styles.App}
        sx={{
          backgroundColor: theme.palette.background.default
        }}
      >
        <Header/>
        <div className={styles.mainContent}>
          <div className={styles.infoContainer}><InfoCard align='center'>Placeholder</InfoCard></div>
          <div className={styles.globeContainer}><GlobeContainer/></div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
