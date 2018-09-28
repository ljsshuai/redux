import React from 'react';
import './report.css';
import '../../../js/bootstrap.min';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
class Report extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div id='page-wrapper'>
                <div className="report_list">
                    <div className="list_nav"><a href="/">定制报告</a>/<span>查看</span></div>
                    <div className="report_list_main">
                        <div className="report_list_main_name"><div className="main_title">报告名称:</div><div className="main_main">XXXXXXXXXXXXX</div></div>
                        <div className="report_list_main_name"><div className="main_title">需求报告:</div><div className="main_main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div></div>
                        <div className="report_list_main_name"><div className="main_title">提交时间:</div><div className="main_main">2018-9-19 10:24:50</div></div>
                        <div className="report_list_main_name"><div className="main_title">报告状态:</div><div className="main_main">进行中</div></div>
                    </div>
                </div>
                <div className="reponse_report">
                    <div className="">
                        <div className="report_list_main_name"><div className="main_title">报告回复:</div><div className="main_main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div></div>
                        <div className="report_list_main_name"><div className="main_title">回复时间:</div><div className="main_main">2018-9-19 10:24:50</div></div>
                    </div>
                    <button type="button" className="btn btn-primary" style={{marginLeft:'7%'}}>下载报告</button>
                </div>
            </div>
        );
    }
}
export default Report;