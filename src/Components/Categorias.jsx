import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Categorias = ({ nombre, imagen }) => {
  return (
    <Link to={"/catalogo"} className="text-decoration-none">
      <div className="bg-[#fdfeff] rounded-xl flex flex-col items-center justify-center gap-2 p-4 m-4 shadow-md">
        <img
          src={imagen}
          className="w-32 h-auto rounded-xl"
          style={{ maxWidth: '100%', maxHeight: '180px' }}
          alt={nombre}
        />
        <h1 className="text-center text-xl font-semibold">{nombre}</h1>
      </div>
    </Link>
  );
};

const CategoriasPage = () => {
  const cate = [
    {
      nombre: 'Masticación',
      imagen:
        'https://www.thetherapystore.com.au/assets/webshop/cms/05/305.jpg?1600230401',
    },
    {
      nombre: 'Visual',
      imagen:
        'https://www.thetherapystore.com.au/assets/webshop/cms/10/310.jpg?1612393087',
    },
    {
      nombre: 'Juguetes para bebés',
      imagen:
        'https://www.thetherapystore.com.au/assets/webshop/cms/73/373.jpg?1655640033',
    },
    {
      nombre: 'Adaptador inclusivo',
      imagen:
        'https://www.thetherapystore.com.au/assets/webshop/cms/09/309.jpg?1612393325',
    },
    {
      nombre: 'Fuerza de la mano',
      imagen: 'https://images.schoolspecialty.com/images/2119958_A_ecommfullsize.jpg',
    },
    {
      nombre: 'Balance',
      imagen:
        'https://www.thetherapystore.com.au/assets/webshop/cms/95/195.jpg?1612393297',
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl mt-24">NUESTRAS CATEGORIAS</h1>
      <hr className="my-4 border-t-2 w-1/4 border-blue-500 mx-auto" />
      <Slider {...settings}>
        {cate.map((producto, index) => (
          <Categorias key={index} {...producto} />
        ))}
      </Slider>
    </div>
  );
};

export default CategoriasPage;
