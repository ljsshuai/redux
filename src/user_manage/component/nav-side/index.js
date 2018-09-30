import  React from 'react';
import {Link,NavLink} from 'react-router-dom'
class NavSide extends React.Component
{

    render(){
        return(
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <NavLink exact activeClassName="active-menu" to="/usermanage"><i className="glyphicon glyphicon-home"></i> <span>首页</span></NavLink>
                        </li>
                        <li className="active">
                            <Link to="/regulation">
                                <i className="glyphicon glyphicon-folder-open"></i>
                                <span>行业大屏</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/filmtelevisionrecord">
                                <i className="glyphicon glyphicon-film"></i>
                                <span>排行榜</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/entertainment_business">
                                <i className="glyphicon glyphicon-th-list"></i>
                                <span>更多服务</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export  default NavSide;