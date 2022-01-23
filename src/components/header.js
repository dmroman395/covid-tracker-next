import React, {useState} from 'react'
import DarkMode from './darkMode'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { selectDarkMode } from '../redux/darkModeSlice';
import { updateSelecting } from '../redux/themeSlice'
import { updateCountry } from '../redux/countrySlice'
import { updateNews } from '../redux/newsSlice'
import { updateStats } from '../redux/statsSlice'
import { useSelector, useDispatch } from 'react-redux';
import styles from  '../css/header.module.css'

const countryController = require('../controllers/countryController')
const covidController = require('../controllers/covidController')


const { getCountryFromSearch} = countryController

const { getNewsFromProxy, getStatsFromProxy } = covidController

function Header() {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectDarkMode)
    const [searchVal, setSearchVal] = useState('')

    function setSearch(e) {
        e.preventDefault()
        
        setSearchVal(e.target.value)
    }

    async function getSearchResults() {
        const results = await getCountryFromSearch(searchVal)
        console.log(results)
        dispatch(updateCountry(results))

        const news = await getNewsFromProxy(results.code)
        dispatch(updateNews(news))

        const stats = await getStatsFromProxy(results.code)
        dispatch(updateStats(stats))
    }

    function handleSelecting() {
        dispatch(updateSelecting())
    }
    
    return (
            <div className={styles.header}>
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
                <div className={styles.search}>
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
                    onChange={e => setSearch(e)}
                    />
                    <IconButton color='primary' onClick={getSearchResults}>
                        <SearchIcon/>
                    </IconButton> 
                </div>
                <DarkMode/>
            </div>

    )
}

export default Header