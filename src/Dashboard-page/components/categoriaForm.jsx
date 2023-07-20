import React from 'react'
import Form from 'react-bootstrap/Form';

function categoriaForm() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <div className="md:w-1/3 lg:w-2/1">
        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left">Insertar categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre categoria</Form.Label>
                    <Form.Control type="text" placeholder="Categoria" />
                  </Form.Group>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Añadir categoria
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

export default categoriaForm
