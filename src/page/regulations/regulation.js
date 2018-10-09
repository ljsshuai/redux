import React from 'react';
import './regulation.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import Layout from '../../component/layout/index'
import { Pagination,LocaleProvider} from 'antd';
import "antd/dist/antd.css";
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
class Regulation extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <Layout/>
            <div id='page-wrapper'>
                <div className="regulation_list">
                   <div className="search">
                       <div className="input-group">
                           <div className="input-icon-group">
                               <span className="glyphicon glyphicon-search fa-2x form-control-feedback"></span>
                               <input type="text" className="form-control fc-clear" placeholder="输入关键字查询政策信息"/>
                           </div>
                           <span className="input-group-btn"><button className="btn btn-primary" type="button" style={{width:'160px'}}>搜索</button></span>
                       </div>
                   </div>
                   <div className="regulation_nav">
                       <ul>
                           <li><strong>发文主体:</strong></li>
                           <li>全部</li>
                           <li>中英政策</li>
                           <li>国务院组成及相关部门</li>
                           <li>地方政策</li>
                       </ul>
                       <ul>
                           <li><strong>发布时间:</strong></li>
                           <li>全部</li>
                           <li>2018</li>
                           <li>2017</li>
                           <li>2016</li>
                       </ul>
                       <ul>
                           <li><strong>省份地区:</strong></li>
                           <li>全部</li>
                           <li>北京</li>
                           <li>上海</li>
                           <li>重庆</li>
                       </ul>
                   </div>
                    <div className="list_resoult">共查询到XXX条相关信息</div>
                   <div className="regulation_main">
                       <div><Link to='/regulation/article'><h4 style={{fontWeight:'550'}}>关于做好涉及占掘路审批的低压电力接入工程优化营商环境有关工作的通知</h4></Link></div>
                       <div ><h5>全面深入学习贯彻党的十九大精神，以习近平新时代中国特色社会主义思想为指导，坚持以人民为中心，充分发挥市场在资源配置中的决定性作用和更好发挥政府作用，准确把握生活性服务业的商业性和公益性双重属性，着力推进生活性服务业“规范智能化”(以下简称“六化”)发展，满足人民……</h5></div>
                       <div style={{color:'rgba(0,0,0,0.3)'}}>2016-10-22 12:00:00</div>
                   </div>
                    <div className="regulation_main">
                        <div><Link to='/regulation/article'><h4 style={{fontWeight:'550'}}>关于做好涉及占掘路审批的低压电力接入工程优化营商环境有关工作的通知</h4></Link></div>
                        <div ><h5>全面深入学习贯彻党的十九大精神，以习近平新时代中国特色社会主义思想为指导，坚持以人民为中心，充分发挥市场在资源配置中的决定性作用和更好发挥政府作用，准确把握生活性服务业的商业性和公益性双重属性，着力推进生活性服务业“规范智能化”(以下简称“六化”)发展，满足人民……</h5></div>
                        <div style={{color:'rgba(0,0,0,0.3)'}}>2016-10-22 12:00:00</div>
                    </div>
                    <div className="regulation_main">
                        <div><Link to='/regulation/article'><h4 style={{fontWeight:'550'}}>关于做好涉及占掘路审批的低压电力接入工程优化营商环境有关工作的通知</h4></Link></div>
                        <div ><h5>全面深入学习贯彻党的十九大精神，以习近平新时代中国特色社会主义思想为指导，坚持以人民为中心，充分发挥市场在资源配置中的决定性作用和更好发挥政府作用，准确把握生活性服务业的商业性和公益性双重属性，着力推进生活性服务业“规范智能化”(以下简称“六化”)发展，满足人民……</h5></div>
                        <div style={{color:'rgba(0,0,0,0.3)'}}>2016-10-22 12:00:00</div>
                    </div>
                    <div className="regulation_main">
                        <div><Link to='/regulation/article'><h4 style={{fontWeight:'550'}}>关于做好涉及占掘路审批的低压电力接入工程优化营商环境有关工作的通知</h4></Link></div>
                        <div ><h5>全面深入学习贯彻党的十九大精神，以习近平新时代中国特色社会主义思想为指导，坚持以人民为中心，充分发挥市场在资源配置中的决定性作用和更好发挥政府作用，准确把握生活性服务业的商业性和公益性双重属性，着力推进生活性服务业“规范智能化”(以下简称“六化”)发展，满足人民……</h5></div>
                        <div style={{color:'rgba(0,0,0,0.3)'}}>2016-10-22 12:00:00</div>
                    </div>
                    <div className="regulation_main">
                        <div><Link to='/regulation/article'><h4 style={{fontWeight:'550'}}>关于做好涉及占掘路审批的低压电力接入工程优化营商环境有关工作的通知</h4></Link></div>
                        <div ><h5>全面深入学习贯彻党的十九大精神，以习近平新时代中国特色社会主义思想为指导，坚持以人民为中心，充分发挥市场在资源配置中的决定性作用和更好发挥政府作用，准确把握生活性服务业的商业性和公益性双重属性，着力推进生活性服务业“规范智能化”(以下简称“六化”)发展，满足人民……</h5></div>
                        <div style={{color:'rgba(0,0,0,0.3)'}}>2016-10-22 12:00:00</div>
                    </div>
                    <div className="regulation_main">
                        <div><Link to='/regulation/article'><h4 style={{fontWeight:'550'}}>关于做好涉及占掘路审批的低压电力接入工程优化营商环境有关工作的通知</h4></Link></div>
                        <div ><h5>全面深入学习贯彻党的十九大精神，以习近平新时代中国特色社会主义思想为指导，坚持以人民为中心，充分发挥市场在资源配置中的决定性作用和更好发挥政府作用，准确把握生活性服务业的商业性和公益性双重属性，着力推进生活性服务业“规范智能化”(以下简称“六化”)发展，满足人民……</h5></div>
                        <div style={{color:'rgba(0,0,0,0.3)'}}>2016-10-22 12:00:00</div>
                    </div>
                    <div style={{ height:'50px'}}> <LocaleProvider locale={zh_CN}><Pagination  total={50} showSizeChanger showQuickJumper style={{float:'right',marginTop:'10px'}}/></LocaleProvider></div>
                </div>
            </div>
            </div>
        );
    }
}
export default Regulation;