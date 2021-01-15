import './App.css';
import React from "react";
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path='/Home' component={Home}/>
            <Redirect to='/Home'/>
        </Switch>
    </div>
  );
}

export default App;
