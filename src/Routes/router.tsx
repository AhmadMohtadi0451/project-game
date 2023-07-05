import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import HomePage from "../Pages/HomePage";
import GameDetailPage from "../Pages/GameDetailPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
