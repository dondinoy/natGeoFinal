import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./routes";
import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter(routes);

const div = document.getElementById("root")!;

ReactDOM.createRoot(div).render(
  <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  </>
);