import React from 'react';
import './index.css';
import '../../../js/bootstrap.min';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import Layout from '../../component/layout/index'
class Home extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <Layout/>
            <div id='page-wrapper'>
                <div className="Data_case" ><h4 style={{marginLeft:"10px"}}>数据案例</h4>
               <div  className="Data_case_main">
                   <ul>
                       <li ><div >《xxx市》影视人才流动报告</div></li>
                       <li ><div >《xxx市》影视人才流动报告</div></li>
                       <li ><div >《xxx市》影视人才流动报告</div></li>
                       <li ><div >《xxx市》影视人才流动报告</div></li>
                   </ul>
               </div>
               </div>
               <div className="custom_report">
                   <div className="custom_report_title">
                       <span style={{fontSize:'20px'}}>定制报告</span>
                       <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                           <a>定制报告</a>
                       </button></div>
                   <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                       <div className="modal-dialog" role="document">
                           <div className="modal-content">
                               <div className="modal-header">
                                   <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                   <h4 className="modal-title" id="myModalLabel">定制报告</h4>
                               </div>
                               <div className="modal-body">
                                   <div className="form-group">
                                       <label className="col-sm-2 control-label">报告名称</label>
                                           <input type="text" className="form-control" placeholder="Text input" />
                                   </div>
                                   <div className="form-group">
                                       <label form="inputPassword" className="col-sm-2 control-label">报告需求</label>
                                           <textarea className="form-control" rows="3">请输入内容</textarea>
                                   </div>
                               </div>
                               <div className="modal-footer">
                                   <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                                   <button type="button" className="btn btn-primary">提交</button>
                               </div>
                           </div>
                       </div>
                   </div>
                <div className="custom_report_main">
                 <ul>
                     <li>报告名称</li>
                     <li>时间</li>
                     <li>报告需求描述</li>
                     <li>报告状态</li>
                     <li>详情</li>
                 </ul>
                    <div className="custom_report_list">
                        <ul>
                            <li>xx市文娱产业分析报告</li>
                            <li>2018-9-11 14:36:40</li>
                            <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                            <li>进行中</li>
                            <li><Link to='/report'>查看</Link></li>
                        </ul>
                    </div>
                    <div className="custom_report_list">
                        <ul>
                            <li>xx市文娱产业分析报告</li>
                            <li>2018-9-11 14:36:40</li>
                            <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                            <li>进行中</li>
                            <li><a>查看</a></li>
                        </ul>
                    </div>
                    <div className="custom_report_list">
                        <ul>
                            <li>xx市文娱产业分析报告</li>
                            <li>2018-9-11 14:36:40</li>
                            <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                            <li>进行中</li>
                            <li><a>查看</a></li>
                        </ul>
                    </div>
                    <div className="custom_report_list">
                        <ul>
                            <li>xx市文娱产业分析报告</li>
                            <li>2018-9-11 14:36:40</li>
                            <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                            <li>进行中</li>
                            <li><a>查看</a></li>
                        </ul>
                    </div>
               </div>
               </div>
            </div>
            </div>
        );
    }
}
export default Home;