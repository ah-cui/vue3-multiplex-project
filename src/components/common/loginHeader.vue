<template>
        <div class="header-box">
          <div class="header">
            <router-link class="lf logo" to="/Dashboard" tag='div' />
            <div class="lf sysName"></div>
            <div class="header-right rf">
            </div>

          </div>
        </div>
</template>

<script>


export default {
  setup () {
    return {
     
    }
  }
}
</script>

<style scoped>
.header-box .header
{
  border-bottom:0px;
}
.header-box .header .logo {
    /*background: url(../../../static/img/logo.png);*/
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-size: 90px 40px;
    background-clip: content-box;
    filter: invert(20%);
    margin-left: 20px;
}
.header-box .header .sysName
{
  color:#ccc;
}
</style>
