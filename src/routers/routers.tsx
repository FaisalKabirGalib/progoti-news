
import {
    createBrowserRouter,
} from "react-router-dom";
import BaseLayouts from "../Layouts/Base.layout";

import MainLayout from "../Layouts/MainLayout";
import { AboutPage, HomePage } from "../pages";
import AddNewsPage from "../pages/AddNews.page";
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
                path: 'add-news',
                element: <AddNewsPage />
            },
            {
                path: "news",
                element: <MainLayout />,
                children: [
                    {
                        path: "item/:par/:id",
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