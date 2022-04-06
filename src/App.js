import styles from './css/app.module.css';
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Header from './components/header';
import HeaderMobile from './components/headerMobile';
import Box from '@mui/material/Box';
import InfoCard from'./components/infoCard'
import ThemeDialog from './components/themeDialog';
import ErrorDialog from './components/errorDialog';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { setLoadingFalse, setLoadingTrue, selectLoading } from './redux/loadingSlice'
import { useDispatch } from 'react-redux';
import { selectDarkMode, setDark } from './redux/darkModeSlice';
import { selectTheme } from './redux/themeSlice'
import { useSelector } from 'react-redux';
import { updateNews } from './redux/newsSlice';
import { updateStats } from './redux/statsSlice';
import GlobeContainer from './threeJS/globeContainer';
import MobileView from './components/mobileView';
import DesktopView from './components/desktopView';
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
  const loadingRef = useRef()
  const [snackOpen, setSnackOpen] = useState(false)
  // const [viewSize, setViewSize] = useState(1000)
  const [isMobile, setIsMobile] = useState(false)
  const dispatch = useDispatch()

  loadingRef.current = isLoading

  function handleMobile() {
    const windowSize = window.innerWidth

    if(windowSize <= 950) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useLayoutEffect(() => {
    const pref = window.matchMedia('(prefers-color-scheme: dark)')
    if (pref.matches) {
        dispatch(setDark())
    }

    window.addEventListener('resize', handleMobile)

    handleMobile()
  },[])

  useEffect(async () => {
    dispatch(setLoadingTrue())

    setTimeout(handleSnackbar, 7000)

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
      if(loadingRef.current) openSnackbar()
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
        {isMobile ? <HeaderMobile/> : <Header/> }
        <div className={styles.mainContent}>
          {isMobile ? <MobileView/> : <DesktopView/>}
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
