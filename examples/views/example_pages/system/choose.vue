<template>
<div class="el-list-scope-bodypadding">
  <div style="text-align: center">
    <div class="content-border" style=" display: block">
      <el-card shadow="never" header="发布实训活动" body-style="padding: 22px 22px 3px 22px;">
        <el-row :gutter="15">
          <el-col :md="8">
            <el-form-item label="实训名称:" prop="title">
              <el-input
                  placeholder="请输入实训名称"
                  clearable/>
            </el-form-item>
          </el-col>
          <el-col :md="8">
            <el-form-item label="起止日期:" prop="datetime">
              <el-date-picker
                  type="daterange"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  class="ele-fluid"/>
            </el-form-item>
          </el-col>
          <el-col :md="8">
            <el-form-item label="实训地点:" prop="address">
              <el-select
                  placeholder="请选择地点"
                  class="ele-fluid"
                  clearable>
                <el-option label="地点一" :value="1"/>
                <el-option label="地点二" :value="2"/>
                <el-option label="地点三" :value="3"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="24">
            <el-form-item label="实训内容:" prop="content">
              <el-input
                  placeholder="请输入实训内容"
                  :rows="4"
                  type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    <el-card class="content-border" header="选择实训班级" style="margin-top:15px;">
      <div style="display:flex;justify-content: space-between;flex-wrap: wrap;">
        <div style="width:calc(50% - 10px)">
          <div class="content-header el-table-tool-default">
            <div class="" style="display:flex;justify-content: space-between;">
              <div style="line-height: 40px;">
                末选班级:
              </div>
              <div class="el-input--default" style="margin-left:10px;">
                <el-button @click="doAdd" style=" padding-left: 10px; padding-right: 10px;" plain>全部添加</el-button>
              </div>
            </div>
          </div>
          <div class="radius-border">
            <el-table :data="userDate" border highlight-current-row>
              <el-table-column label="操作" width="160" prop="userName" align="center" >
                <template #default="scope">
                  <el-button @click="onlineTestClick(scope.row)" plain>添加</el-button>
                </template>
              </el-table-column>
              <el-table-column label="班级名称" width="100" prop="userLoginName" />
              <el-table-column label="专业" width="100" prop="sex">软件工程</el-table-column>
              <el-table-column label="学院" prop="orgnaName" />
            </el-table>
            <div class="block" style="text-align: center;float:left;width:100%;margin-top: 12px;">
              <el-pagination :currentPage="currentPage" :page-size="pageSize"
                             :page-sizes="[15, 20, 25, 30]" :disabled="false" :background="false"
                             layout="total, sizes, prev, pager, next, jumper" :total="total"
                             @size-change="handleSizeChange" @current-change="handleCurrentChange"
                             small="true" />
            </div>
          </div>
        </div>
        <div style="width:calc(50% - 10px)">
          <div class="content-header el-table-tool-default">
            <div class="" style="display:flex;justify-content: space-between;">
              <div style="line-height: 40px;">
                已选班级:
              </div>
              <div class="el-input--default" style="margin-left:10px;">
                <el-button type="danger" @click="doAdd" style=" padding-left: 10px; padding-right: 10px;" plain>全部移除</el-button>
              </div>
            </div>
          </div>
          <div class="radius-border">
            <el-table :data="userDate" border highlight-current-row>
              <el-table-column label="操作" width="160" prop="userName" align="center" >
                <template #default="scope">
                  <el-button type="danger" @click="onlineTestClick(scope.row)" plain>移除</el-button>
                </template>
              </el-table-column>
              <el-table-column label="班级名称" width="100" prop="userLoginName" />
              <el-table-column label="专业" width="100" prop="sex">软件工程</el-table-column>
              <el-table-column label="学院" prop="orgnaName" />
            </el-table>
            <div class="block" style="text-align: center;float:left;width:100%;margin-top: 12px;">
              <el-pagination :currentPage="currentPage" :page-size="pageSize"
                             :page-sizes="[15, 20, 25, 30]" :disabled="false" :background="false"
                             layout="total, sizes, prev, pager, next, jumper" :total="total"
                             @size-change="handleSizeChange" @current-change="handleCurrentChange"
                             small="true" />
            </div>
          </div>
        </div>
      </div>
    </el-card>
    </div>
  </div>
</div>
</template>

<script>
import { vue } from '../../../assets/core/index';
export default {
  setup() {
    const userDate = vue.ref([
      {
        userLoginName: '软件1902',
        orgnaName: '计算机学院',
        sex:'软件工程',
      },
      {
        userLoginName: '软件1902',
        orgnaName: '计算机学院',
        sex:'软件工程',
      },{
        userLoginName: '软件1902',
        orgnaName: '计算机学院',
        sex:'软件工程',
      },
      {
        userLoginName: '软件1902',
        orgnaName: '计算机学院',
        sex:'软件工程',
      },{
        userLoginName: '软件1902',
        orgnaName: '计算机学院',
        sex:'软件工程',
      },
    ]);
    const formInline = vue.reactive({
      user: '',
      region: '',
    })
    const onSubmit = () => {
      console.log('submit!')
    }
    const user = vue.ref();
    const region = vue.ref();
    const value1 = vue.ref();
    const date2 = vue.ref();
    const desc = vue.ref();

    return {
      userDate,
      user,
      region,
      value1,
      date2,
      desc,
    }
  }
}

</script>

<style scoped>
.el-list-scope-bodypadding {
  margin: 15px;
}

:deep(.el-transfer__button) {
  border-radius: 4px
}

:deep(.el-table thead) {
  color: #303133 !important;
  font-weight: normal; /*background: #fafafa;*/
}

:deep(.el-table th.el-table__cell) { /*background: #fafafa !important;*/
  height: 44px;
  font-weight: normal;
  color: #303133;
}

:deep(.el-table-tool-default .el-tool .el-tool-item) {
  font-size: 16px;
  padding: 5px 6px;
  border-radius: 2px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  line-height: 1;
}

.sys-organization-list {
  height: calc(100vh - 264px);
  box-sizing: border-box;
  border-width: 1px;
  border-color: #ededed;
  border-style: solid;
  overflow: auto;
}

:deep(.el-tree-node__content) {
  height: 40px;
}

:deep(.el-table-tool-default) {
  margin-bottom: 0;
  padding: 5px 15px;
  box-sizing: border-box; /*background: #fafafa;*//*border-top: 1px solid #ededed;border-left: 1px solid #ededed;border-right: 1px solid #ededed;*/
}

.content-tit-shixun {
  display: block;
  padding-bottom: 15px;
  text-align: left;
  font-size: 16px;
}

:deep(.el-date-editor .el-range__icon) {
  float: none !important;
}

:deep(.el-card__header) {
  text-align: left
}
</style>