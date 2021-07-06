import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Router from './commons';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './action/authentification';
import Navbar from './component/Navbar';
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
function App()  {
    return (
      <div>
        <Provider store = { store }>
          <BrowserRouter>
              <div><Navbar /></div>
              <div className="App">
                <Router />
              </div>
            </BrowserRouter>
          </Provider>
      </div>
    );
}

export default App;
