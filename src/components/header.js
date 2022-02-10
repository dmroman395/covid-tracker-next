import React, {useState} from 'react'
import DarkMode from './darkMode'
import * as THREE from 'three'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { selectDarkMode } from '../redux/darkModeSlice';
import { updateSelecting } from '../redux/themeSlice'
import { updateCountry } from '../redux/countrySlice'
import { updateNews } from '../redux/newsSlice'
import { disableRotation, toggleRotation, selectRotation } from '../redux/rotationSlice';
import { updateStats } from '../redux/statsSlice'
import { calcPosFromLatLon, getCurve } from '../controllers/globeController';
import { setLoadingFalse, setLoadingTrue } from '../redux/loadingSlice'
import { updateCurrentPosition, updateTargetPosition, updateCurve, resetCounter, selectCamera } from '../redux/cameraSlice'
import { useSelector, useDispatch } from 'react-redux';
import coordinates from '../data/coordinates.json'
import styles from  '../css/header.module.css'

const countryController = require('../controllers/countryController')
const covidController = require('../controllers/covidController')


const { getCountryFromSearch } = countryController

const { getNewsFromProxy, getStatsFromProxy } = covidController

function Header() {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectDarkMode)
    const cam = useSelector(selectCamera)
    const isRotating = useSelector(selectRotation)
    const [searchVal, setSearchVal] = useState('')

    function setSearch(e) {
        e.preventDefault()
        
        setSearchVal(e.target.value)
    }

    function rotateGlobe() {
        const {lat, lon} = coordinates[searchVal]
        const c = calcPosFromLatLon(lat, lon)

        // console.log(searchVal)
    
        const point = new THREE.Vector3(c.x,c.y,c.z)
    
        const coeff = 1 + (1.75/1)
    
        const currPos = [cam.currentPosition[0], cam.currentPosition[1], cam.currentPosition[2]]
    
        const targetPos = [point.x * coeff, point.y * coeff, point.z * coeff]
    
        const curve = getCurve(currPos,targetPos)
       
        dispatch(resetCounter())
        dispatch(updateCurrentPosition(currPos))
        dispatch(updateTargetPosition(targetPos))
        dispatch(updateCurve(curve))
        dispatch(disableRotation())
    }

    async function getSearchResults(e) {
        e.preventDefault()
        dispatch(setLoadingTrue())
        
        const results = await getCountryFromSearch(searchVal)
        dispatch(updateCountry(results))

        rotateGlobe()

        const news = await getNewsFromProxy(results.code)
        dispatch(updateNews(news))

        const stats = await getStatsFromProxy(results.code)
        dispatch(updateStats(stats))

        dispatch(setLoadingFalse())
    }

    function handleRotationToggle() {
        dispatch(toggleRotation())
    }

    function handleSelecting() {
        dispatch(updateSelecting())
    }
    
    return (
            <div className={styles.header}>
                <div>
                <Button 
                    variant='contained' 
                    size='small'
                    sx={{
                        fontWeight: 600,
                        marginRight: '10px' 
                    }}
                    onClick={handleSelecting}
                >
                    Change Theme
                </Button>
                <Button 
                    variant='contained' 
                    size='small'
                    sx={{
                        fontWeight: 600
                    }}
                    onClick={handleRotationToggle}
                >
                    {`${isRotating ? 'Disable' : 'Enable'} Rotation`}
                </Button>
                </div>
                <div className={styles.search}>
                    <form onSubmit={getSearchResults}>
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
                    </form>
                </div>
                <DarkMode/>
            </div>

    )
}

export default Header