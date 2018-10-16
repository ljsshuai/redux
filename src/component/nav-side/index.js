import  React from 'react';
import {Link,NavLink} from 'react-router-dom'
import './index.css'
class NavSide extends React.Component
{

    render(){
        return(
            <div className="navbar-default navbar-side" style={{zIndex:'999',top:'0'}}>
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li className="active"  style={{height:'130px',lineHeight:'130px',textAlign:'center'}}>
                            <img style={{margin:'5px auto',width:'158px'}} src={require("../../image/logo.png")}></img>
                        </li>
                        <li className="active" >
                            <NavLink exact activeClassName="activemenu" to="/" style={{padding:'18px 44px'}}  title='首页'>
                                <i className="glyphicon glyphicon-home"></i><span>首页</span></NavLink>
                        </li>
                        <li className="active">
                            <NavLink exact activeClassName="activemenu" to="/regulation" style={{padding:'18px 44px'}} title='政策法规'>
                               <i className="glyphicon glyphicon-folder-open"></i>
                                <span>政策法规</span>
                            </NavLink>
                        </li>
                        <li className="active">
                            <NavLink exact activeClassName="activemenu" to="/filmtelevisionrecord" style={{padding:'18px 44px'}}  title='影视备案'>
                               <i className="glyphicon glyphicon-film"></i>
                                <span>影视备案</span>
                            </NavLink>
                        </li>
                        <li className="nav_left_active">
                            <NavLink exact activeClassName="activemenu" to="/entertainment_business" style={{padding:'18px 44px'}}  title='文娱企业库'>
                               <i className="glyphicon glyphicon-th-list"></i>
                                <span>文娱企业库</span>
                            </NavLink>
                        </li>
                        <li className="active">
                            <NavLink exact activeClassName="activemenu" to="/movielibrary" style={{padding:'18px 44px'}}  title='全国院线库'>
                                <i className="glyphicon glyphicon-globe"></i>
                                <span>全国院线库</span>
                            </NavLink>
                        </li>
                        <li className="active" >
                            <NavLink exact activeClassName="activemenu" to="/analysis" style={{padding:'18px 44px'}}  title='产业分析库'>
                                <i className="glyphicon glyphicon-duplicate"></i>
                                <span>产业分析库</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export  default NavSide;