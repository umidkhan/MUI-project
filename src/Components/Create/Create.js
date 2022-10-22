import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export default function FullWidthTextField() {

    const [name, setName] = useState("")
    const [discription, setDiscription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    const postData = {
        name: name,
        discription: discription,
        price: price,
        image: image
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const res = await axios.post("http://localhost:3000/data", postData);

            // name === "" ? alert("To'ldirilmagan") : alert("Succesfull");

            console.log(res);
            if (res.status === 201) {
                alert('Successfuly');
                // <MyAlert />
                navigate("/home");
                setName("")
                setDiscription("")
                setPrice("")
                setImage("")
            } else {
                alert('Error');
            }
        }
        catch (error) {
            console.log(error.response.data);
        }


        console.log(postData);

    }

    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
            style={{ marginTop: '100px' }}
        >
            <TextField required fullWidth label="First Name" id="fullWidth" value={name} style={{ marginBottom: "15px" }} onChange={(e) => setName(e.target.value)} />
            {name === "" ? <p style={{ color: "red", fontWeight: "bolder" }}>Please, enter information</p> : null}
            <TextField required fullWidth label="Discription" id="fullWidth" value={discription} style={{ marginBottom: "15px" }} onChange={(e) => setDiscription(e.target.value)} />
            {discription === "" ? <p style={{ color: "red", fontWeight: "bolder" }}>Please, enter information</p> : null}
            <TextField required fullWidth label="Price" id="fullWidth" value={price} style={{ marginBottom: "15px" }} onChange={(e) => setPrice(e.target.value)} />
            {price === "" ? <p style={{ color: "red", fontWeight: "bolder" }}>Please, enter information</p> : null}
            <TextField required fullWidth label="Image URL" id="fullWidth" value={image} style={{ marginBottom: "15px" }} onChange={(e) => setImage(e.target.value)} />
            {image === "" ? <p style={{ color: "red", fontWeight: "bolder" }}>Please, enter information</p> : null}
            <input type="submit" value="Add" onClick={handleSubmit} />
        </Box>
    );
}
