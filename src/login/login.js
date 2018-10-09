import React from 'react';
import './login.css'
class Login extends React.Component{
    constructor(props)
    {
        super(props);
    }
    componentWillMount()
    {
        document.title="登陆-虎影智库";
    }
    render(){
        return(
            <div style={{width:'100%',height:'100%',background:'#2b2e33'}}>
                <div id="particles-js"></div>
                <div className="login_list">
                        <div className="login_mian">
                        <div className="panel-heading" style={{textAlign:'center'}}><img style={{margin:'80px auto',width:'150px'}} src={require("../image/login_logo.png")}></img></div>

                        </div>
                </div>
            <div className="order">
                    <span className="line"></span>
                    <span className="txt">还没账号？<a>立即注册</a></span>
                    <span className="line"></span>
                </div>
                </div>
        );
    }
}
export default Login;