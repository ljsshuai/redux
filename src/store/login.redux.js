import fetchFn from '../config/fetch';
import {message} from "antd/lib/index";
var storage=window.localStorage;
const LOGIN='LOGIN';
const NAVTITLE='NAVTITLE';
var userObj={data:''};

export function auth(state=userObj,action){
    switch(action.type){
        case LOGIN:
           return Object.assign(...state,{data:action.userBase});/*assign合并两个对象的内容 ...state表示用于展开数组、对象*/
         case NAVTITLE:
             console.log(action);
             return Object.assign(...state,{title:action.title});
        default:
            return state;
    }
}

export function nav_title(title)
    {
    return dispatch=>{
        storage["title"]=title;
        dispatch({type:NAVTITLE,title:title});
    }
}


// action
export function login(obj) {
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            /*console.log(obj,4560456);*/
            fetchFn('login',obj).then(
                (res)=>{
                    dispatch({type:LOGIN,userBase:res.data});
                    /*storage["username"]=res.data.username;//将数据写入浏览器中*/
                    resolve(res);
                });
        })
    }
}
export function loginout() {
    return{type:LOGINOUT}
}