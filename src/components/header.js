import React, {useState} from 'react'
import DarkMode from './darkMode'
import * as THREE from 'three'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Snackbar from '@mui/material/Snackbar';
import Alert from  '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { selectDarkMode } from '../redux/darkModeSlice';
import { updateSelecting } from '../redux/themeSlice'
import { updateCountry } from '../redux/countrySlice'
import { updateNews } from '../redux/newsSlice'
import { disableRotation, toggleRotation, selectRotation } from '../redux/rotationSlice';
import { updateStats } from '../redux/statsSlice'
import { calcPosFromLatLon, getCurve } from '../controllers/globeController';
import { setLoadingFalse, setLoadingTrue, selectLoading } from '../redux/loadingSlice'
import { updateCurrentPosition, updateTargetPosition, updateCurve, resetCounter, selectCamera } from '../redux/cameraSlice'
import { useSelector, useDispatch } from 'react-redux';
import { updateError } from'../redux/errorSlice'
import coordinates from '../data/coordinates.json'
import styles from  '../css/header.module.css'

const countryController = require('../controllers/countryController')
const covidController = require('../controllers/covidController')

const { getCountryFromSearch } = countryController

const { getNewsFromProxy, getStatsFromProxy } = covidController

function Transition(props) {
    return <Slide {...props} direction="up" />;
}

function Header() {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectDarkMode)
    const isLoading = useSelector(selectLoading)
    const cam = useSelector(selectCamera)
    const isRotating = useSelector(selectRotation)
    const [searchVal, setSearchVal] = useState('')
    const [snackOpen, setSnackOpen] = useState(false)

    function setSearch(e) {
        e.preventDefault()
        
        setSearchVal(e.target.value)
    }

    async function capitalize(str) {
        let modSearchVal = ''

        const words = str.split(' ')

        words.forEach(word => {
            const firstLetter = word[0]

            const firstUpper = firstLetter.toUpperCase()

            const modWord =  firstUpper + word.substring(1)

            modSearchVal = modSearchVal + modWord + ' '
        })

        return modSearchVal
    }

    async function rotateGlobe() {
        
        // const val = await capitalize(searchVal)

        const {lat, lon} = coordinates[searchVal]

        const c = calcPosFromLatLon(lat, lon)
    
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

    async function getSearchResults(e) {
        e.preventDefault()
        dispatch(setLoadingTrue())

        const val = await capitalize(searchVal)

        const results = await getCountryFromSearch(val)

        setTimeout(handleSnackbar, 10000)

        if (Object.keys(results).length == 0) {
            dispatch(updateError(searchVal))
            dispatch(setLoadingFalse())
            return
        }

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