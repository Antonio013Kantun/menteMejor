import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../Components/Navbar";
import Blog from "../Pages/Blog";
import Nosotros from "../Pages/acercade";
import Login from "../Pages/auth/login";
import Comentarios from "../Pages/comentarios";
import Catalogo from "../Pages/catalogo";
import Register from "../Pages/auth/register";
import Dashboard from "../Dashboard-page/pages/dashboard";
import Productos from "../Dashboard-page/pages/products/paginaProductos"
import Categorias from "../Dashboard-page/pages/category/paginaCategorias"
import Clientes from "../Dashboard-page/pages/clients/paginaClientes"
import AddProducts from "../Dashboard-page/pages/products/addProducts"
import Product from "../Dashboard-page/pages/products/product"
import UpdateProducts from "../Dashboard-page/pages/products/updateProducts";
import AddCategory from "../Dashboard-page/pages/category/addCategory"
import Category from "../Dashboard-page/pages/category/category"
import UpdateCategory from "../Dashboard-page/pages/category/updateCategory"
import AddClient from "../Dashboard-page/pages/clients/addClient"
import Client from "../Dashboard-page/pages/clients/client"
import UpdateClient from "../Dashboard-page/pages/clients/updateClient"
import Administrador from "../Dashboard-page/pages/administradores/paginaAdministrador"
import AddAdministrador from "../Dashboard-page/pages/administradores/addAdministrador"
import Admin from "../Dashboard-page/pages/administradores/administrador"
import UpdateAdministrador from "../Dashboard-page/pages/administradores/updateAdministrador"
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/Nosotros",
        element: <Nosotros/>,
      },
      {
        path: "/Blog",
        element: <Blog/>,
      },
      {
        path: "/comentarios",
        element: <Comentarios/>,
      },
      
      {
        path: "/register",
        element: <Register />,
      },
      
      {
        path: "/catalogo",
        element: <Catalogo />,
      }

    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/productos",
    element: <Productos/>,
  },
  {
    path: "/categorias",
    element: <Categorias/>,
  },
  {
    path: "/clientes",
    element: <Clientes/>,
  },
  {
    path: "/addProducts",
    element: <AddProducts/>
  },
  {
    path: "product/:id",
    element: <Product/>
  },
  {
    path: "updateProduct/:id",
    element: <UpdateProducts/>
  },
  {
    path: "/addCategory",
    element: <AddCategory/>
  },
  {
    path: "category/:id",
    element: <Category/>
  },
  {
    path: "updateCategory/:id",
    element: <UpdateCategory/>
  },
  {
    path: "/addClient",
    element: <AddClient/>
  },
  {
    path: "client/:id",
    element: <Client/>
  },
  {
    path: "updateClient/:id",
    element: <UpdateClient/>
  },
  {
    path: "/administrador",
    element: <Administrador/>
  },
  {
    path: "/addAdministrador",
    element: <AddAdministrador/>
  },
  {
    path: "administrador/:id",
    element: <Admin/>
  },
  {
    path: "updateAdministrador/:id",
    element: <UpdateAdministrador/>
  },
  {
    path: "/login",
    element: <Login />,
  },
]);