import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, resetError } from'../redux/errorSlice'
import { Typography } from '@mui/material';


function ErrorDialog() {
    const dispatch = useDispatch()
    const errorMsg = useSelector(selectError)

    function handleClose() {
        dispatch(resetError())
    }

    return(
        <Dialog
            open={errorMsg.length > 0 ? true : false}
            sx={{
                backdropFilter: 'blur(4px)'
            }}
            transitionDuration={{
                enter: 300,
                exit: 100
            }}
        >
            <DialogContent
                sx={{
                    width: 300,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Typography variant='h5' align='center'>{errorMsg}</Typography>
            </DialogContent>
            <DialogActions sx={{display: 'flex', justifyContent: 'center'}} >
                    <Button 
                        variant='contained'
                        sx={{
                            width: '100%'
                        }}
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </DialogActions>
        </Dialog>
    )
}

export default ErrorDialog