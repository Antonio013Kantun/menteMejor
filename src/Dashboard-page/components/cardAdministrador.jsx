import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CardCatalogs({id, nombre, email, contrasena}){
    return(
        <div className="w-50 bg-gray-300 p-8 rounded-xl">
            
            <p className="text-xl font-semibold mt-6">{nombre}</p>
            <p className=" text-gray-600">{email}</p>
            <p className=" text-gray-600">{contrasena}</p>
            <div className="flex flex-col">
            <Link to={"/administrador/" + id}>Ver Administrador</Link>
            <Link to={"/updateAdministrador/" + id}>Actualizar Administrador</Link>
            </div>
        </div>
    )
}