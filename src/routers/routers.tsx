
import {
    createBrowserRouter,
} from "react-router-dom";
import BaseLayouts from "../Layouts/Base.layout";

import MainLayout from "../Layouts/MainLayout";
import { AboutPage, HomePage } from "../pages";
import NewsDetailsPage from "../pages/NewsDetails.page";


export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,

                element: <BaseLayouts>
                    <HomePage />
                </BaseLayouts>,

            },
            {
                path: "news",
                element: <MainLayout />,
                children: [
                    {
                        path: "item/:id",
                        element: <NewsDetailsPage />,
                    },
                    {
                        path: ":cat",
                        element: <AboutPage />,
                    },
                    {
                        path: ":cat/:sub",
                        element: <AboutPage />,
                    }
                ]
            },
        ],
    },
], { basename: '/progoti-news/' });