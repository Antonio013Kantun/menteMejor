import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import CardProducto from '../Components/cardProducto';

const Catalogo = () => {
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [productos, setProductos] = useState([
    {
      nombre: 'Boy kisser',
      imagen:
        'https://i.imgflip.com/7e3cc1.png',
      precio: 4.99,
      categoria: 'Masticación',
    },
    {
        nombre: 'Tubos',
        imagen:
          'https://www.thetherapystore.com.au/assets/thumb/92419.jpg?20220203103956',
        precio: 14.99,
        categoria: 'Visual',
      },
      {
        nombre: 'Fidget Sphere',
        imagen:
          'https://www.thetherapystore.com.au/assets/full/SPGEODE-QRTZ.jpg?20211122140147',
        precio: 20.99,
        categoria: 'Visual',
      },
      {
        nombre: 'Tortuguita',
        imagen: 'https://images.schoolspecialty.com/images/2119981_A_ecommfullsize.jpg',
        precio: 10.99,
        categoria: 'Juguetes para bebes',
      },
      {
        nombre: 'Teeter Popper',
        imagen:
          'https://www.thetherapystore.com.au/assets/alt_4/FA-095.jpg?20210121133202',
        precio: 25.99,
        categoria: 'Balance',
      },
      {
        nombre: 'Verda q si',
        imagen: 'https://i.imgflip.com/20kq3p.jpg?a468816',
        precio: 7.99,
        categoria: 'Adaptado Inclusivo',
      },
      {
        nombre: 'Almohadas Bean',
        imagen:
          'https://www.thetherapystore.com.au/assets/full/BBS.jpg?20200714030429',
        precio: 15.99,
        categoria: 'Balance',
      },
      {
        nombre: 'Die furry',
        imagen: 'https://dthezntil550i.cloudfront.net/8w/latest/8w2101050725047800018459409/1280_960/24c3310a-463b-4e8f-885e-5b45e7403c80.png',
        precio: 24.99,
        categoria: 'Fuerza de la mano',
      },
      {
        nombre: 'Peluche Perrito',
        imagen: 'https://www.thetherapystore.com.au/assets/alt_6/P155765.jpg?20200714030115',
        precio: 8.99,
        categoria: 'Juguetes para bebes',
      },
      {
        nombre: 'Moorphe zen',
        imagen:
          'https://www.thetherapystore.com.au/assets/thumb/MORP-AUDIMZ-0012.jpg?20230417112521',
        precio: 10.99,
        categoria: 'Balance',
      },
      {
        nombre: 'Bola nudosa',
        imagen:
          'https://images.schoolspecialty.com/images/2120260_A_ecommfullsize.jpg',
        precio: 7.99,
        categoria: 'Balance',
      },
      {
        nombre: 'Chewable pencil topper',
        imagen: 'https://www.thetherapystore.com.au/assets/alt_1/BSTOP100.jpg?20200928104111',
        precio: 30.99,
        categoria: 'Masticación',
      },
      {
        nombre: 'Brazalete masticable',
        imagen:
          'https://images.schoolspecialty.com/images/017640_A_ecommfullsize.jpg',
        precio: 10.99,
        categoria: 'Masticación',
      },
      {
        nombre: 'Pin Art',
        imagen:
          'https://www.thetherapystore.com.au/assets/alt_2/P149298.jpg?20200714030149',
        precio: 30.99,
        categoria: 'Visual',
      },
      {
        nombre: 'Bilibo',
        imagen:
          'https://www.thetherapystore.com.au/assets/alt_5/P148597.jpg?20200714030152',
        precio: 18.99,
        categoria: 'Balance',
      },
      {
        nombre: 'Squish cube',
        imagen: 'https://www.thetherapystore.com.au/assets/full/SCH-NCBND.jpg?20230124112318',
        precio: 5.99,
        categoria: 'Juguetes para bebes',
      },
      {
        nombre: 'Chew ring necklace',
        imagen: 'https://www.thetherapystore.com.au/assets/alt_1/RING100.jpg?20200928140754',
        precio: 20.99,
        categoria: 'Masticación',
      },
      {
        nombre: 'Squeezy fox',
        imagen: 'https://www.thetherapystore.com.au/assets/alt_1/P150207.jpg?20200714030135',
        precio: 16.99,
        categoria: 'Juguetes para bebes',
      },
      {
        nombre: 'Nuwu',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQx07KA6JPtn7rLOyJryYdhxcZ6BUxanTi2fhPOubZoMQZQhxR09CfuzssO5TjnuDiYo&usqp=CAU',
        precio: 5.99,
        categoria: 'Fuerza de la mano',
      },
      {
        nombre: 'Aprender a escribir',
        imagen: 'https://www.thetherapystore.com.au/assets/full/LTW6.jpg?20200714030727',
        precio: 8.99,
        categoria: 'Adaptado Inclusivo',
      },
      {
        nombre: 'Noodlies',
        imagen: 'https://www.thetherapystore.com.au/assets/full/SCH-NL.jpg?20220202115018g',
        precio: 8.99,
        categoria: 'Adaptado Inclusivo',
      },
      {
        nombre: 'Sensory Gecko',
        imagen:
          'https://www.thetherapystore.com.au/assets/full/YP-SG.jpg?20230301121315',
        precio: 24.99,
        categoria: 'Fuerza de la mano',
      },
      {
        nombre: 'Kanoodle',
        imagen:
          'https://www.thetherapystore.com.au/assets/thumb/2978.jpg?20220202123132',
        precio: 24.99,
        categoria: 'Visual',
      }

    // Resto de los productos
  ]);
  const [busqueda, setBusqueda] = useState('');
  const [filtroPrecio, setFiltroPrecio] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');

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

  // Función para realizar la búsqueda
  const filtrarProductos = (producto) => {
    if (
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtroPrecio === '' || producto.precio <= filtroPrecio) &&
      (filtroCategoria === '' || producto.categoria === filtroCategoria)
    ) {
      return true;
    }
    return false;
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
            <option value="Masticación">Masticación</option>
            <option value="Visual">Visual</option>
            <option value="Juguetes para bebes">Juguetes para bebes</option>
            <option value="Adaptado Inclusivo">Adaptado Inclusivo</option>
            <option value="Fuerza de la mano">Fuerza de la mano</option>
            <option value="Balance">Balance</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {productos.filter(filtrarProductos).map((producto, index) => (
            <CardProducto
              key={index}
              {...producto}
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
