import React, { useEffect, useState } from "react";
import CardCatalogs from "../../components/cardAdministrador";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Index.css";

export default function HomeCatalogs() {
  const [administradores, setAdministradores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsToShow, setRecordsToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const handleDelete = (id) => {
    setIdToDelete(id);
    setShowConfirmationModal(true);
  };
  

  const id = window.location.href.split("/")[4]


  const eliminarAdministrador = (id) => {
    axios
      .delete("http://localhost:3001/administradores/" + id)
      .then(function () {
        console.log("Borrado correctamente");
        // Actualizar la lista de administradores después de eliminar uno
        setAdministradores((prevAdministradores) =>
          prevAdministradores.filter((admin) => admin.id_administrador !== id)
        );
        setShowConfirmationModal(false);
        setShowSuccessModal(true); // Mostrar el mensaje de éxito
      })
      .catch(function () {
        console.error("No se ha eliminado");
        setShowConfirmationModal(false);
      });
  };
  



  useEffect(function () {
    axios
      .get("http://localhost:3001/administradores")
      .then(function (datos) {
        setAdministradores(datos.data);
      })
      .catch(() => {
        console.error("¡Ups! Hubo un error.");
      });
  }, []);

  const filteredAdministradores = administradores.filter((administrador) =>
    administrador.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAdministradores.length / recordsToShow);
  const indexOfLastRecord = currentPage * recordsToShow;
  const indexOfFirstRecord = indexOfLastRecord - recordsToShow;
  const currentRecords = filteredAdministradores.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="block w-50 p-1 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="p-4">
        <label className="mr-2">Mostrar:</label>
        <select
          className="p-1 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={recordsToShow}
          onChange={(e) => setRecordsToShow(parseInt(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow-md overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 font-inter">
            <thead className="bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Nombre
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Contraseña
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {filteredAdministradores.map((administrador) => (
                <tr key={administrador.id_administrador}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {administrador.id_administrador}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {administrador.nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {administrador.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {administrador.contrasena.replace(/./g, '*')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button
                      className="px-3 py-1.5 bg-blue-500 text-white rounded-lg"
                      onClick={() => handleEdit(administrador.id_administrador)}
                    >
            <Link className="no-underline text-white" to={"/updateAdministrador/" + administrador.id_administrador}>
                      Editar
                      </Link>
                    </button>
                    <button
                      className="ml-2 px-3 py-1.5 bg-red-500 text-white rounded-lg"
                      onClick={() => handleDelete(administrador.id_administrador)}
                    >
                      Eliminar
                      
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Menú de navegación */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            } rounded-md`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>



      <div>
  {/* Resto del código... */}
  <div className={`fixed bg-gray-800 bg-opacity-50 ${showConfirmationModal ? "flex" : "hidden"} items-center justify-center top-0 left-0 w-full h-full`}>
    <div className="bg-white p-4 rounded-md shadow-lg">
      <p>¿Estás seguro de eliminar este registro?</p>
      <div className="flex justify-end mt-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
          onClick={() => {
            eliminarAdministrador(idToDelete);
            setShowConfirmationModal(false);
            setShowSuccessModal(true);
          }}
        >
          Confirmar
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded-md"
          onClick={() => setShowConfirmationModal(false)}
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>

  <div className={`fixed bg-gray-800 bg-opacity-50 ${showSuccessModal ? "flex" : "hidden"} items-center justify-center top-0 left-0 w-full h-full`}>
    <div className="bg-white p-4 rounded-md shadow-lg">
      <p>¡Registro eliminado satisfactoriamente!</p>
      <div className="flex justify-end mt-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md"
          onClick={() => setShowSuccessModal(false)}
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</div>

      

      <div className="grid grid-cols-4 gap-8 px-10">
        {/* Resto del código ... */}
      </div>

      <div className="fixed bg-green-600 bottom-10 right-10 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:h-20 hover:w-20 transition-all">
        <Link className="no-underline" to="/addAdministrador" >
          <span className="text-white text-2xl">+</span>
        </Link>
      </div>
    </div>
  );
}
