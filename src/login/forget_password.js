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
                                                value="12343434"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"  placeholder="请点击下图的树叶获取验证码"
                                               name="password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"  placeholder="短信验证码"
                                               name="password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"  placeholder="新密码"
                                               name="password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"  placeholder="确认新密码"
                                               name="password"/>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block">完成</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ForgetPassword;