import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Modal2 from "../Modal2/Modal2"

export default function MiddleDividers() {

  const [data, setData] = useState([])

  const getData = () => {

    axios.get("http://localhost:3000/data")
      .then(res => {
        setData(res.data);
        console.log(res);
      })
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <label style={{ display: "flex" }}>
      {data.map((elem) => {
        return (
          <>
            <Box sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}
              style={{ marginTop: "100px", marginLeft: "20px" }}>
              <Box sx={{ my: 3, mx: 2 }} >
                <Grid container alignItems="center">
                  <Grid item xs>
                    <img src={elem.image} alt="image" style={{ width: "400px", height: "300px" }} />
                    <Typography gutterBottom variant="h4" component="div">
                      {elem.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="h6" component="div">
                      {elem.price}$
                    </Typography>
                  </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2">
                  {elem.discription}
                </Typography>
              </Box>
              <Divider variant="middle" />
              <Box sx={{ m: 2 }}>
              </Box>
              <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                <button style={{border: "none", background: "transparent"}}><Modal2 /></button>
              </Box>
            </Box>

          </>
        )
      })}  
    </label>
  );
}
