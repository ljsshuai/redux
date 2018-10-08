import React from 'react';
import '../film_television_record/filmtelevisionrecord.css'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import Layout from '../../component/layout/index'
import { Pagination,LocaleProvider} from 'antd';
import "antd/dist/antd.css";
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
class FilmTelevisionRecord extends React.Component{
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
                    <div className="film_resoult">共查询到XXX条相关信息</div>
                    <div className="film_main">
                        <div className="film_title">
                            <ul>
                                <li style={{width:'10%',fontSize:'18px'}}><Link to='/filmtelevisionrecord/record'>告别二十岁</Link></li>
                                <li style={{width:'15%',}}><button style={{height:'30px'}} type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                记录影片</button></li>
                                <li style={{width:'70%',textAlign:'right'}}>影纪备字[2017]第285号</li>
                            </ul>
                        </div>
                    <div className="film_text">本片讲述了三位来自新疆石河子市的维吾尔族足球少年，在小学校园中勇敢追逐足球梦想的故事。正值十二岁的他们，在小学阶段的最后一个赛季，用失败、汗水与拼搏，书写了最难忘的成长故事。</div>
                    <div className="film_time"><ul><li style={{width:'20%'}}>备案结果:同意拍摄</li><li>时间:2018-5-1</li></ul></div>
                    <div className="film_address"><ul><li style={{width:'20%'}}>备案地区:北京市</li><li>备案公司：北京视纳华仁印象影视制作有限公司</li></ul></div>
                    </div>
                    <div className="film_main">
                        <div className="film_title">
                            <ul>
                                <li style={{width:'10%',fontSize:'18px'}}>告别二十岁</li>
                                <li style={{width:'15%',}}><button style={{height:'30px'}} type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                    记录影片</button></li>
                                <li style={{width:'70%',textAlign:'right'}}>影纪备字[2017]第285号</li>
                            </ul>
                        </div>
                        <div className="film_text">本片讲述了三位来自新疆石河子市的维吾尔族足球少年，在小学校园中勇敢追逐足球梦想的故事。正值十二岁的他们，在小学阶段的最后一个赛季，用失败、汗水与拼搏，书写了最难忘的成长故事。</div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>备案结果:同意拍摄</li><li>时间:2018-5-1</li></ul></div>
                        <div className="film_address"><ul><li style={{width:'20%'}}>备案地区:北京市</li><li>备案公司：北京视纳华仁印象影视制作有限公司</li></ul></div>
                    </div>
                    <div className="film_main">
                        <div className="film_title">
                            <ul>
                                <li style={{width:'10%',fontSize:'18px'}}>告别二十岁</li>
                                <li style={{width:'15%',}}><button style={{height:'30px'}} type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                    记录影片</button></li>
                                <li style={{width:'70%',textAlign:'right'}}>影纪备字[2017]第285号</li>
                            </ul>
                        </div>
                        <div className="film_text">本片讲述了三位来自新疆石河子市的维吾尔族足球少年，在小学校园中勇敢追逐足球梦想的故事。正值十二岁的他们，在小学阶段的最后一个赛季，用失败、汗水与拼搏，书写了最难忘的成长故事。</div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>备案结果:同意拍摄</li><li>时间:2018-5-1</li></ul></div>
                        <div className="film_address"><ul><li style={{width:'20%'}}>备案地区:北京市</li><li>备案公司：北京视纳华仁印象影视制作有限公司</li></ul></div>
                    </div>
                    <div className="film_main">
                        <div className="film_title">
                            <ul>
                                <li style={{width:'10%',fontSize:'18px'}}>告别二十岁</li>
                                <li style={{width:'15%',}}><button style={{height:'30px'}} type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                    记录影片</button></li>
                                <li style={{width:'70%',textAlign:'right'}}>影纪备字[2017]第285号</li>
                            </ul>
                        </div>
                        <div className="film_text">本片讲述了三位来自新疆石河子市的维吾尔族足球少年，在小学校园中勇敢追逐足球梦想的故事。正值十二岁的他们，在小学阶段的最后一个赛季，用失败、汗水与拼搏，书写了最难忘的成长故事。</div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>备案结果:同意拍摄</li><li>时间:2018-5-1</li></ul></div>
                        <div className="film_address"><ul><li style={{width:'20%'}}>备案地区:北京市</li><li>备案公司：北京视纳华仁印象影视制作有限公司</li></ul></div>
                    </div>
                    <div className="film_main">
                        <div className="film_title">
                            <ul>
                                <li style={{width:'10%',fontSize:'18px'}}>告别二十岁</li>
                                <li style={{width:'15%',}}><button style={{height:'30px'}} type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                    记录影片</button></li>
                                <li style={{width:'70%',textAlign:'right'}}>影纪备字[2017]第285号</li>
                            </ul>
                        </div>
                        <div className="film_text">本片讲述了三位来自新疆石河子市的维吾尔族足球少年，在小学校园中勇敢追逐足球梦想的故事。正值十二岁的他们，在小学阶段的最后一个赛季，用失败、汗水与拼搏，书写了最难忘的成长故事。</div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>备案结果:同意拍摄</li><li>时间:2018-5-1</li></ul></div>
                        <div className="film_address"><ul><li style={{width:'20%'}}>备案地区:北京市</li><li>备案公司：北京视纳华仁印象影视制作有限公司</li></ul></div>
                    </div>
                    <div className="film_main">
                        <div className="film_title">
                            <ul>
                                <li style={{width:'10%',fontSize:'18px'}}>告别二十岁</li>
                                <li style={{width:'15%',}}><button style={{height:'30px'}} type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                    记录影片</button></li>
                                <li style={{width:'70%',textAlign:'right'}}>影纪备字[2017]第285号</li>
                            </ul>
                        </div>
                        <div className="film_text">本片讲述了三位来自新疆石河子市的维吾尔族足球少年，在小学校园中勇敢追逐足球梦想的故事。正值十二岁的他们，在小学阶段的最后一个赛季，用失败、汗水与拼搏，书写了最难忘的成长故事。</div>
                        <div className="film_time"><ul><li style={{width:'20%'}}>备案结果:同意拍摄</li><li>时间:2018-5-1</li></ul></div>
                        <div className="film_address"><ul><li style={{width:'20%'}}>备案地区:北京市</li><li>备案公司：北京视纳华仁印象影视制作有限公司</li></ul></div>
                    </div>
                    <div style={{ height:'50px'}}> <LocaleProvider locale={zh_CN}><Pagination  total={50} showSizeChanger showQuickJumper style={{float:'right',marginTop:'10px'}}/></LocaleProvider></div>
                </div>
            </div>
            </div>
        );
    }
}
export default FilmTelevisionRecord;