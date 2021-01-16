import './App.css';
import React from "react";
import {Route,Switch,Redirect} from 'react-router-dom';
import Login from "./authorization/Login";
import SignUp from "./authorization/SignUp";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path='/home' component={Home}/>
            <Redirect to='/home'/>
        </Switch>
    </div>
  );
}

export default App;
