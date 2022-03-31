
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './App.css';

import './Board.css';
const style = {
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 350,
bgcolor: 'background.paper',
border: 'none',
background: '#212121',
boxShadow: 24,
p: 4,
};
const custom={
    fontSize:29,
    position: 'absolute',
    top: 0,
    right:0,
    left:100,
    // marginLeft: 40,
    // width: '70%',
    marginRight: 12.5,
    fontFamily: 'neon',
}
const close={
    position: 'absolute',
    top: '0',
    left:'0',
    color: '#fff',
    marginRight:'100',

}

export default function BasicModal() {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

return (
    <div>
    <Button onClick={handleOpen} sx={custom} className="neon-orange play"  > How to play

</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="play"
    >
        <Box sx={style}>
        <Button onClick={handleClose} sx={close}>Close</Button>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            GamePlay 
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the adjacent lights. The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible. <p>Good luck <span role="img">👍</span></p>
        </Typography>
        </Box>
    </Modal>
    </div>
);
}