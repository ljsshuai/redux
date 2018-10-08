import React from 'react';
import {Link,withRouter } from 'react-router-dom';

class NavTop extends React.Component{
    constructor(props)
    {
        super(props)

    }
    //退出登录
    onLogout(){
    }
    render(){
        return(
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header" >
                    <div className="navbar-brand"><b>虎影</b>科技</div>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle"  href="javascript:;">
                            <Link to='/usermanage'>
                            <i className="fa fa-user fa-fw"></i>
                            <span>Raymond</span>
                            <i className="fa fa-caret-down"></i>
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