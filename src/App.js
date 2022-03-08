import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header-component/header.component";
import HomePage from "./pages/homepage.components";
import ShopPage from "./pages/shop-page/shop.component";
import SignInAndSignUp from "./pages/signInAndSignup/signandsignup.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
           <Route path="/sigin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
