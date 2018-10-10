import React from 'react';
import './login.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import LoginRegister from "./login_register";
class LoginRegisterMain extends React.Component{
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
                <LoginRegister/>
                <div className="register_list">
                    <div className="login_mian">
                        <div  style={{textAlign:'center'}}><img style={{margin:'60px auto',width:'150px'}} src={require("../image/login_logo.png")}></img></div>
                        <input type="text"
                               className="form-control"
                               placeholder="12454548456"
                               style={{width:'80%',height:'34px',margin:"0 auto",border:'none',borderBottom:'1px solid #ddd'}}
                        />
                        <div className="input-group" style={{width:"80%",margin:'10px auto'}}>
                            <input type="text" className="form-control" placeholder="密码(字母,数字,至少6位)" aria-describedby="basic-addon2" style={{border:'none',borderBottom:'1px solid #ddd'}} />
                            <span className="input-group-addon" id="basic-addon2" style={{border:'none',borderBottom:'1px solid #ddd',background:'white'}}><i className="glyphicon glyphicon-eye-open"></i></span>
                        </div>
                        <input type="text"
                               className="form-control"
                               placeholder="您的姓名"
                               style={{width:'80%',height:'34px',margin:"0 auto",border:'none',borderBottom:'1px solid #ddd'}}
                        />
                        <input type="text"
                               className="form-control"
                               placeholder="您的职务"
                               style={{width:'80%',height:'34px',margin:"0 auto",border:'none',borderBottom:'1px solid #ddd'}}
                        />
                        <input type="text"
                               className="form-control"
                               placeholder="输入图中验证码"
                               style={{width:'80%',height:'34px',margin:"0 auto",border:'none',borderBottom:'1px solid #ddd'}}
                        />
                        <div className="input-group" style={{width:"80%",margin:'10px auto'}}>
                            <input type="text" className="form-control" placeholder="请输入验证码" aria-describedby="basic-addon2" style={{border:'none',borderBottom:'1px solid #ddd'}} />
                            <span className="input-group-addon" id="basic-addon2" style={{border:'none',borderBottom:'1px solid #ddd',background:'white'}}><a style={{color:'red'}}>获取短信验证码</a></span>
                        </div>
                        <button type="button" className="btn btn-danger" style={{width:'80%',height:'55px',marginTop:'30px'}}>注册</button>
                        <div><input type="checkbox"/>我已阅读并同意<a style={{color:'red'}}>虎影数据用户协议</a></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginRegisterMain;