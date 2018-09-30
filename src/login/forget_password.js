import React from 'react';
import './login.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
class ForgetPassword extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
            {

            }
    }
    componentWillMount()
    {
        document.title="忘记密码-虎影智库";
    }
    render(){
        return(
            <div className="bggroundsize" >
                <div className="bground" >
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default login-panel">
                            <div className="panel-heading panel-default">LO GO</div>
                            <div className="panel-body">
                                <div>
                                    <div className="form-group">
                                        <input type="text"
                                               name="username"
                                               className="form-control"
                                               placeholder="手机号码/用户名"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"  placeholder="密码"
                                               name="password"/>
                                    </div>
                                    <div className="form-group" style={{float:'right'}}>
                                        <Link to=''>忘记密码？</Link>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block">登录</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{left: '35%',color:'white',fontSize:'20px', position: 'absolute',
                    bottom: '40px'}}><span style={{textDecoration:'line-through'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>还没有账号？<a style={{color:'white'}}>立即注册</a><span style={{textDecoration:'line-through'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
            </div>
        );
    }
}
export default ForgetPassword;