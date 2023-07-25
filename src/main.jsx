import ReactDOM from "react-dom/client";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portolio";
import Resume from "./pages/Resume";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
