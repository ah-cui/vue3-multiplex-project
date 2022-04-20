import {axios,runtimeCfg} from "../core"
import {convertDataToModuleTree} from "../../lib/comFun";
import auth from "../core/auth";

/**
 * 模拟一个假登录，使用apidata\auth\login的数据作为用户数据
 */
function login(userName,passWord){
    return new Promise((resolve,reject)=>{
        let url= `${runtimeCfg.webapi_base_path}apidata/auth/login?d=${new Date()}`;//此地址在build\dev\dev.proxy.js进行了代理，会地址重写
        axios.get(url)
        .then(resp=>{
            let data=resp.data.data;
            let user={};
            user.userName=data.userName;
            user.permission=data.resList;
            user.modules=convertDataToModuleTree(data.resList);
            auth.init(user);
            resolve(user);
        })
        .catch(error=>{
            reject(error)
        })
    })
}


export default{
    login
}