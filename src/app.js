import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
import {createStore,applyMiddleware,compose}from 'redux'
import thunk from 'redux-thunk'
//页面
import Home from './page/home/index'
import Report from "./page/home/report";
import Reulation from './page/regulations/regulation';
import ReulationArticle from './page/regulations/regulation_article';
import FilmTelevisionRecord from './page/film_television_record/filmtelevisionrecord';
import EntertainmentBusiness from './page/entertainment_business/entertainment_business';
import Record from "./page/film_television_record/record";
import BusinessDetails from "./page/entertainment_business/Business_details";
import UserHomeManage from './user_manage/user_page/user_home'
import Login from './login/login'
import LoginRegister from './login/login_register'
import ForgetPassword from './login/forget_password'
import ForgetPsdmain from './login/forget_password_main'
import LoginRegisterMain from './login/login_register_main'
import UserHomeData from './user_manage/user_page/user_home_data'
import UserAccountBinding from './user_manage/user_page/user_ Account_binding'
import UserChangePassword from './user_manage/user_page/user_change_password'
import IndustrialAnalysis from './page/industrial_analysis/industrial_analysis'
import MovieLibrary from './page/movie_Library/movielibrary'
import {auth} from "./store/login.redux";
import {Provider} from "react-redux";
const store=createStore(auth,compose(applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f));
class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <Router >
                <Switch>
                        <Route exact path='/login' component={Login}></Route>
                        <Route exact path='/forgetpassword' component={ForgetPassword}></Route>
                        <Route exact path='/forgetpsdmain' component={ForgetPsdmain}></Route>
                        <Route exact path='/loginregister' component={LoginRegister}></Route>
                        <Route exact path='/loginregistermain' component={LoginRegisterMain}></Route>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/report' component={Report}></Route>
                        <Route exact path='/regulation' component={Reulation}></Route>
                        <Route exact path='/regulation/article' component={ReulationArticle}></Route>
                        <Route exact path='/filmtelevisionrecord' component={FilmTelevisionRecord}></Route>
                        <Route exact path='/filmtelevisionrecord/record' component={Record}></Route>
                        <Route exact path='/analysis' component={IndustrialAnalysis} />
                        <Route exact path='/entertainment_business' component={EntertainmentBusiness}></Route>
                        <Route exact path='/entertainment_business/details' component={BusinessDetails}></Route>
                        <Route exact path='/usermanage' component={UserHomeManage}></Route>
                        <Route  path='/movielibrary' component={MovieLibrary}></Route>
                        <Route  path='/usermanage/data' component={UserHomeData}></Route>
                        <Route path='/usermanage/accountBinding' component={UserAccountBinding}/>
                        <Route path='/usermange/changepassword' component={UserChangePassword}/>
                </Switch>
            </Router>
             </Provider>
        );
    }
}



ReactDOM.render(<App/>,document.getElementById('app'));