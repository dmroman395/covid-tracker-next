import styles from './css/app.module.css';
import React from "react";
import Header from './components/header';
import Box from '@mui/material/Box';
import InfoCard from'./components/infoCard'
import ThemeDialog from './components/themeDialog';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectDarkMode } from './redux/darkModeSlice';
import { selectTheme } from './redux/themeSlice'
import { useSelector } from 'react-redux';
import GlobeContainer from './threeJS/globeContainer';

function App() {
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)

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
