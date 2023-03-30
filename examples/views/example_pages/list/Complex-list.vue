<template>
  <div class="el-body el-list-scope-bodypaddingb">
    <el-card shadow="never">
      <el-row class="el-scope-top-margin">
        <el-col :sm="8" align="center">
          <div class="top-text-item">
            <div class="top-text-title">进行中的任务</div>
            <div class="top-text-content">10 个任务</div>
          </div>
        </el-col>
        <el-col :sm="8" align="center">
          <div class="top-text-item">
            <div class="top-text-title">剩余任务</div>
            <div class="top-text-content">3 个任务</div>
          </div>
        </el-col>
        <el-col :sm="8" align="center">
          <div class="top-text-item">
            <div class="top-text-title">任务总耗时</div>
            <div class="top-text-content">120 个小时</div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="never">
      <!-- 头部工具栏 -->
      <div class="card-header">
        <span class="fl">复杂列表</span>
        <div class="ele-table-tool-right fr">
          <div class="fl">
            <el-radio-group>
              <el-radio-button size="default" label="全部">全部</el-radio-button>
              <el-radio-button size="default" label="进行中">进行中</el-radio-button>
              <el-radio-button size="default" label="已完成">已完成</el-radio-button>
            </el-radio-group>
          </div>
          <div class="list-searche fl">
            <el-input
                v-model="input3"
                placeholder="请输入…"
                size="default"
                class="input-with-select"
            >
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <el-button
          @click="showEdit=true"
          icon="el-icon-plus"
          class="ele-fluid"
          style="margin-bottom: 10px;">添加
      </el-button>
      <!-- 数据列表 -->
      <div>
        <div class="basic-list-item">
          <div class="el-cell" style="display:flex">
            <el-avatar shape="square" class="fl" :size="60" src=""/>
            <div class="el-cell-content fl">
              <div class="el-cell-title">ElementUI</div>
              <div class="el-cell-desc">Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</div>
            </div>
          </div>
          <div class="basic-list-item-owner fl">
            <div>发布人</div>
            <div class="el-text-secondary">SunSmile</div>
          </div>
          <div class="basic-list-item-time fl">
            <div>开始时间</div>
            <div class="el-text-secondary">2020-06-13 08:33</div>
          </div>
          <div class="basic-list-item-progress fl">
            <el-progress :percentage="50" />
          </div>
          <div class="basic-list-item-tool fl">
            <el-link class="list-item-link" :icon="Edit" type="primary">编辑</el-link>
            <el-link class="list-item-link" :icon="Delete" type="danger">删除</el-link>
            <el-link class="list-item-link" :icon="Share" type="success">分享</el-link>
          </div>
          <div class="clear"></div>
        </div>

      </div>
      <el-pagination
          class="mt-4"
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </el-card>

  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { Search , Edit , Delete , Share } from '@element-plus/icons-vue'
</script>
<style scoped>
.fl{float: left}
.fr{float:right}
.clear{clear:both}
.el-list-scope-bodypaddingb{
  padding:15px;
  border-radius: 4px;
}
.el-card+.el-card{
  margin-top:15px;
}
.list-searche{
  width:180px;
  margin-left: 10px;
}
.top-text-content{
  font-size: 24px;
}
.basic-list-item{
  display: flex;
}
.basic-list-item .basic-list-item-owner{
  width: 60px;
  padding: 8px 15px;}
.el-cell-desc {
  color: #909399;
  font-size: 13px;
  margin-top: 8px;
}

.el-cell-content {
  padding-left: 10px;
  padding-top:8px;
}
.basic-list-item .basic-list-item-time{
  width: 150px;
  padding: 8px 15px;
}
.el-text-secondary {
  color: #909399;
}
.basic-list-item .basic-list-item-progress{
  width: 280px;
  margin-top:23px;
}
.el-progress {
  position: relative;
  line-height: 1;
}
.el-progress-bar {
  padding-right: 50px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin-right: -55px;
  box-sizing: border-box;
}
.basic-list-item{
  margin-top:15px;
}
.basic-list-item .el-text-secondary{
  margin-top: 8px;
}
.basic-list-item-tool{
  margin-top:18px;
  margin-left:15px;
}
.basic-list-item-tool .list-item-link{margin:0px 5px;}
.mt-4{
  margin-top:15px;
}
</style>