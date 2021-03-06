import './App.css';
import Home from './component/Home/Home'
import Header from './component/Header/Header'
import Destination from './component/Destination/Destination'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './component/Login/Login';
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
import { createContext } from 'react';
import { useState } from 'react';
import PrivetRoute from './component/privetRoute/PrivetRoute';
import LoginUser from './component/Login/LoginUser';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"

export const UserContext = createContext();

function App(props) {
  const [loginUser, setLoginUser] = useState({})
  return (
    <UserContext.Provider value = {[loginUser, setLoginUser]}>
      <Router>
      <Header loginUser = {loginUser}></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivetRoute path="/destination/:name">
            <Destination></Destination>
          </PrivetRoute>
          <PrivetRoute path="/blog" exact>
            <Blog></Blog>
          </PrivetRoute>
          <PrivetRoute path="/contact" exact>
            <Contact></Contact>
          </PrivetRoute>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/login-user" exact>
            <LoginUser></LoginUser>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>  
  );
}

export default App;
