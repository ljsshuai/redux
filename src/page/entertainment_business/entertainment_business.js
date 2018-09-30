import React from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import Layout from '../../component/layout/index';
class EntertainmentBusiness extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
             <Layout/>
            <div id='page-wrapper'>
                <div className="film_list">
                    <div className="search">
                        <div className="input-group">
                            <div className="input-icon-group">
                                <span className="glyphicon glyphicon-search fa-2x form-control-feedback"></span>
                                <input type="text" className="form-control fc-clear" placeholder="输入关键字查询政策信息"/>
                            </div>
                            <span className="input-group-btn"><button className="btn btn-primary" type="button" style={{width:'160px'}}>搜索</button></span>
                        </div>
                    </div>
                    <div className="film_nav">
                        <ul>
                            <li>企业状态:</li>
                            <li>全部</li>
                            <li>吊销</li>
                            <li>注销</li>
                            <li>迁出</li>
                        </ul>
                        <ul>
                            <li>注册时间:</li>
                            <li>全部</li>
                            <li>2018</li>
                            <li>2017</li>
                            <li>2016</li>
                        </ul>
                        <ul>
                            <li>注册资金:</li>
                            <li>0-100万</li>
                            <li>100-200万</li>
                            <li>200-500万</li>
                            <li>500-1000万</li>
                            <li>1000-5000万</li>
                            <li>5000万以上</li>
                        </ul>
                        <ul>
                            <li>省份地区:</li>
                            <li>全部</li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>重庆</li>
                        </ul>
                    </div>
                    <div className="film_resoult">共查询到XXX条相关信息</div>
                    <div className="film_main">
                        <div className="film_title">
                            <ul>
                                <li style={{width:'25%',fontSize:'18px'}}><Link to='/entertainment_business/details'>北京发现之旅文华发展有限公司</Link></li>
                                <li style={{width:'15%',}}><button style={{height:'30px'}} type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                    存续</button></li>
                            </ul>
                        </div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>法定代表人:xxx </li><li style={{width:'20%'}}>注册资金:xxxx.xxx万</li><li style={{width:'20%'}}>注册時間:2018-5-3</li><li style={{width:'38%',textAlign:'right'}}>北京</li></ul></div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>联系电话:123456789</li><li>邮箱:XXXXX@XXXX.com</li></ul></div>
                        <div className="film_address"><ul><li style={{width:'70%'}}>地址:北京市海淀区清河西三旗转盘东路3号沁春家园9号楼5单元301室</li></ul></div>
                    </div>
                    <div className="film_main">
                        <div className="film_title">
                            <ul>
                                <li style={{width:'25%',fontSize:'18px'}}><Link to='/filmtelevisionrecord/record'>北京发现之旅文华发展有限公司</Link></li>
                                <li style={{width:'15%',}}><button style={{height:'30px'}} type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                    存续</button></li>
                            </ul>
                        </div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>法定代表人：xxx </li><li style={{width:'20%'}}>注册资金：xxxx.xxx万</li><li style={{width:'20%'}}>注册時間：2018-5-3</li><li style={{width:'38%',textAlign:'right'}}>北京</li></ul></div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>联系电话:123456789</li><li>邮箱:XXXXX@XXXX.com</li></ul></div>
                        <div className="film_address"><ul><li style={{width:'70%'}}>地址:北京市海淀区清河西三旗转盘东路3号沁春家园9号楼5单元301室</li></ul></div>
                    </div>
                    <div className="film_main">
                        <div className="film_title">
                            <ul>
                                <li style={{width:'25%',fontSize:'18px'}}><Link to='/filmtelevisionrecord/record'>北京发现之旅文华发展有限公司</Link></li>
                                <li style={{width:'15%',}}><button style={{height:'30px'}} type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                    存续</button></li>
                            </ul>
                        </div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>法定代表人：xxx </li><li style={{width:'20%'}}>注册资金：xxxx.xxx万</li><li style={{width:'20%'}}>注册時間：2018-5-3</li><li style={{width:'38%',textAlign:'right'}}>北京</li></ul></div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>联系电话:123456789</li><li>邮箱:XXXXX@XXXX.com</li></ul></div>
                        <div className="film_address"><ul><li style={{width:'70%'}}>地址:北京市海淀区清河西三旗转盘东路3号沁春家园9号楼5单元301室</li></ul></div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default EntertainmentBusiness;