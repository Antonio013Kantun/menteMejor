import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import CardProducto from '../Components/cardProducto';
import axios from 'axios';

const Catalogo = () => {
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtroPrecio, setFiltroPrecio] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [categorias, setCategorias] = useState([]); // Array para almacenar las categorías

  const handleCompraProducto = () => {
    setCompraRealizada(true);
  };

  useEffect(() => {
    // Obtener los productos desde la API
    axios
      .get('http://localhost:3001/productos')
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
      });

    // Obtener las categorías desde la API
    axios
      .get('http://localhost:3001/categorias')
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar las categorías:', error);
      });
  }, []);

  useEffect(() => {
    if (compraRealizada) {
      // Después de 3 segundos, restablecer el estado de compraRealizada
      const timer = setTimeout(() => {
        setCompraRealizada(false);
      }, 3000);

      // Limpiar el temporizador al desmontar el componente
      return () => {
        clearTimeout(timer);
      };
    }
  }, [compraRealizada]);

  // Función para obtener el nombre de la categoría por ID
  const obtenerNombreCategoria = (categoriaId) => {
    const categoriaEncontrada = categorias.find(categoria => categoria.id_categoria === categoriaId);
    return categoriaEncontrada ? categoriaEncontrada.nombre : 'Categoría no encontrada';
  };

  // Función para realizar la búsqueda
  const filtrarProductos = (producto) => {
    const nombreCategoria = obtenerNombreCategoria(producto.categoria);
    return (
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtroPrecio === '' || producto.precio <= filtroPrecio) &&
      (filtroCategoria === '' || nombreCategoria === filtroCategoria)
    );
  };

  // Manejar cambios en los campos de búsqueda y filtros
  const handleBuscar = (event) => {
    setBusqueda(event.target.value);
  };

  const handleFiltrarPrecio = (event) => {
    setFiltroPrecio(parseFloat(event.target.value));
  };

  const handleFiltrarCategoria = (event) => {
    setFiltroCategoria(event.target.value);
  };

  return (
    <>
      {compraRealizada && (
        <div className="text-center bg-yellow-500 text-white font-bold py-4">
          ¡Gracias por comprar el producto!
        </div>
      )}
      <div className="container my-4">
        <h1 className="text-center font-semibold text-2xl">
          Catálogo de Productos
        </h1>
        <div className="flex justify-center my-4">
          <input
            type="text"
            placeholder="Buscar por nombre"
            className="border p-2 mr-2"
            value={busqueda}
            onChange={handleBuscar}
          />
          <input
            type="number"
            placeholder="Filtrar por precio"
            className="border p-2 mr-2"
            value={filtroPrecio}
            onChange={handleFiltrarPrecio}
          />
          <select
            className="border p-2"
            value={filtroCategoria}
            onChange={handleFiltrarCategoria}
          >
            <option value="">Todas las categorías</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.nombre}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {productos.filter(filtrarProductos).map((producto, index) => (
            <CardProducto
              key={index}
              nombre={producto.nombre}
              imagen={producto.imagen}
              precio={producto.precio}
              categoria={obtenerNombreCategoria(producto.categoria)} // Aquí obtenemos el nombre de la categoría
              descripcion={producto.descripcion}
              onCompraProducto={handleCompraProducto}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalogo;
