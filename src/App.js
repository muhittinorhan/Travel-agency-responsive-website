import React from 'react'
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Products from "./components/pages/Products"
import Services from "./components/pages/Services"
import SignUp from "./components/pages/SignUp"
import Footer from "./components/Footer"
import "./App.css"
function App() {
  return (
    <>

      <Router>
        
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/services" exact element={<Services></Services>}></Route>
          <Route path="/products" exact element={<Products></Products>}></Route>
          <Route path="/sign-up" exact element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
     
    </>
  
  )
}

export default App