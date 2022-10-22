import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState([])

  const getData = () => {

    axios.get("http://localhost:3000/data")
      .then(res => {
        setData(res.data);
        console.log(res);
      })
  }

  React.useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      {data.map((elem) => {
        return (
          <>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img src={elem.image} alt="image" style={{ width: "400px", height: "300px" }} />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {elem.name}
                </Typography>
              </Box>
            </Modal>
          </>
        )
      })}
    </div>
  );
}
