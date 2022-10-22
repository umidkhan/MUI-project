import React from 'react'
import Home from './Components/Home/Home'
import Users from "./Components/Users/Users"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Components/Create/Create"
import List from "./Components/List/List"
import Drawer_1 from "./Components/myDrawer/myDrawer"
import EditPage from './Components/EditPage/EditPage';



export default function App() {
  return (
    <>

      <Router>

        <Drawer_1 />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/create' element={<Create />} />
          <Route path='/list' element={<List />} />
          <Route path='/edit' element={<EditPage />} />
        </Routes>
      </Router>

    </>
  )
}
