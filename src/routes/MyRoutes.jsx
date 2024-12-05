import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import MainPage from "../components/main/MainPage";
import AboutUsFiz from "../components/about/AboutUsFiz";


const PUBLIC_ROUTES = [
  { id: 1, link: "*", element: <NotFound /> },
  { id: 2, link: "/", element: <MainPage /> }, 
  { id: 3, link: "/aboutusfiz", element: <AboutUsFiz /> }, 
];
const MyRoutes = () => {
  return (
    <Routes>
      {" "}
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
