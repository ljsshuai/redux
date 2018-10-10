import React from 'react';
import './login.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import LoginLayout from './login_layout'
class LoginRegister extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
            {

            }
    }
    componentWillMount()
    {
        document.title="注册-虎影智库";
    }

    render(){
        return(
            <div style={{width:'100%',height:'100%',background:'#2b2e33',overflow:"hidden"}}>
                <LoginLayout/>
                <div className="login_list">
                    <div className="login_mian">
                        <div  style={{textAlign:'center'}}><img style={{margin:'60px auto',width:'150px'}} src={require("../image/login_logo.png")}></img></div>
                        <div className="input-group input-group-lg" style={{width:'80%',margin:'0 auto'}}>
                            <span className="input-group-addon" style={{background:"white",border:'none',borderBottom:'1px solid #ddd',borderRight:'1px solid #ddd'}}>+86</span>
                            <input type="text" className="form-control" placeholder="手机号码" style={{border:'none',borderBottom:'1px solid #ddd'}} />
                        </div>
                        <Link to="/loginregistermain"><button type="button" className="btn btn-danger" style={{width:'80%',height:'55px',marginTop:'30px'}}>注册</button></Link>
                        <div style={{marginTop:'30px',opacity:'0.6'}}>开启数字之门</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginRegister;