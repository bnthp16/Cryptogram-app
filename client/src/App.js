import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { DashboardStore } from "./Pages/dashboard";
import store from "./store";
import { NavBarResStore, NavbarStore } from "components/Navbar";
import { useSelector } from "react-redux";
import { ActivityStore } from "./Pages/activity";
import { ProfilStore } from "./Pages/profil";
import { ContactStore } from "./Pages/contact/contact";
import { MarketStore } from "./Pages/market";
import './app.scss'
import 'components/notification/notif.scss'
import Landing from "./Pages/Landing";
import { TransfertStore } from "./Pages/transfert/transfert";
import { SignupStore } from "Pages/signup";
import { LoginStore } from "Pages/login";

const App = () => {
  const myStore = store.getState().authReducer.isLoggedIn
  const [isAuthenticated, setIsAuthenticated] = useState(myStore)
  const currentUserInfo = useSelector(state => state.authReducer)
  
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }
  useEffect(()=>{

  },[myStore])
  return(
    <div id="container-app">
      <Router>
        <NavBarResStore setAuth={setAuth}/>
        <NavbarStore setAuth={setAuth} state={currentUserInfo}/>
        <Route exact path ="/" render={props => <Landing {...props} />}/>
        <Route exact path ="/signup" render={props => !myStore? <SignupStore {...props} setAuth={setAuth}/>  : <Redirect to="/login"/>} />
        <Route exact path ="/login" render={props => !myStore ? <LoginStore {...props} setAuth={setAuth} /> : <Redirect to="/dashboard"/>} />
        <Route exact path="/profil" render={props => myStore? <ProfilStore {...props} token={currentUserInfo.token}/> : <Redirect to="/login"/>}/>
        <Route exact path ="/contact" render={props => myStore ? <ContactStore {...props} token={currentUserInfo.token} /> : <Redirect to="/login"/>} />
        <Route exact path ="/dashboard" render={props => myStore ? <DashboardStore {...props} token={currentUserInfo.token} /> : <Redirect to="/login"/>} />
        <Route exact path="/activity" render={props => myStore? <ActivityStore {...props} token={currentUserInfo.token} /> : <Redirect to="/login"/>}/>
        <Route exact path="/transfert_crypto" render={props => myStore? <TransfertStore {...props}  token={currentUserInfo.token}/> : <Redirect to="/login"/>}/>      
      </Router>

    </div>
  )
}

export default App;