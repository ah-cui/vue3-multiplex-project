import {axios} from "../core";

export default {
    /**
     * 根据文件地址读取文件内容
     * @param {String} url 服务器端文件地址
     * @param {Func(data)} succCallback 
     * @param {Func(err)} failedCallback 
     */
    getFileByFilepath(url,succCallback,failedCallback){
        axios.get(url).then(resp=>{
            if (resp && resp.data) 
            {
                if(succCallback)succCallback(resp.data);
            }
            else
            {
                throw new Error("返回数据出现问题:"+resp.data.meta.message)
            }
        }).catch(error=>{
                if(failedCallback)failedCallback(new Error( `getFileByFilepath调用出现问题<br/>${error.message}`));
        })
    }
}