import React from 'react';
import './login.css'
import {message,Button} from 'antd';
import {Link} from 'react-router-dom'
import LoginLayout from './login_layout'
import {login} from '../store/login.redux'
import {connect} from 'react-redux'
import User from '../server/userservice';
const _user =new User();
@connect(state=>state,{login})
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
    }
    handleClick() {
        let loginInfo ={
                username:document.getElementById("username").value,
                password:document.getElementById("password").value
            },
            //验证
        checkResult=_user.checkLoginInfo(loginInfo);
        //验证通过
        if(checkResult.status){
            this.props.login(loginInfo).then(res=>{
                // console.log(username,password);
                if(res.status==='ok'){
                    message.success(res.message)
                    this.props.history.push('/index')
                }else{
                    message.error(res.message)
                }
            })
        }
        //验证不通过
        else {
                message.info(checkResult.msg);
            }
    }
    render(){
        console.log(this.props,123)
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
                            <input type="password"
                                   name="username"
                                   className="form-control"
                                   placeholder="密码"
                                   id='password'
                                   style={{width:'80%',height:'34px',margin:"0 auto",marginTop:"10px",border:'none',borderBottom:'1px solid #ddd'}}
                            />
                            <div style={{height:'20px'}}><Link to="/forgetpassword" style={{width:"34%",float:'right',height:'30px',lineHeight:'20px',color:'#C0C0C0'}}>忘记密码？</Link></div>
                            <button type="button" className="btn btn-danger" style={{width:'80%',height:'55px'}} onClick={(e)=>{this.handleClick(e)}} >登录</button>
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
/* const props=(state=>state);
 const action={login};
 Login=connect(props,action)(Login)*/
export default Login;