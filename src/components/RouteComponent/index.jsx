import React from "react";
import { Routes, Route } from "react-router-dom";

// import Main from "../../pages/Main/Main";
// import Products from "../../pages/Products";
// import Pricing from "../../pages/Pricing";
// import Dashboard from "../../pages/Dashboard";
// import UnknownPage from "../../pages/UnknownPage";
// import Counter from "../../pages/Counter";

import {
  Counter,
  Products,
  Pricing,
  Main,
  Dashboard,
  UnknownPage,
  Users
} from "../../pages";


function RouteComponent() {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/product"} element={<Products />} />
      <Route path={"/pricing"} element={<Pricing />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/counter"} element={<Counter />} />
      <Route path={"/users"} element ={<Users />}/>
      <Route path={"*"} element={<UnknownPage />} />
    </Routes>
  );
}

export default RouteComponent;
