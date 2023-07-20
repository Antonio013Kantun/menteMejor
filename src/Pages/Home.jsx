import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Destacados from '../Components/Destacados'
import Categorias from '../Components/Categorias'
import Informacion from '../Components/Informacion'
import 'boxicons'
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      <div className="mt-[500px]">
        <Destacados></Destacados></div>
      <Categorias></Categorias>
      <Informacion></Informacion>
      <Footer></Footer>
    </>
  )
}

export default Home
