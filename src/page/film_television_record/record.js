import React from 'react';
import './record.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import Layout from '../../component/layout/index'
class Record extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <Layout/>
            <div id='page-wrapper' >
                <div className="record_list">
                    <div className="list_nav"><a href="/filmtelevisionrecord">影视备案信息</a>/<span>详情</span></div>
                    <div style={{textAlign:'center'}}>
                        <img src={require("../../image/u2111.png")}/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Record;