import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
//页面
import Layout from './component/layout/index'
import Home from'./home/index'
class App extends React.Component{
    render(){
        return(
            <Router>
                <Layout>
                <Switch>
                <Route exact path='/' component={Home}></Route>
                <Redirect from="*" to='/'/>
                </Switch>
                </Layout>
            </Router>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));