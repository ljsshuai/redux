import React from 'react';
import './report.css';
import '../../../js/bootstrap.min';
import Layout from '../../component/layout/index'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
class Report extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
            <Layout/>
            <div id='page-wrapper' >
                <div className="report_list" >
                    <div className="list_nav"><a href="/">定制报告</a>/<span>查看</span></div>
                    <div className="report_list_main">
                        <div className="report_list_main_name"><div className="main_title"><strong>报告名称:</strong></div><div className="main_main">XXXXXXXXXXXXX</div></div>
                        <div className="report_list_main_name"><div className="main_title"><strong>需求报告:</strong></div><div className="main_main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div></div>
                        <div className="report_list_main_name"><div className="main_title"><strong>提交时间:</strong></div><div className="main_main">2018-9-19 10:24:50</div></div>
                        <div className="report_list_main_name"><div className="main_title"><strong>报告状态:</strong></div><div className="main_main">进行中</div></div>
                    </div>
                </div>
                <div className="reponse_report">
                    <div className="">
                        <div className="report_list_main_name"><div className="main_title"><strong>报告回复:</strong></div><div className="main_main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div></div>
                        <div className="report_list_main_name"><div className="main_title"><strong>回复时间:</strong></div><div className="main_main">2018-9-19 10:24:50</div></div>
                    </div>
                    <button type="button" className="btn" style={{marginLeft:'7%',color:'white',background:'red'}}>下载报告</button>
                </div>
            </div>
            </div>
        );
    }
}
export default Report;