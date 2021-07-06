import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ListVoiture from '../component/ListVoiture';
import Register from '../component/register';
import Login from '../component/login';
import Detail from '../component/afficheDetail';
const Router = () => {
    
    return (
        <Switch>
             
            <Route exact path="/" component={ListVoiture} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/login" component={Login} />
        </Switch>
    );
}


export default Router;