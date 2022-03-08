import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header-component/header.component";
import HomePage from "./pages/homepage.components";
import ShopPage from "./pages/shop-page/shop.component";
import SignInAndSignUp from "./pages/signInAndSignup/signandsignup.component";
import { auth } from "./firebase/firebase.utils";


class App extends React.Component {
   constructor() {
      super();
      this.state = {
         currentUser:''
      }
   }

   unsubscribeFromAuth = null
   componentDidMount() {
     this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
         this.setState({ currentUser: user })
         console.log(user)
      })
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth()
   }


  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sigin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
