import { Alert, Box, Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function EditPage(props) {
    const [data, setData] = useState([]);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    const getAllDataId = (id) => {
        axios.get(`http://localhost:3000/data/${id}`)
            .then((res) => {
                setData(res.data)
            })
    }

    const editData = (id) => {
        const item = {
            name: data.name,
            description: data.description,
            price: data.price
        }



        axios.put(`http://localhost:3000/data/${id}`, item)
            .then(res => {
                console.log(res);
            })
    }

    useEffect(() => {
        getAllDataId();
    }, [])

    return (
        <div>
            <Grid container spacing={2} direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={8} >
                    <h1>Edit Page</h1>

                    <form onChange={editData} style={{ boxShadow: "1px 1px 15px gray", padding: "25px", borderRadius: "10px" }}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" value={data.name} onChange={(e) => setName(data.name)} label="Name" variant="outlined" />
                            {name === "" ? <p style={{ color: 'red' }}>Required</p> : null}
                            <TextField id="outlined-basic" value={description} onChange={(e) => setDescription(e.target.value)} label="Description" variant="outlined" />
                            {description === "" ? <p style={{ color: 'red' }}>Required</p> : null}
                            <TextField id="outlined-basic" value={price} onChange={(e) => setPrice(e.target.value)} label="Price" variant="outlined" />
                            <Button >Save</Button>
                        </Box>
                    </form>



                </Grid>
            </Grid>
        </div>
    )
}

    