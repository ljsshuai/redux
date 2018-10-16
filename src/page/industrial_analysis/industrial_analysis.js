import React from 'react';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
import "antd/dist/antd.css";
import Layout from '../../component/layout/index'
class IndustrialAnalysis extends React.Component{
    constructor(props)
    {
        super(props);
    }
     onChange(date, dateString) {
        console.log(date, dateString);
    }
    render(){
        return(
            <div>
                <Layout/>
                <div id='page-wrapper' >
                    <ul style={{listStyle:'none',margin:'0 auto'}}>
                        <li style={{float:'left',width:'31%',marginLeft:"20px"}}>
                            <div style={{background:'white',textAlign:'center',padding:'40px'}}>
                                选择时间:<DatePicker onChange={this.onChange.bind(this)} style={{marginLeft:'30px',width:'70%'}}/>
                               <DatePicker onChange={this.onChange.bind(this)} style={{marginLeft:'90px',marginTop:'20px',width:'70%'}}/>
                                <div style={{marginTop:'30px'}}>选择区域：</div>
                                <button style={{marginTop:'30px'}} type="button" className="btn btn-danger" style={{width:'100%'}} >
                                    横向对比分析
                                </button>
                            </div>
                        </li>
                        <li style={{float:'left',width:'31%',marginLeft:"20px"}}>
                            <div style={{background:'white',textAlign:'center',padding:'40px'}}>
                                选择时间:<DatePicker onChange={this.onChange.bind(this)} style={{marginLeft:'30px',width:'70%'}}/>
                                <DatePicker onChange={this.onChange.bind(this)} style={{marginLeft:'90px',marginTop:'20px',width:'70%'}}/>
                                <div style={{marginTop:'30px'}}>选择区域：</div>
                                <button style={{marginTop:'30px'}} type="button" className="btn btn-danger" style={{width:'100%'}} >
                                    横向对比分析
                                </button>
                            </div>
                        </li>
                        <li style={{float:'left',width:'31%',marginLeft:"20px"}}>
                            <div style={{background:'white',textAlign:'center',padding:'40px'}}>
                                选择时间:<DatePicker onChange={this.onChange.bind(this)} style={{marginLeft:'30px',width:'70%'}}/>
                                <DatePicker onChange={this.onChange.bind(this)} style={{marginLeft:'90px',marginTop:'20px',width:'70%'}}/>
                                <div style={{marginTop:'30px'}}>选择区域：</div>
                                <button style={{marginTop:'30px'}} type="button" className="btn btn-danger" style={{width:'100%'}} >
                                    横向对比分析
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default IndustrialAnalysis;