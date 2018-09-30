import React from 'react';
import Layout from '../component/layout/index.js';
class UserHome extends React.Component{
    constructor(props)
    {
        super(props);
    }
    onClick(id,event) {
        console.log(id);
        switch(id){
            case id='LI0':
                document.getElementById('cont0').style.display = 'block';
                document.getElementById('cont1').style.display = 'none';
                document.getElementById('cont2').style.display = 'none';
                break;
            case id='LI1':
                document.getElementById('cont0').style.display = 'none';
                document.getElementById('cont1').style.display = 'block';
                document.getElementById('cont2').style.display = 'none';
                break;
            case id='LI2':
                document.getElementById('cont0').style.display = 'none';
                document.getElementById('cont1').style.display = 'none';
                document.getElementById('cont2').style.display = 'block';
                break;
        }


    }
    render(){
        return(
            <div>
                <Layout/>
            <div id='page-wrapper'>
{/*                <div style={{width:'100%',height:'800px',background:'white'}}>
                    <div style={{width:'15%',height:'800px',padding:'20px',display:'inline-flex'}}>
                        <ul style={{width:'100%',height:'100%',borderRight:'solid 1px rgba(0,0,0,0.1)'}}>
                            <li style={{listStyle:'none',height:'40px',textAlign:'center'}}><a style={{fontSize:'18px'}} href='/usermanage/manageindex'>基本设置</a></li>
                            <li style={{listStyle:'none',height:'40px',textAlign:'center'}}><a style={{fontSize:'18px'}}>账号绑定</a></li>
                            <li style={{listStyle:'none',height:'40px',textAlign:'center'}}><a style={{fontSize:'18px'}}>修改密码</a></li>
                        </ul>
                    </div>
                        <div style={{display:'inline-flex'}}>sssdsd</div>
                    </div>*/}
                <div style={{width:'100%',float:'left',height:'800px',background:'white',padding:'20px'}}>
                    <div style={{float:'left',height:'100%',width:'15%',borderRight:'solid 1px rgba(0,0,0,0.1)',lineHeight:'30px'}}>
                        <ul style={{padding:'0px',margin:'0px',lineHeight:'40px',fontSize:'18px',textAlign:'center'}}>
                            <li  style={{width:'100%',listStyle:'none'}}>
                                <a onClick={this.onClick.bind(this,'LI0')} >基本设置</a>
                            </li>
                            <li  style={{width:'100%',listStyle:'none'}}>
                                <a onClick={this.onClick.bind(this,'LI1')} >账号绑定</a>
                            </li>
                            <li  style={{width:'100%',listStyle:'none'}}>
                                <a onClick={this.onClick.bind(this,'LI2')} >修改密码</a>
                            </li>
                        </ul>
                    </div>
                    <div id="cont0" style={{float:'left',width:'83%',height:'100%',marginLeft:'20px',display:'none'}}>
                        <div  style={{float:'left',width:'80%',height:'500px',lineHeight:'35px'}}>
                            <h4 ><strong>基本设置</strong></h4>
                            <div>用户名</div> <div style={{float:'right'}}><img src={require("../../image/u2441.jpg")}  className="img-circle" style={{width:'140px',height:'140px'}} /><div style={{textAlign:'center',marginTop:'10px'}}><button type="button" className="btn btn-primary">更换头像</button></div></div>
                            <div>antdesign@alipay.com</div>
                            <div>您的姓名</div>
                            <div><input type="text" className="form-control" placeholder="Search" style={{width:'60%'}}/></div>
                            <div>个人简介</div>
                            <div> <textarea className="form-control" rows="3" style={{width:'60%'}}>请输入内容</textarea></div>
                            <div>公司姓名</div>
                            <div><input type="text" className="form-control" placeholder="Search" style={{width:'60%'}}/></div>
                            <div>您的职务</div>
                            <div><input type="text" className="form-control" placeholder="Search" style={{width:'60%'}}/></div>
                            <div>国家地区</div>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    中国
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#">中国</a></li>
                                    <li><a href="#">美国</a></li>
                                    <li><a href="#">日本</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                            <div>国家地区</div>
                            <div><input type="text" className="form-control" placeholder="Search" style={{width:'60%'}}/></div>
                            <div>国家地区</div>
                            <div><input type="text" className="form-control" placeholder="Search" style={{width:'60%'}}/></div>
                            <button type="button" className="btn btn-primary" >更新信息</button>
                        </div>
                    </div>{/*------基本设置内容结束--------*/}
                    <div id="cont1" style={{float:'left',width:'83%',height:'100%',marginLeft:'20px',display:'none'}}>
                        <div  style={{float:'left',width:'80%',height:'500px',lineHeight:'35px'}}>
                            <h4 ><strong>账号绑定</strong></h4>
                            <div><input type="text" className="form-control" placeholder="手机号码" style={{width:'60%'}}/></div>
                            <div><input type="text" className="form-control" placeholder="请根据下列图选择验证码" style={{width:'60%'}}/></div>
                            <div><input type="text" className="form-control" placeholder="短信验证码" style={{width:'60%'}}/></div>
                            <button type="button" className="btn btn-primary" >确认绑定</button>
                        </div>
                    </div>{/*------账号绑定结束--------*/}
                    <div id="cont2" style={{float:'left',width:'83%',height:'100%',marginLeft:'20px',display:'none'}}>
                        <div  style={{float:'left',width:'80%',height:'500px',lineHeight:'35px'}}>
                            <h4 ><strong>修改密码</strong></h4>
                            <div><input type="text" className="form-control" placeholder="旧密码" style={{width:'60%'}}/></div>
                            <div><input type="text" className="form-control" placeholder="新密码" style={{width:'60%'}}/></div>
                            <div><input type="text" className="form-control" placeholder="确认新密码" style={{width:'60%'}}/></div>
                            <button type="button" className="btn btn-primary" >确认修改</button>
                        </div>
                    </div>{/*------修改密码结束--------*/}
                </div>
            </div>
            </div>
        );
    }
}
export default UserHome;