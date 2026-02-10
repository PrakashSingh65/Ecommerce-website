import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Cart from "../Pages/Cart";
import ProductDetail from "../Pages/ProductDetail";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Shop from "../Pages/Shop";
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
            },
            {
                path: "/product/:id",
                element:<ProductDetail/>,
            },
            {
                path: "/contact",
                element:<Contact/>,
            },
            {
                path: "/about",
                element:<About/>,
            },
            {
                path: "/shop",
                element:<Shop/>,
            }
        ]
    }
])

export default router