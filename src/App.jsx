import { useState } from "react";
import appRouter from "./Utils/AppRoutes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const router = createBrowserRouter(appRouter);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
