import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./index.css";
import Home from "./Layouts/Home";
import Root from "./routes/Root";
import Users from "./Components/Users";
import Update from "./Components/Update";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/users",
        element: <Users />,
        loader : ()=>fetch('http://localhost:5000/users')
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update/:id",
        element:<Update></Update>,
        loader : ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
