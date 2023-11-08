

/**
 * 系统层拦截器，处于拦截器最外层，其特点是：会最后收到请求拦截，最早收到收到应答拦截
 */
const axiosInterceptorFirst={
    request:function(config)
    {
        return config;
    },
    requestError:function(error)
    {
        throw error;
    },
    response:function(response)
    {
        return response;
    },
    responseError:function(error)
    {
        throw error;
    },
}

/**
 * 应用层拦截器，处于拦截器最内层，其特点是：会最早收到请求拦截，最后收到应答拦截
 */
const axiosInterceptorLast={
    request:function(config)
    {
        return config;
    },
    requestError:function(error)
    {
        throw error;
    },
    response:function(response)
    {
        return response;
    },
    responseError:function(error)
    {
        throw error;
    },
}

export {axiosInterceptorFirst,axiosInterceptorLast};

