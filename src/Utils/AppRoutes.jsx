import CreateBook from "../Componentes/CreateBook";
import DashBoard from "../Pages/DashBoard";
import { Navigate } from "react-router-dom";

const appRouter = [
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/createBook",
    element: <CreateBook />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
];

export default appRouter;
