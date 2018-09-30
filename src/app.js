import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
//页面
import Layout from './component/layout/index'
import Home from './page/home/index'
import Report from "./page/home/report";
import Reulation from './page/regulations/regulation';
import ReulationArticle from './page/regulations/regulation_article';
import FilmTelevisionRecord from './page/film_television_record/filmtelevisionrecord';
import EntertainmentBusiness from './page/entertainment_business/entertainment_business';
import Record from "./page/film_television_record/record";
import BusinessDetails from "./page/entertainment_business/Business_details";
import UserHome from './user_manage/user_page/userhome'
import ManageIndex from './user_manage/user_page/manageindex'
import Login from './login/login'
import LoginRegister from './login/login_register'
import ForgetPassword from './login/forget_password'
class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                        <Route exact path='/login' component={Login}></Route>
                        <Route exact path='/forgetpassword' component={ForgetPassword}></Route>
                        <Route exact path='/loginregister' component={LoginRegister}></Route>
                        <Route exact path='/index' component={Home}></Route>
                        <Route exact path='/report' component={Report}></Route>
                        <Route exact path='/regulation' component={Reulation}></Route>
                        <Route exact path='/regulation/article' component={ReulationArticle}></Route>
                        <Route exact path='/filmtelevisionrecord' component={FilmTelevisionRecord}></Route>
                        <Route exact path='/filmtelevisionrecord/record' component={Record}></Route>
                        <Route exact path='/entertainment_business' component={EntertainmentBusiness}></Route>
                        <Route exact path='/entertainment_business/details' component={BusinessDetails}></Route>
                        <Route exact path='/usermanage' component={UserHome}></Route>
                        <Route exact path='/usermanage/manageindex' component={ManageIndex}></Route>
                </Switch>
            </Router>
        );
    }
}



ReactDOM.render(<App/>,document.getElementById('app'));