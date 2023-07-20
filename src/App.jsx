import { Link } from "react-router-dom";
import Slider from "./Components/Slider";
import Destacados from "./Components/Destacados";
import Categorias from "./Components/Categorias";
import Informacion from "./Components/Informacion";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
    <div className="">
    <Slider></Slider>
      <div className="mt-[500px]">
        <Destacados></Destacados>
      </div>

      <Categorias></Categorias>
      <Informacion></Informacion>
      <Footer></Footer>
    </div>
      
    </>
  );
}
