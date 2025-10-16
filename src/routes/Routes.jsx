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
        element: <Suspense fallback={<span className="loading loading-spinner text-error"></span>
        }>
            <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
        </Suspense>
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