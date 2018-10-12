import React from 'react';
import {Link,withRouter } from 'react-router-dom';
import store from '../../store/index';
class NavTop extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=store.getState();
        store.subscribe(this.handleStoreChange.bind(this));
      /*  console.log(this.state)*/
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleonClick(e){
        console.dir(e.target);
        console.dir(e.target.nodeName);
        const action={
            type:'change_title',
            title:e.target.nodeName==='IMG'||'SPAN'?'个人中心':e.target.title
        }
        store.dispatch(action);
    }
    //退出登录
    onLogout(){
    }
    render(){
        return(
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header" >
                    <div className="navbar-brand" ><img style={{margin:'5px auto',width:'158px'}} src={require("../../image/logo.png")}></img></div>
                </div>
                <span style={{fontSize:"22px",marginLeft:'35px',padding:'10px',lineHeight:'58px'}}><strong>{this.state.navtitle}</strong></span>
                <span style={{fontSize:'15px',lineHeight:'58px'}}>{this.state.twotitle}</span>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <Link to='/usermanage' className="dropdown-toggle" style={{padding:'11px',marginRight:'30px'}} onClick={this.handleonClick.bind(this)} title='个人中心'>
                                <img src={require("../../image/u2441.jpg")}  className="img-circle" style={{width:'40px',height:'40px',marginRight:'5px'}} />
                            <span>Raymond</span>
                            {/*<i className="fa fa-caret-down"></i>*/}
                        </Link>
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