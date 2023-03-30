
<template>
  
</template>

<script setup>

</script>


<style scoped>
.ele-body {
  padding-bottom: 0;
}

.el-card {
  margin-bottom: 15px;
}

/* 用户资料卡片 */
.user-info-card {
  padding-top: 8px;
  text-align: center;
}

.user-info-card .user-info-avatar-group {
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
}

.user-info-card .user-info-avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info-card .user-info-avatar-group > i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  font-size: 30px;
  display: none;
  z-index: 2;
}

.user-info-card .user-info-avatar-group:hover > i {
  display: block;
}

.user-info-card .user-info-avatar-group:hover:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
}

.user-info-card .user-info-name {
  font-size: 24px;
  margin-top: 20px;
}

.user-info-card .user-info-desc {
  margin-top: 8px;
}

/* 用户信息列表 */
.user-info-list {
  margin-top: 30px;
}

.user-info-list .user-info-item {
  margin-bottom: 10px;
  display: flex;
  align-items: baseline;
}

.user-info-item > i {
  margin-right: 10px;
  font-size: 16px;
}

.user-info-item > span {
  flex: 1;
  display: block;
}

/* 用户标签 */
.user-info-tags .el-tag {
  margin: 10px 10px 0 0;
}

/* 用户账号绑定列表 */
.user-account-list {
  margin-top: 10px;
}

.user-account-list .user-account-item {
  padding: 15px;
}

.user-account-list .user-account-item .ele-text-secondary {
  margin-top: 6px;
}

.user-account-list .user-account-item .user-account-icon {
  width: 42px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  color: #FFF;
  font-size: 26px;
  border-radius: 50%;
  background-color: #3492ED;
  box-sizing: border-box;
}

.user-account-list .user-account-item .user-account-icon.el-icon-_wechat {
  background-color: #4DAF29;
  font-size: 28px;
}

.user-account-list .user-account-item .user-account-icon.el-icon-_alipay {
  background-color: #1476FE;
  padding-left: 5px;
  font-size: 32px;
}

/* tab页签 */
.user-info-tabs ::v-deep .el-tabs__nav-wrap {
  padding-left: 20px;
}
</style>
