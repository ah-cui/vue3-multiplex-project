<template>
    <div class="wrapper cui-layout cui-theme  cui-style-theme-color-2">
        <cui-head></cui-head>
        <canvas class="constellation" width="1920" height="887"></canvas>
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
                    <el-button type="primary" @click="login">登录</el-button>
                </div>
                <div class="forgotPwd"> </div>
                <p style="font-size:12px;line-height:30px;color:#999;">
                  Tips : 用户名/密码:任意<br/>
                  登录页不具备换肤特性
                  </p>
            </el-form>
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
<style src="../../node_modules/element-plus/theme-chalk/index.css" scoped>
</style>
<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../static/img/loginbg.jpg);
  background-repeat: no-repeat;
  background-size:100% 100%;
}
.wrapper .ms-login {
  position: absolute;
  right: 10%; 
  top: 30%;
  width: 380px;
  height: 360px;
  margin: -50px 0 0 -200px;
  border-radius: 5px;
  background: #fff;
  opacity: 0.8;
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
</style>
