import React from 'react';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
import "antd/dist/antd.css";
import Layout from '../../component/layout/index'
class MovieLibrary extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div>
                <Layout/>
                <div id='page-wrapper' >
                    <div style={{background:"white"}}>
                        全国院线库内容
                    </div>
                </div>
            </div>
        );
    }
}
export default MovieLibrary;