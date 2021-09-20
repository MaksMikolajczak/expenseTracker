import React, {useState} from 'react'
import  { Help } from '@material-ui/icons';
import { Modal, Box, Typography } from '@material-ui/core';


export default function SimpleModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

    return (
        <div>
            <Help variant="contained" color="primary" onClick={handleOpen}/>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Information
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                This app is powered by Speechly, hold the button to add transactions verbally, eg "Add income for 50 pounds in category business for next friday"
                </Typography>
            </Box>
            </Modal>
        </div>
    );
}