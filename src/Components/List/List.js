import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function List() {

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
    <>
      {data.map((elem) => {
        return (
          <>
            <p style={{marginTop: "100px"}}>{elem.name}</p>
            <b>{elem.discription}</b>
            <br /><br />
            <b>{elem.price}$</b>
          </>
        )
      })}
    </>
  )
}
