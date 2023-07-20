import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CardCatategory({id, nombre}){
    return(
        <div className="w-50 bg-gray-300 p-8 rounded-xl">
           
            <p className="text-xl font-semibold mt-6">{nombre}</p>
            <div className="flex flex-col">
            <Link to={"/category/" + id}>Ver categoria</Link>
            <Link to={"/updateCategory/" + id}>Actualizar categoria</Link>
            </div>
        </div>
    )
}