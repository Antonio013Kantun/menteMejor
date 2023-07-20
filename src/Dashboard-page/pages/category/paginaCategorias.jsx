import React from 'react'
import Sidebar from '../../components/sidebar'
import Catcategory from './index'
// import CategoriaForm from '../../components/categoriaForm'
function paginaCategorias() {
  return (
    <>
      <Sidebar/>
      <p>Mi pagina de categorias</p> 
      <Catcategory/>
    </>
  )
}

export default paginaCategorias
