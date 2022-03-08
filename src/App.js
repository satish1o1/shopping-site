import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage.components";
import ShopPage from "./pages/shop-page/shop.component";

function App() {
  return (
    <div>
      <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path ='/shop' element = {<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
