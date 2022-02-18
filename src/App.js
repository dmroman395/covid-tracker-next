import styles from './css/app.module.css';
import React, { useEffect, useState } from "react";
import Header from './components/header';
import Box from '@mui/material/Box';
import InfoCard from'./components/infoCard'
import ThemeDialog from './components/themeDialog';
import ErrorDialog from './components/errorDialog';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { setLoadingFalse, setLoadingTrue, selectLoading } from './redux/loadingSlice'
import { useDispatch } from 'react-redux';
import { selectDarkMode } from './redux/darkModeSlice';
import { selectTheme } from './redux/themeSlice'
import { useSelector } from 'react-redux';
import { updateNews } from './redux/newsSlice';
import { updateStats } from './redux/statsSlice';
import GlobeContainer from './threeJS/globeContainer';
import Snackbar from '@mui/material/Snackbar';
import Alert from  '@mui/material/Alert';
import Slide from '@mui/material/Slide';

const covidController = require('./controllers/covidController')

const { getInitialData } = covidController

function Transition(props) {
  return <Slide {...props} direction="up" />;
}

function App() {
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)
  const isLoading = useSelector(selectLoading)
  const [snackOpen, setSnackOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(setLoadingTrue())

    const data = await getInitialData()

    setTimeout(handleSnackbar, 7000)

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
      info: {
        main: customTheme
      }
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

  function openSnackbar() {
    setSnackOpen(true)
  }

  function closeSnackbar(e, r) {
      if (r === 'clickaway') return
      setSnackOpen(false)
  }

  function handleSnackbar() {
      if(isLoading) openSnackbar()
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeDialog/>
      <ErrorDialog/>
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
        <Snackbar 
            open={snackOpen}
            autoHideDuration={5000}
            onClose={closeSnackbar}
            TransitionComponent={Transition}
        >
            <Alert onClose={closeSnackbar} sx={{ width: '100%' }} severity='info' >
            Sorry for the wait, the server is still waking up...
            </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
