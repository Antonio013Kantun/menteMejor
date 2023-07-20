import React from 'react'
import Form from 'react-bootstrap/Form';
function clienteForm() {
  return (
    <>
       <div className="flex justify-center items-center h-screen">
      <div className="md:w-1/3 lg:w-2/1">
        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left">Insertar cliente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6">
                <Form>
                  <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del cliente" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email del cliente" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contrasena">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña del cliente" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="direccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Dirección del cliente" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="ciudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ciudad del cliente" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="Estado del cliente" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="pais">
                    <Form.Label>País</Form.Label>
                    <Form.Control type="text" placeholder="País del cliente" />
                  </Form.Group>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Enviar
                    </button>
                  </div>
                </Form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default clienteForm
