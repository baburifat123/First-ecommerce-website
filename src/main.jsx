import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import kids from "./assets/banner_kids.png";
import banner from "./assets/banner_mens.png";
import women from "./assets/banner_women.png";
import Body from "./Compo/Body/Body";
import { ShopContext } from "./Compo/Context/Context";
import Product from "./Compo/Product/Product/Product";
import "./index.css";
import SingUp from "./Compo/LoginAndSingUp/SingUp";
import Products from "./Compo/Product/Product/Products";
import Cart from "./Compo/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/men",
        element: <Product banner={banner} category="men"></Product>,
      },
      {
        path: "/women",
        element: <Product banner={women} category="women"></Product>,
      },
      {
        path: "/kids",
        element: <Product banner={kids} category="kid"></Product>,
      },
      {
        path: "/login",
        element: <SingUp></SingUp>,
      },
      {
        path: "/product/:id",
        element: <Products></Products>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContext>
      <RouterProvider router={router} />
    </ShopContext>
  </React.StrictMode>
);
