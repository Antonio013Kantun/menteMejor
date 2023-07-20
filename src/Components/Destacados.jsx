import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardCelulares = ({ nombre, imagen, precio, onCompraProducto }) => {
  return (
    <div className="bg-[#ffffff] rounded-xl border-3 flex flex-col items-center gap-2 p-2 m-4 overflow-hidden">
      <img
        src={imagen}
        className="w-full h-55 bg-cover rounded-xl"
        style={{ backgroundSize: 'contain' }}
        alt={nombre}
      />
      <h1 className="text-center text-lg mt-2 font-semibold">{nombre}</h1>
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

  const handleCompraProducto = () => {
    setCompraRealizada(true);
  };

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

  const productos = [
    {
      nombre: 'Tubos',
      imagen:
        'https://www.thetherapystore.com.au/assets/thumb/92419.jpg?20220203103956',
      precio: 19.99,
    },
    {
      nombre: 'Kanoodle',
      imagen:
        'https://www.thetherapystore.com.au/assets/thumb/2978.jpg?20220202123132',
      precio: 29.99,
    },
    {
      nombre: 'Moorphe zen',
      imagen:
        'https://www.thetherapystore.com.au/assets/thumb/MORP-AUDIMZ-0012.jpg?20230417112521',
      precio: 24.99,
    },
    {
      nombre: 'Bola nudosa',
      imagen:
        'https://images.schoolspecialty.com/images/2120260_A_ecommfullsize.jpg',
      precio: 24.99,
    },
    {
      nombre: 'Brazalete masticable',
      imagen:
        'https://images.schoolspecialty.com/images/017640_A_ecommfullsize.jpg',
      precio: 24.99,
    },
  ];

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
