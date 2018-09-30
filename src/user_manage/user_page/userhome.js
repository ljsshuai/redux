import React from 'react';
import Layout from '../component/layout/index.js';
class UserHome extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <Layout/>
            <div id='page-wrapper'>
                <div style={{width:'100%',height:'800px',background:'white'}}>
                    <div style={{width:'100%',height:'800px',padding:'20px'}}>
                        <ul style={{width:'15%',height:'800px',borderRight:'solid 1px rgba(0,0,0,0.1)',display:'inline-block'}}>
                            <li style={{listStyle:'none',height:'40px',textAlign:'center'}}><a style={{fontSize:'18px'}} href='/usermanage/manageindex'>基本设置</a></li>
                            <li style={{listStyle:'none',height:'40px',textAlign:'center'}}><a style={{fontSize:'18px'}}>账号绑定</a></li>
                            <li style={{listStyle:'none',height:'40px',textAlign:'center'}}><a style={{fontSize:'18px'}}>修改密码</a></li>
                        </ul>
                        <div style={{display:'inline-block'}}>sssdsd</div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default UserHome;