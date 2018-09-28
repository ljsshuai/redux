import React from 'react';
import '../regulations/regulation.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
class FilmTelevisionRecord extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
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
                            <li>影视类型:</li>
                            <li>动画影片</li>
                            <li>记录影片</li>
                            <li>特种影片</li>
                            <li>科技影片</li>
                            <li>合作影片</li>
                        </ul>
                        <ul>
                            <li>发布时间:</li>
                            <li>2018</li>
                            <li>2017</li>
                            <li>2016</li>
                        </ul>
                        <ul>
                            <li>省份地区:</li>
                            <li>全部</li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>重庆</li>
                            <li>浙江</li>
                        </ul>
                    </div>
                    <div className="list_resoult">共查询到XXX条相关信息</div>
                    <div className="regulation_main">

                    </div>
                </div>
            </div>
        );
    }
}
export default FilmTelevisionRecord;