import {
    createBrowserRouter,

    RouterProvider,
} from "react-router-dom";
import BaseLayouts from "../Layouts/Base.layout";
import { AboutPage, HomePage } from "../pages";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayouts>
            <HomePage />
        </BaseLayouts>,
        children: [
            {
                path: "home",
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
        ],
    },
]);