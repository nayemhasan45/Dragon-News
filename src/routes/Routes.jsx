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
import PrivateRoute from "../layouts/PrivateRoute";
import { Suspense } from "react";
import Loading from "../components/Loading";


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
                hydrateFallbackElement:<Loading></Loading>
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login,
            },
            {
                path: '/auth/register',
                Component: Register,
            }
        ]
    },
    {
        path: '/newsDetails/:id',
        loader: () => fetch('/news.json'),
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        hydrateFallbackElement:<Loading></Loading>
    },
    {
        path: '/about',
        Component: About,
    }
    , {
        path: '/career',
        Component: Career,
    }
])
export default router;