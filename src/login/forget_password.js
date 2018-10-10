import React from 'react';
import './login.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import LoginLayout from './login_layout'
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
            <div style={{width:'100%',height:'100%',background:'#2b2e33',overflow:"hidden"}}>
                <LoginLayout/>
                <div className="login_list">
                    <div className="login_mian">
                        <div  style={{textAlign:'center'}}><img style={{margin:'60px auto',width:'150px'}} src={require("../image/login_logo.png")}></img></div>
                        <input type="text"
                               className="form-control"
                               placeholder="请输入您注册的手机号"
                               style={{width:'80%',height:'34px',margin:"0 auto",border:'none',borderBottom:'1px solid #ddd'}}
                        />
                        <Link to="/forgetpsdmain"><button type="button" className="btn btn-danger" style={{width:'80%',height:'55px',marginTop:'30px'}}>重置密码</button></Link>
                        <div style={{lineHeight:'20px',width:'60%',margin:'0 auto',opacity:'0.5',height:'50px',marginTop:'30px'}}>如果无法通过手机号码找回,请发送邮箱至12123454@qq.com寻求帮助</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ForgetPassword;