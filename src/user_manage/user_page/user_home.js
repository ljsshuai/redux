import React from 'react';
import UserLayout from '../../component/layout/index.js';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class UserHomeManage extends React.Component
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
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%',textAlign:'center' }}
                        >
                                <Menu.Item   key="1"><Link to="/usermanage/data">个人资料</Link></Menu.Item>
                                <Menu.Item   key="2"><Link to="/usermanage/accountBinding">账户绑定</Link></Menu.Item>
                            <Menu.Item   key="3"><Link to="/usermange/changepassword">密码修改</Link></Menu.Item>
                        </Menu>
                    </Sider>
                </Layout>
            </div>
            </div>
        )
    }
}
export default UserHomeManage;