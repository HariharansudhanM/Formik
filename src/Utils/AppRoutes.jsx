import CreateBook from "../Componentes/CreateBook";
import BookEdit from "../Pages/BookEdit";
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
    path: "/books/edit/:id",
    element: <BookEdit />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
];

export default appRouter;
