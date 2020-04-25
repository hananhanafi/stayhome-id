import React,{Component} from 'react';
import Login from '../pages/admin/Login';
import Dashboard from '../pages/admin/Dashboard';
import {Switch,Route} from 'react-router-dom';




class RouterAdmin extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/admin/login" component={Login}></Route>
                <Route path="/admin/dashboard" component={Dashboard}></Route>
            </Switch>

        )
    }
}

export default RouterAdmin;