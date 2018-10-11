import React from 'react';
import UserLayout from '../../component/layout/index.js';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class UserChangePassword extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div style={{height:'100%'}}>
                <UserLayout/>
                <div id='page-wrapper' style={{height:'100%'}}>
                    <Layout style={{padding: '24px 0', background: '#fff',height:'100%'}}>

                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['3']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%',textAlign:'center' }}
                            >
                                <Menu.Item   key="1"><Link to="/usermanage/data">个人资料</Link></Menu.Item>
                                <Menu.Item   key="2"><Link to="/usermanage/accountBinding">账户绑定</Link></Menu.Item>
                                <Menu.Item   key="3"><Link to="/usermange/changepassword">密码修改</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <div  style={{float:'left',width:'83%',height:'100%',marginLeft:'20px',}}>
                                <div  style={{float:'left',width:'80%',height:'500px',lineHeight:'35px'}}>
                                    <h4 ><strong>修改密码</strong></h4>
                                    <div><input type="text" className="form-control" placeholder="旧密码" style={{width:'60%',marginTop:'15px'}}/></div>
                                    <div><input type="text" className="form-control" placeholder="新密码" style={{width:'60%',marginTop:'15px'}}/></div>
                                    <div><input type="text" className="form-control" placeholder="确认新密码" style={{width:'60%',marginTop:'15px'}}/></div>
                                    <button style={{marginTop:'30px'}} type="button" className="btn btn-danger" >确认修改</button>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </div>
            </div>
        )
    }
}
export default UserChangePassword;