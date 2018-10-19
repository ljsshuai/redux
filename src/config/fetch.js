import  config from './index';
//var querString=require('querystring')
function fetchFn(url,req){
    return new Promise((resolve, reject) =>{
        var formData =[];
        for (var i in req){
            formData.push(i+'='+req[i])
        }
        formData=formData.sort().join('&');
        fetch(config.login.Apihost+url, {
            // headers: {
            //     // "Authorization": "Bearer "+ "+localStorage.getItem('lo('logintoken'),
            //      "Content-Type": "application/x-www-form-urlencoded",
            //     'Accept':'application/json',
            //  },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                // 'Accept':'application/json',
            },
            method:'POST',
            mode:"cors",
            body:formData,
            credentials: 'include' //   强制加入d凭据头
    }).then(res => {
        return res.json()
    }).then(resdata => {
        resolve(resdata)
    }).catch(err => {
        console.log(err);
        reject(err)
    });
})
}
module.exports=fetchFn;