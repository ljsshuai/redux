import React from 'react';
import UserLayout from '../../component/layout/index.js';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import UserHomeManage from './user_home';
class UserHomeData extends React.Component
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
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%',textAlign:'center' }}
                            >
                                <Menu.Item   key="1"><Link to="/usermanage/data">个人资料</Link></Menu.Item>
                                <Menu.Item   key="2"><Link to="/usermanage/accountBinding">账户绑定</Link></Menu.Item>
                                <Menu.Item   key="3"><Link to="/usermange/changepassword">密码修改</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <div style={{float:'left',width:'83%',height:'100%',marginLeft:'20px'}}>
                                <div  style={{float:'left',width:'80%',height:'500px',lineHeight:'35px'}}>
                                    <h4 ><strong>基本设置</strong></h4>
                                    <div>用户名</div> <div style={{float:'right'}}><img src={require("../../image/u2441.jpg")}  className="img-circle" style={{width:'140px',height:'140px'}} /><div style={{textAlign:'center',marginTop:'10px'}}><button type="button" className="btn btn-danger">更换头像</button></div></div>
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
                                    <div>所在省市: <select id="province" name="province">
                                    </select>
                                        <select id="city" name="city">
                                        </select>
                                        <select id="area" name="area">
                                        </select>
                                    </div>
                                    <div>街道地址</div>
                                    <div><input type="text" className="form-control" placeholder="Search" style={{width:'60%'}}/></div>
                                    <div>联系电话</div>
                                    <div><input type="text" className="form-control" placeholder="Search" style={{width:'60%'}}/></div>
                                    <button style={{marginTop:'30px'}} type="button" className="btn btn-danger" >更新信息</button>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </div>
            </div>
        )
    }
}
export default UserHomeData;