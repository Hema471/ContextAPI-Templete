import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1 className="font-bold text-3xl">Page Not Found</h1>,
  },
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
