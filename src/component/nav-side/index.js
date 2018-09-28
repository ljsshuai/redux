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
                            <NavLink exact activeClassName="active-menu" to="/"><i className="glyphicon glyphicon-home"></i> <span>首页</span></NavLink>
                        </li>
                        <li className="active">
                            <Link to="/regulation">
                                <i className="glyphicon glyphicon-folder-open"></i>
                                <span>政策法规</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/filmtelevisionrecord">
                                <i className="glyphicon glyphicon-film"></i>
                                <span>影视备案</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/user">
                                <i className="glyphicon glyphicon-th-list"></i>
                                <span>文娱企业库</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/user">
                                <i className="glyphicon glyphicon-globe"></i>
                                <span>全国院线库</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/user">
                                <i className="glyphicon glyphicon-duplicate"></i>
                                <span>产业分析库</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export  default NavSide;