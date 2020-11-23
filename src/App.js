import './App.css';
import React from "react";
import Route from 'react-router-dom/Route';
import Home from "./components/Home";
import Switch from "react-router-dom/Switch";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Redirect from "react-router-dom/Redirect";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path='/' component={Home}/>
            <Redirect to='/Home'/>
        </Switch>
    </div>
  );
}

export default App;
