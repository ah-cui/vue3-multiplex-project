import {axios} from "../ahcui";
import {axiosInterceptorFirst,axiosInterceptorLast} from "./axios.interceptor";

axios.defaults.timeout=20000;



/**
 * 
 * 
 * 如下图例展示了多个axios拦截器的工作机制
 * 
 *     
 *   
 * 
 *                ↗-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-↘
 *                ↑                                                                                                 |
 *     -----------|----------                                                                                       ↓
 *     -----------↑----------       先加入                                                                           |
 *     -----------|----------  axiosInterceptor0  request                                                           ↓
 *     -----------↑----------  axiosInterceptor1  request                                                           |
 *     -----------|----------  axiosInterceptor2  request                                                           ↓
 *     -----------↑----------       后加入                                                                           |
 *     -----------|----------                                                                                       ↓
 *                ↑                                                                                                 |
 *             AXIOS请求                                                                                            ↓
 *                ↑                                                                                                 |
 *     -----------|----------                                                                                       ↓
 *     -----------↑----------       后加入                                                                           |
 *     -----------|----------  axiosInterceptor2  response                                                          ↓   
 *     -----------↑----------  axiosInterceptor1  response                                                          |
 *     -----------|----------  axiosInterceptor0  response                                                          ↓
 *     -----------↑----------       先加入                                                                           |
 *     -----------|----------                                                                                       ↓
 *                ↑                                                                                                 |
 *                ↖-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-↙
 * 
 * 
 */



let requestIndexFirst=axios.interceptors.request.use(axiosInterceptorFirst.request,axiosInterceptorFirst.requestError);
let responseIndexFirst=axios.interceptors.response.use(axiosInterceptorFirst.response,axiosInterceptorFirst.responseError);
//console.log(`axios拦截器注册完毕，请求拦截器序号为：${requestIndexFirst}，应答拦截器序号为：${responseIndexFirst}`);





window.setTimeout(function(){
    let requestIndexLast=axios.interceptors.request.use(axiosInterceptorLast.request,axiosInterceptorLast.requestError);
    let responseIndexLast=axios.interceptors.response.use(axiosInterceptorLast.response,axiosInterceptorLast.responseError);
    //console.log(`axios拦截器注册完毕，请求拦截器序号为：${requestIndexLast}，应答拦截器序号为：${responseIndexLast}`);
},1);
 
export default axios;