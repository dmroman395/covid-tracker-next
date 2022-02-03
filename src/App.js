import styles from './css/app.module.css';
import React from "react";
import Header from './components/header';
import Box from '@mui/material/Box';
import InfoCard from'./components/infoCard'
import Modal from '@mui/material/Modal';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectDarkMode } from './redux/darkModeSlice';
import { selectTheme, selectSelecting, updateSelecting } from './redux/themeSlice'
import { useSelector, useDispatch } from 'react-redux';
import GlobeContainer from './threeJS/globeContainer';
import ColorPickerContainer from './components/colorPickerContainer';

function App() {
  const dispatch = useDispatch()
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)
  const isSelecting = useSelector(selectSelecting)  

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

  function handleBackdrop() {
    dispatch(updateSelecting())
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={isSelecting}
        closeAfterTransition
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          timeout: 300,
          sx:{
            backdropFilter: 'blur(5px)'
          }
        }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onBackdropClick={handleBackdrop}
      >
        <ColorPickerContainer/>
      </Modal>
      {/* {isSelecting ? : null} */}
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
