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
.header-box 
{
  position: relative;
    top: 0px;
    width: 100%;
}
.header-box .header
{
    position: relative;
  box-sizing: border-box;
  height: 50px;
}
.header-box .header .logo {
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-size: 90px 40px;
    background-clip: content-box;
    filter: invert(20%);
    margin-left: 20px;
    cursor: default;
    width: 110px;
    height: 50px;
}
.header-box .header .sysName
{
  color:#ccc;
  display: inline-block;
    line-height: 50px;
    cursor: default;
    font-size: 22px;
}
</style>
