import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useSelector, useDispatch } from 'react-redux';
import { selectError } from'../redux/errorSlice'


function ErrorDialog() {
    const dispatch = useDispatch()
    const errorMsg = useSelector(selectError)

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