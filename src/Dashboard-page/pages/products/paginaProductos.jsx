import React from 'react'
import Sidebar from '../../components/sidebar'
// import ProductoForm from '../../components/productoForm'
import CatProducto from './index'
function paginaProductos() {
  return (
    <>
    <Sidebar/>
    
     <div class="ml-96"><CatProducto/></div> 
     
    </>
  )
}

export default paginaProductos
