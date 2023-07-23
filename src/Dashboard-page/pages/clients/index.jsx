import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function HomeClients() {
  const [clientes, setClientes] = useState([]);
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

  const id = window.location.href.split("/")[4];

  const eliminarCliente = (id) => {
    axios
      .delete("http://localhost:3001/clientes/" + id)
      .then(function () {
        console.log("Cliente eliminado correctamente");
        // Actualizar la lista de clientes después de eliminar uno
        setClientes((prevClientes) =>
          prevClientes.filter((cliente) => cliente.id_cliente !== id)
        );
        setShowConfirmationModal(false);
        setShowSuccessModal(true); // Mostrar el mensaje de éxito
      })
      .catch(function () {
        console.error("No se ha eliminado el cliente");
        setShowConfirmationModal(false);
      });
  };

  useEffect(function () {
    axios
      .get("http://localhost:3001/clientes")
      .then(function (response) {
        setClientes(response.data);
      })
      .catch(() => {
        console.error("¡Ups! Hubo un error al cargar los clientes.");
      });
  }, []);

  const filteredClientes = clientes.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredClientes.length / recordsToShow);
  const indexOfLastRecord = currentPage * recordsToShow;
  const indexOfFirstRecord = indexOfLastRecord - recordsToShow;
  const currentRecords = filteredClientes.slice(indexOfFirstRecord, indexOfLastRecord);

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
                    Dirección
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Ciudad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Estado
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    País
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
                {currentRecords.map((cliente) => (
                  <tr key={cliente.id_cliente}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {cliente.id_cliente}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {cliente.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {cliente.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {cliente.direccion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {cliente.ciudad}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {cliente.estado}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {cliente.pais}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button
                        className="px-3 py-1.5 bg-blue-500 text-white rounded-lg"
                        onClick={() => handleEdit(cliente.id_cliente)}
                      >
                        <Link className="no-underline text-white" to={"/updateClient/" + cliente.id_cliente}>
                          Editar
                        </Link>
                      </button>
                      <button
                        className="ml-2 px-3 py-1.5 bg-red-500 text-white rounded-lg"
                        onClick={() => handleDelete(cliente.id_cliente)}
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

      {/* Modales de confirmación y éxito */}
      <div className={`fixed bg-gray-800 bg-opacity-50 ${showConfirmationModal ? "flex" : "hidden"} items-center justify-center top-0 left-0 w-full h-full`}>
        <div className="bg-white p-4 rounded-md shadow-lg">
          <p>¿Estás seguro de eliminar este cliente?</p>
          <div className="flex justify-end mt-4">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
              onClick={() => {
                eliminarCliente(idToDelete);
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
          <p>¡Cliente eliminado satisfactoriamente!</p>
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

      <div className="grid grid-cols-4 gap-8 px-10">
        {/* Resto del código ... */}
      </div>

      <div className="fixed bg-green-600 bottom-10 right-10 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:h-20 hover:w-20 transition-all">
        <Link className="no-underline" to="/addClient" >
          <span className="text-white text-2xl">+</span>
        </Link>
      </div>
    </div>
  );
}

