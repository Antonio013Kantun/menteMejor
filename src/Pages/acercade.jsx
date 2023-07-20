import Footer from "../Components/Footer"
import "./acercade.css"
export default function Acercade() {
  return (
    <div>

      <div className="bg-cover bg-img bg-blue-500 p-10 flex flex-col items-center justify-center gap-16 rounded-2xl h-[30rem] max-w-6xl m-auto">
        
        <h1 className="text-black font-semibold text-center">Sobre <br />Nosotros </h1>
      </div>

      <div className="text-black flex flex-col items-center gap-7 justify-center m-auto">
        <p className="font-semibold text-3xl"> <br />Aprende sobre nuestra historia y la razón de nuestro ecommerce.</p>
      </div>

      {/* Componente 1 */}
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 rounded-5xl">
              <img src="https://www.terapify.com/blog/wp-content/uploads/2023/05/terapeuta-familia-sonriente-cerca-1.jpg" alt="image" loading="lazy" width height />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuestra historia</h2>
              <p className="mt-6 text-gray-600">Nuestra historia se remonta a varios años atrás, cuando un grupo de apasionados profesionales de la salud y el bienestar se unieron con un objetivo común: proporcionar a las personas una forma conveniente y confiable de acceder a productos terapéuticos y especializados, sin barreras geográficas o limitaciones de tiempo.</p>
              <p className="mt-4 text-gray-600">Desde entonces, hemos dedicado incansables esfuerzos para seleccionar cuidadosamente los mejores productos disponibles en el mercado. Colaboramos estrechamente con expertos en diferentes disciplinas terapéuticas, médicos y proveedores de renombre para garantizar la calidad, eficacia y seguridad de nuestros productos. Nuestro compromiso con la excelencia nos impulsa a mantenernos actualizados con las últimas investigaciones y avances en el campo de la terapia, para así poder ofrecerte las mejores soluciones adaptadas a tus necesidades individuales.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 rounded-5xl">
              <img src="https://diariopresenterm.blob.core.windows.net/images/2022/10/27/un-par-de-ninos-sonriendo-28750e96.png" alt="image" loading="lazy" width height />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Misión</h2>
              <p className="mt-6 text-gray-600">Nuestra misión es proporcionar productos terapéuticos de alta calidad que contribuyan al bienestar y la salud mental de nuestros clientes.</p>
              <p className="mt-4 text-gray-600">Nos comprometemos a ofrecer una amplia gama de productos cuidadosamente seleccionados, respaldados por información confiable y un excelente servicio al cliente.</p>
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-row-reverse">
            <div className="md:5/12 lg:w-5/12 rounded-5xl">
              <img src="https://www.soycest.mx/hubfs/original-64bc3108ff45197ce77f3dd5a2b7aad0.jpg" alt="image" loading="lazy" width height />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Visión</h2>
              <p className="mt-6 text-gray-600">Nuestra visión es convertirnos en líderes reconocidos en la industria de productos terapéuticos para la salud mental.</p>
              <p className="mt-4 text-gray-600">Nos esforzamos por ser una empresa innovadora que constantemente busca nuevos productos y soluciones que ayuden a nuestros clientes a alcanzar un estado de bienestar mental óptimo. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Componente 2 */}
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex-row-reverse">
            <div className="md:5/12 lg:w-5/12 rounded-5xl">
              <img src="https://www.psicoactiva.com/wp-content/uploads/2023/03/terapia-familiar-sistemica.jpg" alt="image" loading="lazy" width height />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Ofrecemos</h2>
              <p className="mt-6 text-gray-600">En nuestro catálogo encontrarás una amplia variedad de productos terapéuticos, desde dispositivos y herramientas especializadas hasta productos naturales y orgánicos. Creemos en el poder de la naturaleza y en la sinergia entre la ciencia y lo holístico. Por ello, te brindamos opciones que abarcan desde terapias alternativas hasta tratamientos convencionales respaldados por evidencia científica.</p>
              <p className="mt-4 text-gray-600">En nuestro equipo, valoramos profundamente la empatía y el cuidado hacia nuestros clientes. Sabemos que cada persona es única, y nos esforzamos por brindar un servicio personalizado y una atención al cliente excepcional. Nuestro equipo de expertos está siempre dispuesto a asesorarte y responder a tus preguntas, guiándote en la selección de los productos más adecuados para ti.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}
