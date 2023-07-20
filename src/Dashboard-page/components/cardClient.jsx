import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CardCatalogs({id, nombre, email, contrasena, direccion, ciudad,  estado, pais}){
    return(
        <div className="w-50 bg-gray-300 p-8 rounded-xl">
            
            <p className="text-xl font-semibold mt-6">{nombre}</p>
            <p className=" text-gray-600">{email}</p>
            <p className=" text-gray-600">{contrasena}</p>
            <p className=" text-gray-600">{direccion}</p>
            <p className=" text-gray-600">{ciudad}</p>
            <p className=" text-gray-600">{estado}</p>
            <p className=" text-gray-600">{pais}</p>
            <div className="flex flex-col">
            <Link to={"/client/" + id}>Ver Cliente</Link>
            <Link to={"/updateClient/" + id}>Actualizar Cliente</Link>
            </div>
        </div>
    )
}