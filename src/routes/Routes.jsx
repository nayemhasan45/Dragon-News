import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import HomePage from "../pages/HomePage";


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
                element: <CategoryNews></CategoryNews>
            }
        ]
    }
])
export default router;