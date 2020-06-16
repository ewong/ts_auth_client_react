import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { AppStateContext } from './provider';
import { Home } from './home';
import { Login } from './login';
import { Register } from './register';
import { Profile } from './profile';
import { NotFound } from './not_found';

export const Main: React.FC = () => {
  const { appState } = useContext(AppStateContext);

  return <BrowserRouter>
    <div>
      <header>
        {
          appState.loggedIn ?
            <div>
              <div><Link to='/'>Home</Link></div>
              <div><Link to='/profile'>Profile</Link></div>
            </div> :
            <div>
              <div><Link to='/'>Home</Link></div>
              <div><Link to='/register'>Register</Link></div>
              <div><Link to='/login'>Login</Link></div>
            </div>
        }
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register'>{appState.loggedIn ? <Redirect to='/' /> : <Register />}</Route>
        <Route exact path='/login'>{appState.loggedIn ? <Redirect to='/' /> : <Login />}</Route>
        <Route exact path='/profile'>{appState.loggedIn ? <Profile /> : <Redirect to='/login' />}</Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter >;
}