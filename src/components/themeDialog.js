import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Wheel from '@uiw/react-color-wheel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { selectTheme, updateTheme, updateSelecting, selectSelecting } from '../redux/themeSlice'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import styles from '../css/themeDialog.module.css'

const useStyles = makeStyles({
    root: {
        "&:focus": {
          border: "1px solid black"
        },
        "&:hover": {
            backgroundColor: 'transparent'
        }
      },
  });

const colors = ['#ff1744','#f50057','#d500f9','#651fff','#3d5afe','#2979ff','#00b0ff','#00e5ff','#1de9b6','#00e676','#76ff03','#c6ff00','#ffea00','#ffc400','#ff9100','#ff3d00']



function ThemeDialog() {
    const dispatch = useDispatch()
    const isSelecting = useSelector(selectSelecting)
    const currentTheme = useSelector(selectTheme)
    const classes = useStyles()

    const [customColor, setCustomColor] = useState(false)
    const [hex, setHex] = useState(currentTheme)
    

    function toggleColorSelector() {
        setCustomColor(!customColor)
    }

    function setNewTheme() {
        dispatch(updateTheme(hex))
    }

    function handleSelecting() {
        dispatch(updateSelecting())
    }

    const gridItems = colors.map((color, key) => {
        function setPresetColor() {
            setHex(color)
        }

        return (
            <Grid item xs={3} key={key}
                sx={{
                    bgcolor: color,
                    height: 65
                }}
            >
                <Button
                    className={classes.root}
                    variant='plain'
                    elevation={0}
                    disableRipple	
                    sx={{
                        bgcolor: 'transparent',
                    }}
                    onClick={setPresetColor}
                >
                </Button>
            </Grid>
        )
    })

    return(
        <Dialog
            open={isSelecting}
            onBackdropClick={handleSelecting}
            sx={{
                backdropFilter: 'blur(4px)'
            }}
            transitionDuration={{
                enter: 300,
                exit: 150
            }}
        >
            
            {/* <DialogTitle><Typography align='center' variant='h4'>Choose Color</Typography></DialogTitle> */}
            <DialogContent
                sx={{
                    width: 251,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                {
                    customColor
                    ?
                    <Wheel color={hex} onChange={color => setHex(color.hex)}/>
                    :
                    <Grid container spacing={0}>
                        {gridItems}
                    </Grid>
                }
            </DialogContent>
            <DialogActions
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div className={styles.colorButtons}>
                        <Button variant='contained' onClick={toggleColorSelector}>{customColor ? 'Preset Color' : 'Custom Color'}</Button>
                        <Button variant='contained' onClick={setNewTheme}>Confirm</Button>
                    </div>
                    <Button 
                        variant='outlined'
                        sx={{
                            width: '100%'
                        }}
                        onClick={handleSelecting}
                    >
                        Close
                    </Button>
                </DialogActions>
        </Dialog>
    )
}

export default ThemeDialog