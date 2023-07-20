import React from 'react'
import Sidebar from '../../components/sidebar'
// import ProductoForm from '../../components/productoForm'
import CatProducto from './index'
function paginaProductos() {
  return (
    <>
    <Sidebar/>
     <p>Mi pagina de productos</p> 
     <CatProducto/>
    </>
  )
}

export default paginaProductos
