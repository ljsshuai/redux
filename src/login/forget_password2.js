import React from 'react';
import './login.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
class ForgetPassword2 extends React.Component{
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
                                               placeholder="您注册的手机号码"
                                        />
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block">重置密码</button>
                                    <div style={{textAlign:'center'}}>如果无法通过手机号码找回请发生邮箱至
                                        XXXXX@xxx.com 寻求帮助</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ForgetPassword2;