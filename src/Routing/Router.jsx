import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Cart from "../Pages/Cart";
import React from "react";
const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path: "/login",
                element:<Login/>,
            },
            {
                path: "/signup",
                element:<Signup/>,
            },
            {
                path: "/cart",
                element:<Cart/>,
            }
        ]
    }
])

export default router