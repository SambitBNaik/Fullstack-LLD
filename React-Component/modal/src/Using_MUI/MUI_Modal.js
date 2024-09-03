import React,{useState} from 'react'
import {Button, Modal,Box, Typography} from'@mui/material';

const style={
    position:'absolute',
    top:'30%',
    left:'50%',
    transform:'translate(-50%, 50%)',
    width:400,
    bgcolor:'background.paper',
    border:'2px solid #000',
    boxShadow:24,
    p:4,
}
const MUI_Modal = () => {
    const [open, setOpen]= useState(false);

    const handleClose=()=> setOpen(false);
    const handleOpen=()=> setOpen(true);
  return (
    <div>
        <Button onClick={handleOpen} variant='contained' color='primary'>
            Open Modal
        </Button>
        <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="model-title"
        aria-describedby='modal-description'>
            <Box sx={style}>
                <Typography id="modal-title" variant='h6' component="h2">
                    Modal Title
                </Typography>
                <Typography id="modal-description" sx={{mt:2}}>
                    This is a simple modal with some content.
                </Typography>
                <Button onClick={handleClose} variant='contained' sx={{mt:2}}>
                    Close Modal
                </Button>
            </Box>
        </Modal>
    </div>
  )
}

export default MUI_Modal