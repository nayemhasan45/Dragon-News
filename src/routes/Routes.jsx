import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import About from "../pages/About";
import Career from "../pages/Career";


const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                path: '/',
                Component: HomePage,
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            }
        ]
    },
    {
        path:'/newsDetails/:id',
        loader:()=> fetch('/news.json'),
        Component:NewsDetails,
    },
    {
        path:'/about',
        Component:About,
    }
    ,{
        path:'/career',
        Component:Career,
    }
])
export default router;