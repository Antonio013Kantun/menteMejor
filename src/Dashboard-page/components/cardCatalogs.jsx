import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CardCatalogs({id, imagen, nombre, precio, descripcion}){
    return(
        <div className="w-50 bg-gray-300 p-8 rounded-xl">
            <img src={imagen}/>
            <p className="text-xl font-semibold mt-6">{nombre}</p>
            <p className=" text-gray-600">{descripcion}</p>
            <span>${precio}</span>
            <div className="flex flex-col">
            <Link to={"/product/" + id}>Ver producto</Link>
            <Link to={"/updateProduct/" + id}>Actualizar producto</Link>
            </div>
        </div>
    )
}