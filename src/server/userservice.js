class User
{//检查登陆接口的数据是否合法
    checkLoginInfo(loginInfo)
    {
        let username =$.trim(loginInfo.username),
            password =$.trim(loginInfo.password);
        //判断用户名为空
        if(typeof  username !=='string' || username.length===0){
            return{
                status:false,
                msg:'用户名不能为空'
            }
        }
        if(typeof  password !=='string' || password.length===0){
            return{
                status:false,
                msg:'密码不能为空'
            }
        }
        return{
            status:true,
            msg:"验证通过"
        }
    }
}
export default User;