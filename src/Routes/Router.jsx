import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layout/Root";

import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Service from "../Pages/Service";
import ForgotPass from "../Pages/ForgotPass";
import ServiceDetails from "../Pages/ServiceDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: 'service',
                element: <Service></Service>

            },
            {
                path: 'profile',
                element: <PrivateRoutes>
                    <MyProfile></MyProfile>
                </PrivateRoutes>
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },

            {
                path: 'forgotpass/:email',
                Component: ForgotPass
            },
            {
                path: 'details/:id',
                element: <PrivateRoutes>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoutes>


            }

        ]
    }
])

export default router;