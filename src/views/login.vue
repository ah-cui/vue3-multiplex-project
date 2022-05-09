<template>
    <div class="wrapper cui-layout cui-theme  cui-style-theme-color-2">
        <video loop muted autoplay playsinline poster="/static/img/loginbg.jpg" class="background-video">
            <source src="/static/video/login_bgvideo.mp4" type="video/mp4">
        </video>
        <cui-head></cui-head>
        <div class="video-shadow">
            <canvas class="constellation" width="1920" height="887"></canvas>
        </div>
        
        <div class="ms-login">
            <div class="ms-title">{{runtimeCfg.app_project_name}}</div>
            <el-form label-width="0px" class="loginForm">
                <el-form-item prop="username">
                    <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="password" placeholder="请输入密码" clearable type="password"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <div class="lf">Tips : 用户名/密码任意</div>
                    <el-button class="rf" type="primary" @click="login">登录</el-button>
                    
                </div>
                <div class="forgotPwd"> </div>
               
            </el-form>
             <div class="source clearfix">
                <a href="https://github.com/ah-cui/vue3-multiplex-project" target="_blank" title="访问github上的此项目" >
                  <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                      <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
                 <a href="https://gitee.com/ahcui/vue3-multiplex-project" target="_blank" title="访问gitee上的此项目" >
                  <img src="https://assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico" alt="访问gitee上的此项目"/>
                </a>
                <a href="https://www.npmjs.com/package/@ahcui/vue3-multiplex" target="_blank" title="访问NPM上的相关内容">
                  <img src="https://static.npmjs.com/f1786e9b7cba9753ca7b9c40e8b98f67.png" alt="访问NPM上的相关内容"/>
                </a>
              </div>
        </div>
        <cui-bottom></cui-bottom>
    </div>
</template>



<script>
import cuiHead from '../components/common/loginHeader.vue'
import cuiBottom from '../components/common/loginBottom.vue'
import { vue,auth,runtimeCfg ,mixin} from '../assets/core/index'
import { ElMessage } from 'element-plus';
import Constellation from '../lib/constellation.js'

export default {
  components: {
    cuiHead,
    cuiBottom
  },
  setup(){
    const {
      cuiRouter,
    } = mixin();
    let username=vue.ref('admin'),password=vue.ref('123456');
    const initConstellation =function () {
      if (!document.querySelector('.constellation')) {
        return
      }
      const con = new Constellation(document.querySelector('.constellation'), {
        star: {
          color: 'rgba(255, 255, 255, .8)',
          width: 1.5,
          randomWidth: true
        },
        line: {
          color: 'rgba(255, 255, 255, .8)',
          width: 0.2
        },
        position: {
          x: 0, // This value will be overwritten at startup
          y: 0 // This value will be overwritten at startup
        },
        width: window.innerWidth,
        height: window.innerHeight,
        velocity: 0.3,
        length: 80,
        distance: (window.innerWidth < 1000) ? 40 : 100,
        radius: 250,
        stars: []
      })
      con.init()
    };
    const login = function() {
      console.log('this.username:' + username.value)
      if (username.value == '') {
        ElMessage({
          message: '请输入用户名！',
          type: 'error'
        })
        return
      }
      if (password.value == '') {
        ElMessage({
          message: '请输入密码',
          type: 'error'
        })
        return
      }
      auth.login(
        username.value,
        password.value).then(() => {
        cuiRouter.push('/')
      }).catch(error => {
        ElMessage({
          message: `登录过程出错，失败原因是：${error.message}`,
          dangerouslyUseHTMLString: true,
          type: 'error'
        })
      })
    };

    vue.onMounted(()=>{
      initConstellation()
    })

    return {
      runtimeCfg,
      username,
      password,
      initConstellation,
      login,
    } 
  },
}
</script>
<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.wrapper .ms-login {
  position: absolute;
  left: 50%; 
  top: 30%;
  width: 380px;
  height: 400px;
  margin: -50px 0 0 -200px;
  border-radius: 5px;
  background: #fff;
  opacity: 0.93;
}
.wrapper .ms-login .ms-title {
  width: 90%;
  position: relative;
  margin: 25px auto 30px auto;
  text-align: left;
  font-size: 20px;
  color: #000;
}
.wrapper .ms-login .loginForm {
  width: 90%;
  margin: 20px auto 20px auto;
}



.wrapper .ms-login .loginForm .forgotPwd {
  float: right;
}
.wrapper .constellation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
.wrapper .video-shadow{
  position: absolute;
  top: 0px;
  width: 100%;;
  height:100%;
  background: #000;
  opacity: 0.3;
}
.wrapper .background-video {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: -100;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.wrapper .ms-login .source
{
    display: block;
    position: relative;
    width: 100%;
    top: 130px;
    bottom: 10px;
    text-align: center;
}
.wrapper .ms-login .source img,svg{
    margin: 0px 10px;
    width:30px;
}
</style>
