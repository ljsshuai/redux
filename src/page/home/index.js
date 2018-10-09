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
                <div className="Data_case" style={{padding:'20px'}}><span style={{fontSize:'20px'}}><strong>数据案例</strong></span>
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
                       <span><strong style={{fontSize:'20px'}}>定制报告</strong></span>
                       <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal" style={{width:'120px',color:'white',background:'red',fontSize:'13px'}}>
                           <i className="glyphicon glyphicon-level-up" style={{marginRight:'6px'}}></i>定制报告
                       </button></div>
                   <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                       <div className="modal-dialog" role="document">
                           <div className="modal-content">
                               <div className="modal-header" style={{background:'red'}}>
                                   <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style={{color:'white'}}>&times;</span></button>
                                   <div className="modal-title" id="myModalLabel" style={{fontSize:'14px',color:'white'}}><strong>定制报告</strong></div>
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
                                   <button type="button" className="btn" style={{background:'red',color:'white'}}>提交</button>
                               </div>
                           </div>
                       </div>
                   </div>
                <div className="custom_report_main">
                 <ul>
                     <li><strong>报告名称</strong></li>
                     <li><strong>时间</strong></li>
                     <li><strong>报告需求描述</strong></li>
                     <li><strong>报告状态</strong></li>
                     <li><strong>详情</strong></li>
                 </ul>
                    <div className="custom_report_list">
                        <ul>
                            <li>xx市文娱产业分析报告</li>
                            <li>2018-9-11 14:36:40</li>
                            <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                            <li>进行中</li>
                            <li><Link to='/report' style={{color:'red'}}>查看</Link></li>
                        </ul>
                    </div>
                    <div className="custom_report_list">
                        <ul>
                            <li>xx市文娱产业分析报告</li>
                            <li>2018-9-11 14:36:40</li>
                            <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                            <li>进行中</li>
                            <li><a style={{color:'red'}}>查看</a></li>
                        </ul>
                    </div>
                    <div className="custom_report_list">
                        <ul>
                            <li>xx市文娱产业分析报告</li>
                            <li>2018-9-11 14:36:40</li>
                            <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                            <li>进行中</li>
                            <li><a style={{color:'red'}}>查看</a></li>
                        </ul>
                    </div>
                    <div className="custom_report_list">
                        <ul>
                            <li>xx市文娱产业分析报告</li>
                            <li>2018-9-11 14:36:40</li>
                            <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                            <li>进行中</li>
                            <li><a style={{color:'red'}}>查看</a></li>
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