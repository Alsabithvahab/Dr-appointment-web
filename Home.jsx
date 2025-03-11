import React from 'react'
import Header from './frontend/src/Components/Header'
import SpecialityMenu from './frontend/src/Components/SpecialityMenu'
import Topdoctors from './frontend/src/Components/Topdoctors'
import Banner from './frontend/src/Components/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <Topdoctors/>
      <Banner/>
    </div>
  )
}

export default Home