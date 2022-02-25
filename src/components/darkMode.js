import React from "react";
import styles from '../css/darkMode.module.css'
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { toggle, selectDarkMode } from '../redux/darkModeSlice'
import { useDispatch, useSelector } from 'react-redux';

function DarkMode() {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectDarkMode)
 
    function toggleDarkMode() {
        dispatch(toggle())
    }

    return (
        <div className={styles.darkMode}>
            <LightModeIcon color='primary'/>
            <Switch onClick={toggleDarkMode} checked={darkMode}/>
            <DarkModeIcon color ='primary'/>
        </div>
    )
}

export default DarkMode;