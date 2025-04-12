import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage.tsx";
import Layout from "@/pages/Layout.tsx";
import GameDetailPage from "@/pages/GameDetailPage.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> }
    ]
  }
]);

export default routes;