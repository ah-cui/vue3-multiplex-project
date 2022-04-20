
/**
 * 
 *   2022/03/01
 *   vuex 使用示例，更多资料请翻阅：https://vuex.vuejs.org/zh/index.html  
 * 
 */



export default
{
  strict: process.env.NODE_ENV !== 'production',
  /**
     * getters访问：getters['APP/isAdmin']
     * actions访问：dispatch('APP/login')
     * mutations访问：commit('APP/login')
     */
  namespaced: true,
  state: {
    /**
       * 是否数据/页面加载中
       */
    name: "这是一个示例存储项",
  },
  actions: {
    

  },
  mutations: {
    

  },
  getters:{}

}
