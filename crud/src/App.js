import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

// import Navigation from './components/Navigation';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Navigation from './components/Navigation.js';
// import SavedList from './components/SavedList';

import CommentContext from './components/CommentContext';
import SaveComment from './components/SaveComment';
import axiosWithAuth from './utils/axiosWithAuth';

import './App.css';


// import styled from "styled-components"
// const WrapperDiv = styled.div`
// width: 16.5%;
// margin-left: 43%;
//  box-shadow: 5px 5px 5px black;
// `;


// const WrapperDiv = styled.div`
// width: 16.5%;
// margin-left: 43%;
//  box-shadow: 5px 5px 5px black;
// `;

function App() {
  const [comments]= useState ([])

  return (
    <CommentContext.Provider value={{comments}}>
      <div className="App">
        <PrivateRoute path={['/dashboard', '/search', '/saved']} component={Navigation} /> 
          <Switch>
            {/* <Route path = '/crud' component ={SaveComment} /> */}
            <Route exact path="/" component={Registration}/>
            <Route path="/login" component={Login} />
            {/* <Route path = "/savedlist" component={SavedList}/> */}
            <PrivateRoute path="/dashboard" component={Dashboard} /> 
          </Switch>
      </div>
    </CommentContext.Provider>
  );
}     
  
export default App;