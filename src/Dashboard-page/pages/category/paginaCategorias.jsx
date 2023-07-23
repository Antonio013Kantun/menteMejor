import React from 'react'
import Sidebar from '../../components/sidebar'
import Catcategory from './index'
// import CategoriaForm from '../../components/categoriaForm'
function paginaCategorias() {
  return (
    <>
      <Sidebar/>
      <div class="ml-96">
      <Catcategory/>
      </div>

    </>
  )
}

export default paginaCategorias
