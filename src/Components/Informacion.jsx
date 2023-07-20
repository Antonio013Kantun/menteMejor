import React from 'react';
import './Informacion.css';


function Informacion() {
  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-12 md:col-md-8 md:offset-md-2 text-center">
            <h1 className="text-3xl mt-24">
              Productos terapéuticos y de salud mental para una mente mejor
            </h1>
            <h2 className="text-4xl font-semibold mt-10">ACERCA DE LA TIENDA MENTE MEJOR</h2>
            <hr className="my-4 border-t-2 w-1/4 border-blue-500 mx-auto" />
            <p className="paragraph mt-10 text-gray-600 ml-20 mr-20 text-justify">
              En Mente Mejor, nos dedicamos a ofrecer una amplia gama de
              productos terapéuticos y de salud mental diseñados para promover
              el bienestar y el crecimiento personal. Nuestra tienda en línea se
              ha convertido en el destino ideal para encontrar recursos que
              apoyen la salud mental y emocional, así como productos
              terapéuticos de calidad. Nos comprometemos a proporcionar
              productos apropiados y efectivos para el desarrollo de habilidades
              y el cuidado mental. En nuestra tienda, encontrarás una selección
              cuidadosamente curada de productos terapéuticos, herramientas de
              autocuidado, recursos educativos y más, todos ellos respaldados
              por nuestra pasión por ayudar a las personas a mejorar su
              bienestar mental.
            </p>

            <button className="btn bg-blue-500 font-semibold text-black mt-4">Aprende más</button>
          </div>
        </div>
      </div>

      <div className="carousel">
      <h1 className="text-center font-semibold text-2xl mt-24">Nuestro blog</h1>
      <hr className="my-4 border-t-2 w-1/4 border-blue-500 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        <div className="col-span-1 md:col-span-1">
  <div className="item text-center">
    <div className="flex justify-center items-center">
      <img className="" src="https://www.thetherapystore.com.au/assets/webshop/cms/76/176.png?1503889466" alt="Imagen 1" />
    </div>
    <h3 className="font-semibold mt-3">Una oda al hermano olvidado...</h3>
    <p className="text-gray-600 ml-16 mr-16 text-justify mt-3">Cuando un niño es diagnosticado con autismo, las personas a menudo olvidan que los hermanos se ven afectados tanto como los padres. De repente, la relación de atención en la casa pasa de 50/50 a 90/10. Incluso los padres más eficientes no pueden caber en el extra ...</p>
    <p className=" mt-3"><a href="" className="text-blue-500">Leer el blog completo</a></p>
    
  </div>
</div>


<div className="col-span-1 md:col-span-1">
  <div className="item text-center">
    <div className="flex justify-center items-center">
      <img className="" src="https://www.thetherapystore.com.au/assets/webshop/cms/73/73.png?1500447093" alt="Imagen 1" />
    </div>
    <h3 className="font-semibold mt-3">Datos adjuntos a objetos.</h3>
    <p className="text-gray-600 ml-16 mr-16 text-justify mt-3">Los niños típicos se adhieren a ciertos objetos como peluches, mantas y maniquíes. No Teddy. Lo primero que Teddy le exigió que se llevara a la cama fueron sus cartas de madera. Eso era factible ...</p>
    <p className=" mt-4"><a href="" className="text-blue-500">Leer el blog completo</a></p>
  </div>
</div>


<div className="col-span-1 md:col-span-1">
  <div className="item text-center">
    <div className="flex justify-center items-center">
      <img className="" src="https://www.thetherapystore.com.au/assets/webshop/cms/38/138.png?1500446795" alt="Imagen 1" />
    </div>
    <h3 className="font-semibold mt-3">¿Qué es la patología del habla?</h3>
    <p className="text-gray-600 ml-16 mr-16 text-justify mt-3">Estas son solo algunas de las preguntas comunes que hacen las familias que incluyen a un niño que puede necesitar ayuda con su habla, lenguaje y comunicación. Nos sentamos con Carla Mangion, codirectora y patóloga del habla en Make the Connection....</p>
    <p className=" mt-3"><a href="" className="text-blue-500">Leer el blog completo</a></p>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Informacion;
