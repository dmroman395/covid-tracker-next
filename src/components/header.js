import React from 'react'
import DarkMode from './darkMode'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { selectDarkMode } from '../redux/darkModeSlice';
import { updateSelecting } from '../redux/themeSlice'
import { useSelector, useDispatch } from 'react-redux';
import '../css/header.css'

function Header() {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectDarkMode)

    function handleSelecting() {
        dispatch(updateSelecting())
    }
    
    return (
            <div className='header'>
                <Button 
                    variant='contained' 
                    size='small'
                    sx={{
                        fontWeight: 600
                    }}
                    onClick={handleSelecting}
                >
                    Change Theme
                </Button>
                <div className='search'>
                    <TextField 
                    label="Search..." 
                    variant="outlined" 
                    type='search' 
                    size='small'
                    sx={{
                        width: 400,
                        bgcolor: darkMode ? null : 'white',
                        borderRadius: 15
                    }}
                    />
                    <IconButton color='primary'>
                        <SearchIcon/>
                    </IconButton> 
                </div>
                <DarkMode/>
            </div>

    )
}

export default Header