import React from 'react';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
import "antd/dist/antd.css";
import Layout from '../../component/layout/index'
import echarts from 'echarts/lib/echarts';
import '../../../js/china'
import '../../../js/anhui'
class MovieLibrary extends React.Component {
    constructor(props) {
        super(props);
    }

    mapTooltipClick(name) {
        alert(name)
    }
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('china-map'));
        var option = {
   /*         title : {
                text: '订单量',
                subtext: '纯属虚构',
                x:'center'
            },*/
            tooltip : {//提示框组件。
                trigger: 'item'//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            },
  /*          legend: {
                orient: 'horizontal',//图例的排列方向
                x:'left',//图例的位置
                data:['订单量']
            },*/

            visualMap: {//颜色的设置  dataRange
                x: 'left',
                y: 'center',
                splitList: [
                    {start: 1500, label: '10 到 200（自定义label）',color: '#CC9933'},
                    {start: 900, end: 1500, label: '10 到 200（自定义label）',color: '#CC6633'},
                    {start: 310, end: 1000,label: '10 到 200（自定义label）',color: '#FFC0CB'},
                    {start: 200, end: 300,label: '10 到 200（自定义label）',color: '#CC6633'},
                    {start: 10, end: 200, label: '10 到 200（自定义label）',color: '#CC9933'},
                    {start: 5, end: 5, label: '5（自定义特殊颜色）', color: '#CC0033'},
                    {end: 10}
                ],
//            min: 0,
//            max: 2500,
//            calculable : true,//颜色呈条状
                text:['高','低'],// 文本，默认为数值文本
                color: ['#CC0033', '#CC6633','#CC0033']
            },
            toolbox: {//工具栏
                show: true,
                orient : 'vertical',//工具栏 icon 的布局朝向
                x: 'right',
                y: 'center',
                feature : {//各工具配置项。
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
                    restore : {show: true},//配置项还原。
                    saveAsImage : {show: true}//保存为图片。
                }
            },
            roamController: {//控制地图的上下左右放大缩小 图上没有显示
                show: true,
                x: 'right',
                mapTypeControl: {
                    'china': true
                }
            },
            series : [
                {
                    name: '院线数',
                    type: 'map',
                    mapType: 'china',
                    roam: false,//是否开启鼠标缩放和平移漫游
                    itemStyle:{//地图区域的多边形 图形样式
                        normal:{//是图形在默认状态下的样式
                            label:{
                                show:false,//是否显示标签
                                textStyle: {
                                    color: "rgb(249, 249, 249)"
                                }
                            }
                        },
                        emphasis:{//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                            label:{show:true}
                        }
                    },
                    top:"3%",//组件距离容器的距离
                    data:[
                        {name: '北京',value: Math.round(Math.random()*2000)},
                        {name: '天津',value: Math.round(Math.random()*2000)},
                        {name: '上海',value: Math.round(Math.random()*2000)},
                        {name: '重庆',value: Math.round(Math.random()*2000)},
                        {name: '河北',value: 0},
                        {name: '河南',value: Math.round(Math.random()*2000)},
                        {name: '云南',value: 5},
                        {name: '辽宁',value: 305},
                        {name: '黑龙江',value: Math.round(Math.random()*2000)},
                        {name: '湖南',value: 200},
                        {name: '安徽',value: Math.round(Math.random()*2000)},
                        {name: '山东',value: Math.round(Math.random()*2000)},
                        {name: '新疆',value: Math.round(Math.random()*2000)},
                        {name: '江苏',value: Math.round(Math.random()*2000)},
                        {name: '浙江',value: Math.round(Math.random()*2000)},
                        {name: '江西',value: Math.round(Math.random()*2000)},
                        {name: '湖北',value: Math.round(Math.random()*2000)},
                        {name: '广西',value: Math.round(Math.random()*2000)},
                        {name: '甘肃',value: Math.round(Math.random()*2000)},
                        {name: '山西',value: Math.round(Math.random()*2000)},
                        {name: '内蒙古',value: Math.round(Math.random()*2000)},
                        {name: '陕西',value: Math.round(Math.random()*2000)},
                        {name: '吉林',value: Math.round(Math.random()*2000)},
                        {name: '福建',value: Math.round(Math.random()*2000)},
                        {name: '贵州',value: Math.round(Math.random()*2000)},
                        {name: '广东',value: Math.round(Math.random()*2000)},
                        {name: '青海',value: Math.round(Math.random()*2000)},
                        {name: '西藏',value: Math.round(Math.random()*2000)},
                        {name: '四川',value: Math.round(Math.random()*2000)},
                        {name: '宁夏',value: Math.round(Math.random()*2000)},
                        {name: '海南',value: Math.round(Math.random()*2000)},
                        {name: '台湾',value: Math.round(Math.random()*2000)},
                        {name: '香港',value: Math.round(Math.random()*2000)},
                        {name: '澳门',value: Math.round(Math.random()*2000)}
                    ]
                }
            ]
        };
        myChart.setOption(option);
        myChart.on('mouseover', function (params) {
            var dataIndex = params.dataIndex;
            console.log(params);
        });
        myChart.on('click', function (chinaParam) {
            if(chinaParam.name == '安徽'){
                var option = myChart.getOption();
                option.series[0].map = '安徽';
                myChart.setOption(option);
            }
        });
    }
    render(){
        return(
            <div>
                <Layout/>
                <div id='page-wrapper' >
                    <div style={{background:"white"}}>
                        <div id="china-map" style={{ width:'800px', height:'760px',margin:'auto'}}></div>{/*国家地图结束*/}
                        <div style={{padding:'20px'}}>
                            <div style={{border:'1px solid rgba(105,105,105,0.3)',width:'100%',height:'auto'}}>
                            <div style={{padding:'10px',lineHeight:'30px'}}>
                            <strong style={{fontSize:'20px'}}>全国院线数:15424545家</strong>
                            <div>数据更新截至2018-10-05</div>
                            <div style={{width:'100%',height:'450px'}}>
                                <ul style={{listStyle:'none',width:'100%',height:'auto'}}>
                                    <li style={{float:'left',width:'10%',borderBottom:'1px solid rgba(105,105,105,0.3)'}}>
                                        排名
                                    </li>
                                    <li style={{float:'left',width:'10%',borderBottom:'1px solid rgba(105,105,105,0.3)'}}>
                                        省份
                                    </li>
                                    <li style={{float:'left',width:'10%',borderBottom:'1px solid rgba(105,105,105,0.3)'}}>
                                        院线数量
                                    </li>
                                    <li style={{float:'left',width:'20%',borderBottom:'1px solid rgba(105,105,105,0.3)'}}>
                                        占比
                                    </li>
                                    <li style={{float:'left',width:'10%',borderBottom:'1px solid rgba(105,105,105,0.3)'}}>
                                        排名
                                    </li>
                                    <li style={{float:'left',width:'10%',borderBottom:'1px solid rgba(105,105,105,0.3)'}}>
                                        省份
                                    </li>
                                    <li style={{float:'left',width:'10%',borderBottom:'1px solid rgba(105,105,105,0.3)'}}>
                                        院线数量
                                    </li>
                                    <li style={{float:'left',width:'20%',borderBottom:'1px solid rgba(105,105,105,0.3)'}}>
                                        占比
                                    </li>
                                </ul>
                                <ul style={{listStyle:'none'}}>
                                    <li style={{float:'left',width:'10%'}}>
                                        1
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        北京市
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        25465
                                    </li>
                                    <li style={{float:'left',width:'20%',borderRight:'1px solid rgba(105,105,105,0.3)'}}>
                                        <meter value="0.33">33%</meter>
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        13
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        北京市
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        254565
                                    </li>
                                    <li style={{float:'left',width:'20%'}}>
                                        33%<meter value="0.33">33%</meter>
                                    </li>
                                </ul>
                                <ul style={{listStyle:'none'}}>
                                    <li style={{float:'left',width:'10%'}}>
                                        1
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        北京市
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        25465
                                    </li>
                                    <li style={{float:'left',width:'20%',borderRight:'1px solid rgba(105,105,105,0.3)'}}>
                                        <meter value="0.33">33%</meter>
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        13
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        北京市
                                    </li>
                                    <li style={{float:'left',width:'10%'}}>
                                        254565
                                    </li>
                                    <li style={{float:'left',width:'20%'}}>
                                        33%<meter value="0.33">33%</meter>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            </div>
                        </div>{/*国家地图表格*/}
                        <div id="provincial"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MovieLibrary;