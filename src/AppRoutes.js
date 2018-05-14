import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Clients from './components/Clients';
import Workers from './components/Workers';
import Services from './components/Services';
import Settings from './components/Settings';
import Home from './components/Home';
class AppRoutes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/client' component={Clients}/>
                        <Route path='/workers' component={Workers}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/services' component={Services}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRoutes