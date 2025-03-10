import { Routes,Route } from "react-router-dom"
import Home from "../../Home"
import Doctor from "./Pages/Doctor"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import MyProfile from "./Pages/MyProfile"
import MyAppointments from "./Pages/MyAppointments"
import Appointment from "./Pages/Appointment"
import Navbar from "./Components/Navbar"
import Login from "../src/Pages/Login"
import React from "react"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/doctor" element={<Doctor/>}/>
<Route path="/doctor/:speciality" element={<Doctor/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/my-profile" element={<MyProfile/>}/>
<Route path="/my-appointment" element={<MyAppointments/>}/>
<Route path="/appointment/:docId" element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
