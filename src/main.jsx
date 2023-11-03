import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home";
import AddProduct from "./Components/AddProduct";
import MyCart from "./Components/MyCart";
import Login from "./Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addproduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"/mycart",
        element:<MyCart></MyCart>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
