import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home";
import AddProduct from "./Components/AddProduct";
import MyCart from "./Components/MyCart";
import Login from "./Components/Login";
import BrandDetails from "./Components/BrandDetails";
import ProductDetails from "./Components/ProductDetails";
import Register from "./Components/Register";
import Update from "./Components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/branddetails/:name",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch(`http://localhost:5000/branddetails/`),
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/branddetails/${params.id}`),
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/branddetails/${params.id}`),
      },

      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
