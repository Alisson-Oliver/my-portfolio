import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProjectDetails } from "../pages/ProjectDetails";
import { RootLayout } from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/projeto/:id", element: <ProjectDetails /> },
    ],
  },
]);
