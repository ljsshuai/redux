import React from 'react';
import {Link,withRouter } from 'react-router-dom';
import{loginout} from '../../store/login.redux';
import {connect} from "react-redux";
var storage=window.localStorage;
@connect(state=>state,{loginout})
class NavTop extends React.Component{
    //退出登录
    constructor(props)
    {
        super(props);
    }
    componentWillMount()
    {

    }
    onLogout(){
    }
    render(){
        console.log(this.props)
        return(
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header" >
                    <div className="navbar-brand" ><img style={{margin:'5px auto',width:'158px'}} src={require("../../image/logo.png")}></img></div>
                </div>
                <span style={{fontSize:"22px",padding:'50px',lineHeight:'58px'}}><strong>首页</strong></span>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" style={{padding:'11px',marginRight:'30px'}}>
                            <Link to='/usermanage'>
                                <img src={require("../../image/u2441.jpg")}  className="img-circle" style={{width:'40px',height:'40px',marginRight:'5px'}} />
                            <span style={{fontSize:'18px'}}>{storage.username}</span>
                            {/*<i className="fa fa-caret-down"></i>*/}
                            </Link>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a >
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                    </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
NavTop = withRouter(NavTop)
export default NavTop;