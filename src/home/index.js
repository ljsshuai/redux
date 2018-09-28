import React from 'react';
import './index.css';
class Home extends React.Component{
    render(){
        return(
            <div id='page-wrapper'>
                <div style={{background:'white',height:'250px'}}><h2>数据案例</h2>
               <div style={{width:'100%',background:'white',marginTop:'30px'}}>
                   <ul style={{width:'100%',background:'white'}}>
                       <li style={{float:"left",listStyle:"none",width:"20%",marginLeft:'30px'}}><div style={{height:"150px",border:'1px solid #000',textAlign:'center',lineHeight:'150px'}}>《xxx市》影视人才流动报告</div></li>
                       <li style={{float:"left",listStyle:"none",width:"20%",marginLeft:'30px'}}><div style={{height:"150px",border:'1px solid #000',textAlign:'center',lineHeight:'150px'}}>《xxx市》影视人才流动报告</div></li>
                       <li style={{float:"left",listStyle:"none",width:"20%",marginLeft:'30px'}}><div style={{height:"150px",border:'1px solid #000',textAlign:'center',lineHeight:'150px'}}>《xxx市》影视人才流动报告</div></li>
                       <li style={{float:"left",listStyle:"none",width:"20%",marginLeft:'30px'}}><div style={{height:"150px",border:'1px solid #000',textAlign:'center',lineHeight:'150px'}}>《xxx市》影视人才流动报告</div></li>
                   </ul>
               </div>
               </div>
            </div>
        );
    }
}
export default Home;