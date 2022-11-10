import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import Terms from "../components/Login/Terms";
import AllServices from "../components/Shared-components/AllServices/AllServices";
import Blog from "../components/Shared-components/Blog/Blog";
import Checkout from "../components/Shared-components/Checkout/Checkout";
import Order from "../components/Shared-components/Order/Order";
import ServiceDetail from "../components/Shared-components/ServiceDetail/ServiceDetail";
import Main from "../layout/Main";
import NotFound from "./404route/NotFound";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/limitServices')
            },
            {
                path: "/services",
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: "/services/:id",
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/terms",
                element: <Terms></Terms>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/checkout/:id",
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/orders",
                element: <Order></Order>,
            }

        ]
    },
    {
        path: "/*",
        element: <NotFound></NotFound>,
    }
])