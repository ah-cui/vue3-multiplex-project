/*
 *  @author:zerostyle
 *  @email: zerostyle@126.com
 *  @date：20211228
 *  @version:V2.0.0
 *  @description: 自动注册对框架的界面切换事件进行默认处理
 *  此文件无需显式引入，
 *  export default{
 *      mixins:[mixin],
 * 
 * 
 * 
 */
import {eventDefine} from "../../ahcui/index.js";
import router from "../../router/index.js"
import auth from "../../auth/index.js"



(function(){

     /*********************************UI界面触发事件***************************************************************** */
     window.addEventListener("logout",(eventArgs)=>{
         auth.logout().then(()=>{
            router.push("/login");
         })
    })

})()

export default {}