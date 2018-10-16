import React from 'react';
import './login.css'
import {Link} from 'react-router-dom'
import LoginLayout from './login_layout'
import {login} from '../store/login.redux'
import {connect} from 'react-redux'
@connect(state=>{state:state},{})
class Login extends React.Component{
    constructor(props)
    {
        super(props);
    }
    componentWillMount()
    {
        document.title="登陆-虎影智库";
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        console.log(this.props,31321)
        return(
            <div style={{width:'100%',height:'100%',background:'#2b2e33',overflow:"hidden"}}>
            <LoginLayout/>
           <div className="login_list">
                        <div className="login_mian">
                        <div  style={{textAlign:'center'}}><img style={{margin:'60px auto',width:'150px'}} src={require("../image/login_logo.png")}></img></div>
                            <input type="text"
                                   className="form-control"
                                   placeholder="手机号/用户名"
                                   style={{width:'80%',height:'34px',margin:"0 auto",border:'none',borderBottom:'1px solid #ddd'}}
                                   id='username'
                            />
                            <input type="text"
                                   name="username"
                                   className="form-control"
                                   placeholder="密码"
                                   id='password'
                                   style={{width:'80%',height:'34px',margin:"0 auto",marginTop:"10px",border:'none',borderBottom:'1px solid #ddd'}}
                            />
                            <div style={{height:'20px'}}><Link to="/forgetpassword" style={{width:"34%",float:'right',height:'30px',lineHeight:'20px',color:'#C0C0C0'}}>忘记密码？</Link></div>
                            <button type="button" className="btn btn-danger" style={{width:'80%',height:'55px'}}>登录</button>
                            <div className="order">
                                <span className="line"></span>
                                <span className="txt">还没账号？<Link to="/loginregister" style={{color:'red'}}>立即注册</Link></span>
                                <span className="line"></span>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}
export default Login;