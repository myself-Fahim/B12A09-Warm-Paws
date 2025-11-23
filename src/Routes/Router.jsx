import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Service from "../Pages/Service";
import MyProfile from "../Pages/MyProfile";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
                path:'service',
                Component:Service
            },
            {
                path:'profile',
                Component:MyProfile
            },
        ]
    }
])

export default router;