import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from "./authorization/Login";
import SignUp from "./authorization/SignUp";
import Home from './components/Home';

const history = createBrowserHistory();

history.listen(({ location, action }) => {
  // this is called whenever new locations come in
  // the action is POP, PUSH, or REPLACE
  window.location.reload(); // force a refresh w/ the server
});

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" exact element={<Login {...props} history={history} />} />
        <Route path="/signup" exact element={<SignUp {...props} history={history} />} />
        <Route path='/home' element={<Home {...props} history={history} />} />
        {/* <Navigate to='/home' /> */}
      </Routes>
    </div>
  );
}

export default App;
