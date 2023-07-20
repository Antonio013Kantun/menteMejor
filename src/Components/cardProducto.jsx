import React, { useState, useEffect } from 'react';

const CardProducto = ({ nombre, imagen, precio, categoria, onCompraProducto, cardSize }) => {
  const [compraRealizada, setCompraRealizada] = useState(false);

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

  const handleCompraProducto = () => {
    setCompraRealizada(true);
    onCompraProducto();
  };

  return (
    <div className={`bg-[#ffffff] rounded-xl border-3 flex flex-col items-center gap-2 p-2 m-4 overflow-hidden ${cardSize === 'small' ? 'w-64' : ''}`}>
      <img
        src={imagen}
        className="w-full h-40 bg-cover rounded-xl"
        style={{ backgroundSize: 'contain' }}
        alt={nombre}
      />
      <h1 className="text-center text-lg mt-2 font-semibold">{nombre}</h1>
      <h2 className="text-center">${precio}</h2>
      <h3 className="text-center text-sm text-gray-600">{categoria}</h3>
      <button
        className="bg-black text-white px-4 py-2.5 rounded text-center justify-center mt-2"
        onClick={handleCompraProducto}
      >
        Comprar producto
      </button>
      {compraRealizada && (
        <div className="mt-2 text-green-500 font-semibold">
          ¡Gracias por comprar el producto!
        </div>
      )}
    </div>
  );
};

export default CardProducto;
