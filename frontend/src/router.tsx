import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/Pages/LoginPage";
import HomePage from "@/Pages/HomePage";
import RegisterPage from "@/Pages/RegisterPage";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import NotFound from "./Pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            }
        ]
    },
    {
        path: '*', // This catches all unmatched routes
        element: <NotFound />,
    },
]);
