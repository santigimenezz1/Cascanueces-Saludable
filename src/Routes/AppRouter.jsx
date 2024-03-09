import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout/Layout";
import Carrusel from "../components/Common/SectionHome/Carrusel/Carrusel";
import { routes } from "./Route";

const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
