import React from 'react';
import './Business_details.css'
import Layout from '../../component/layout/index'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
class BusinessDetails extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <Layout/>
            <div id='page-wrapper'>
                <div className="details_list">
                    <div className="details_list_nav"><a href="/filmtelevisionrecord">文娱企业详情</a>/<span>详情</span></div>
                    <div className="company_name"><ul><li style={{width:'25%',fontSize:'20px'}}><strong>北京洋洋艺宛文华传播有限公司</strong></li><li style={{width:'40%'}}><div>在业</div></li><li style={{width:'35%',textAlign:'right'}}>统一社会信用代码:91110228MA006P6G7B</li></ul></div>
                    <div className="company_people">法定代表人:</div>
                    <div className="company_time"><ul><li  style={{width:'20%'}}>成立时间:2016-07-04</li><li style={{width:'60%'}}>类型:有限责任公司(自然人独资)</li><li style={{width:'20%',textAlign:'center'}}>注册资金</li></ul></div>
                    <div className="company_phone"><ul><li style={{width:'20%'}}>电话:123545454</li><li style={{width:'20%'}}>邮箱:13811372142@qq.com</li><li style={{width:'20%'}}>官网</li></ul></div>
                    <div className="company_address">地址:北京市密云区古北口镇古域路外街11号镇政府办公楼212室-1359(古北口镇集中办公区)</div>

                <h4 style={{marginLeft:'20px'}}><strong>工商信息</strong></h4>
                <h4 style={{marginLeft:'20px'}}><strong>股东信息</strong></h4>
                <h4 style={{marginLeft:'20px'}}><strong>作品列表</strong></h4>
                <h4 style={{marginLeft:'20px'}}><strong>艺人数</strong></h4>
                </div>
            </div>
            </div>
        );
    }
}
export default BusinessDetails;