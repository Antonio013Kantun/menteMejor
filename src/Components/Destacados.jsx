import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const CardCelulares = ({ nombre, imagen, precio, categoria, descripcion, onCompraProducto }) => {
  return (
    <div className="bg-[#ffffff] rounded-xl border-3 flex flex-col items-center gap-2 p-2 m-4 overflow-hidden" style={{ minHeight: '400px' }}>
      <img
        src={imagen}
        className="w-40 h-40 bg-cover rounded-xl"
        style={{ backgroundSize: 'contain' }}
        alt={nombre}
      />
      <h1 className="text-center text-lg mt-2 font-semibold">{nombre}</h1>
      <h2 className="text-center text-gray-500 text-sm">{categoria}</h2>
      <p className="text-center text-gray-600 text-sm line-clamp-3">{descripcion}</p>
      <h2>${precio}</h2>
      <button
        className="bg-black text-white px-4 py-2.5 rounded text-center justify-center mt-2"
        onClick={onCompraProducto}
      >
        Comprar producto
      </button>
    </div>
  );
};


const App = () => {
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [productos, setProductos] = useState([]);

  const handleCompraProducto = () => {
    setCompraRealizada(true);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/productos')
      .then((response) => {
        // Ordenar los productos por precio de menor a mayor
        const sortedProductos = response.data.sort((a, b) => a.precio - b.precio);
        // Seleccionar los 5 productos con el precio más bajo
        const productosToShow = sortedProductos.slice(0, 5);
        // Obtener los nombres de categorías y descripciones para cada producto
        const promises = productosToShow.map((producto) =>
          axios.get(`http://localhost:3001/categorias/${producto.categoria}`)
        );
        Promise.all(promises)
          .then((responses) => {
            const productosConCategoria = productosToShow.map((producto, index) => ({
              ...producto,
              categoria: responses[index].data.nombre,
              descripcion: producto.descripcion, // Agregar la descripción
            }));
            setProductos(productosConCategoria);
          })
          .catch((error) => {
            console.error('Error al obtener las categorías:', error);
          });
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
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

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, // Breakpoint para dispositivos móviles
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      {compraRealizada && (
        <div className="text-center bg-yellow-500 text-white font-bold py-4">
          ¡Gracias por comprar el producto!
        </div>
      )}
      <h1 className="text-center font-semibold text-2xl">PRODUCTOS DESTACADOS</h1>
      <hr className="my-4 border-t-2 w-1/4 border-blue-500 mx-auto" />
      <Slider {...settings}>
        {productos.map((producto, index) => (
          <CardCelulares
            key={index}
            {...producto}
            onCompraProducto={handleCompraProducto}
          />
        ))}
      </Slider>
    </div>
  );
};

export default App;
