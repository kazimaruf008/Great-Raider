import './App.css';
import Home from './component/Home/Home'
import Header from './component/Header/Header'
import Destination from './component/Destination/Destination'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login/Login';
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import { createContext } from 'react';
import { useState } from 'react';
import PrivetRoute from './component/privetRoute/PrivetRoute';
import LoginUser from './component/Login/LoginUser';

export const UserContext = createContext();

function App(props) {
  const [loginUser, setLoginUser] = useState({})
  return (
    <UserContext.Provider value = {[loginUser, setLoginUser]}>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/destination/:name">
            <Destination></Destination>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <PrivetRoute path="/contact">
            <Contact></Contact>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/login-user">
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
