<template>
  <el-card class="el-list-scope-bodypadding" style="height: calc(100vh - 150px);">
    <el-container style="">
      <el-main style="padding: 3px;">
        <div style="display: flex;">
          <div class="content-aside">
            <div class="el-table-tool-default">
              <el-button type="primary" :icon="Plus" style="margin-bottom: 8px; margin-top:5px; padding-left: 10px; padding-right: 10px;">添加</el-button>
              <el-button type="warning" :icon="EditPen" style="margin-bottom: 8px; margin-top:5px; padding-left: 10px; padding-right: 10px; margin-left:6px">修改</el-button>
              <el-button type="danger" :icon="Delete" style="margin-bottom: 8px; margin-top:5px; padding-left: 10px; padding-right: 10px; margin-left:6px">删除</el-button>
            </div>
            <div class="sys-organization-list org-tree-group" style="height: 100%;">
              <el-scrollbar height="100%">
                <el-tree :data="entOrgOptions" :props="defaultProps" :default-expand-all="true"
                         :node-key="index" @node-click="entOrgSearch" highlight-current/>
              </el-scrollbar>
            </div>
          </div>
          <div class="content-border" style="width: 77%;margin-left: 10px; display: block">
            <div class="content-header el-table-tool-default">
              <div class="" style="display:flex">
                <div class="el-tool el-space">
                  <el-input v-model="areaNameSearch" clearable style="width: 200px;height: 30px;" placeholder="用户账号"></el-input>
                  <el-input v-model="areaNameSearch01" clearable style="width: 200px;height: 30px;padding-left: 15px;" placeholder="用户名称"></el-input>
                </div>
                <div class="el-input--default" style="margin-left:10px;">
                  <el-button type="primary" @click="doAdd" :icon="Search" style="margin-bottom: 5px; padding-left: 10px; padding-right: 10px;">查询</el-button>
                  <el-button type="primary" @click="doAdd" :icon="Plus" style="margin-bottom: 5px; padding-left: 10px; padding-right: 10px;">添加</el-button>
                </div>
                <div class="el-tool el-space" style="margin:5px 0px 0px 0px; float: right">
                  <div class="el-tool-item el-action" style="width:30px; height: 30px; margin-left:15px;">
                      <i class="el-tooltip el-icon-refresh-right"> <el-icon><RefreshRight /></el-icon></i>
                  </div>
                  <div class="el-tool-item el-action" style="width:30px; height: 30px; margin-left:10px">
                    <i class="el-tooltip el-icon-refresh-right"> <el-icon><Operation /></el-icon></i>
                  </div>
                  <div class="el-tool-item el-action" style="width:30px; height: 30px; margin-left:10px">
                    <i class="el-tooltip el-icon-refresh-right"> <el-icon><Setting /></el-icon></i>
                  </div>
                  <div class="el-tool-item el-action" style="width:30px; height: 30px; margin-left:10px">
                    <i class="el-tooltip el-icon-refresh-right"> <el-icon><FullScreen /></el-icon></i>
                  </div>
                </div>
                <div style="clear:both;"></div>
              </div>
            </div>
            <el-main class="content-border">
              <div class="radius-border">
                <el-table :data="userDate" border highlight-current-row style="width: 100%;">
                  <el-table-column type="index" align="center"></el-table-column>
                  <el-table-column label="姓名" width="100" prop="userName" />
                  <el-table-column label="账号" width="110" prop="userLoginName" />
                  <el-table-column label="性别" width="110" prop="sex">女</el-table-column>
                  <el-table-column label="组织机构" width="100" prop="orgnaName" />
                  <el-table-column label="邮箱" prop="userEmail" />
                  <el-table-column prop="toolkit" label="操作" width="200" align="center">
                    <template #default="scope">
                      <el-link type="text" @click="onlineTestClick(scope.row)" size="small">
                        <el-icon><EditPen /></el-icon> 修改
                      </el-link>
                      <el-link style="margin-left:12px;" @click="deleteClick(scope.row)" size="small" type="danger"><el-icon><Delete /></el-icon>删除</el-link>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="block" style="text-align: center;float:left;width:100%;margin-top: 12px;">
                  <el-pagination :currentPage="currentPage" :page-size="pageSize"
                                 :page-sizes="[15, 20, 25, 30]" :disabled="false" :background="false"
                                 layout="total, sizes, prev, pager, next, jumper" :total="total"
                                 @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                 small="true" />
                </div>
              </div>
            </el-main>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-card>
</template>
<script>
import {toRefs} from 'vue';
import {vue} from '../../../assets/core/index';
import {
  Search, Expand,
  Edit, Delete,EditPen,Plus,RefreshRight,Operation,Setting,FullScreen,
} from '@element-plus/icons-vue'
import {ElMessage, ElLoading, ElMessageBox} from 'element-plus';
import {getRootIds, list2Tree, randomWord} from "../../../assets/core/comFun";
export default {
  components: {Search, Expand, EditPen, Delete, Edit, Plus ,RefreshRight,Operation,Setting,FullScreen},
  setup() {
    const page = vue.reactive({
      currentPage: 1,
      pageSize: 20,
      total: 0,
    })
    const userDate = vue.ref([
      {
        userName: '汤姆',
        userLoginName: '12344',
        orgnaName: '组织机构',
        userEmail:'1367075108@qq.com',
        sex:'男',
      },
      {
        userName: '汤姆',
        userLoginName: '12344',
        orgnaName: '组织机构',
        userEmail:'1367075108@qq.com',
        sex:'男',
      },{
        userName: '汤姆',
        userLoginName: '12344',
        orgnaName: '组织机构',
        userEmail:'1367075108@qq.com',
        sex:'男',
      },
    ]);
    const rid = vue.ref();
    const entOrgOptions = vue.ref([
      {
        label: 'XXX公司',
        children: [
          {
            label: '研发部',
            children: [
              {
                label: '高教组',
              },
              {
                label: '政务组',
              },
            ],
          },
          {
            label: '测试部',
          },
          {
            label: '设计部',
          },
          {
            label: '市场部',
          },
          {
            label: '运维部',
          },
        ],
      },
    ]);
    const empTypeOptions = vue.ref([]);
    const positionTypeOptions = vue.ref([]);
    const areaNameSearch = vue.ref("");
    const areaNameSearch01 = vue.ref("");
    const dateSearch = vue.ref('');
    const addUserDialog = vue.ref(false);
    const editorUserDialog = vue.ref(false);
    const pwdResetDialog = vue.ref(false);
    const addUserTitle = vue.ref('新增用户');
    const editorUserTitle = vue.ref('修改用户');
    const pwdResetTitle = vue.ref('重置密码');
    const isAdmin = vue.ref(1);
    const tenantId = vue.ref(1);
    const editorUserDate = vue.ref({});
    const addUserDate = vue.ref({});
    const defaultProps = {
      children: 'children',
      label: 'label',
    };
    const shortcuts = [{
      text: 'Last week',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        return [start, end]
      },
    },
      {
        text: 'Last month',
        value: () => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          return [start, end]
        },
      },
      {
        text: 'Last 3 months',
        value: () => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          return [start, end]
        },
      },
    ];
    const getPositionType = () => {
      sysDicApi.getSysDic(tenantId.value, "POSITION_TYPE", function(res) {
        positionTypeOptions.value = res.data.map((item) => {
          return {
            label: item.typeValue,
            value: item.typeCode
          }
        });
        console.log(positionTypeOptions.value)
      })
    };
    const pwdReset = () => {
      pwdResetDialog.value = true;
    };
    vue.watch(areaNameSearch01, () => {
      page.value = {
        currentPage: 1,
        pageSize: 15,
        total: 0,
      };
      queryUserList();
    });
    vue.watch(areaNameSearch, () => {
      page.value = {
        currentPage: 1,
        pageSize: 15,
        total: 0,
      };
      queryUserList();
    });
    const closePwdDiaLog = () => {
      pwdResetDialog.value = false;
    };
    const entOrgSearch = (data) => {
      console.log(data.orgnaId)
      rid.value = data.orgnaId
      console.log("tree" + entOrgOptions.value)
      page.value = {
        currentPage: 1,
        pageSize: 15,
        total: 0,
      };
      queryUserList(rid.value);
    }
    const doAdd = () => {
      addUserDialog.value = true;
      addUserTitle.value = "修改用户信息";
      addUserDate.value = {
        accountNo: "",
        userName: "",
        orgnaId: null,
        empOrgnaIdList: null,
        tenantId: tenantId.value,
        mobile: "",
        userEmail: "",
        empType: "1",
        positionType: '1',
        userId: null,
        idCard: "",
        desc: "",
        userLoginName:"",
      };
    };
    const deleteAreaClick = (row) => {
      userDate.value = [{
      	userName: 'zerostyle',
      	userCode: 'zerostyle',
      	userSex: '男',
      	userType: '研发中心',
      	userEmail: 'zerostyle@ahcui.com',
      }]
      console.log('delClick', index, param);
      userDate.value.splice(index, 1);
      ElMessage({
      	message: '删除应用' + row.userName,
      	type: 'success',
      })
      entUserApi.isTenantManagerUser(tenantId.value, row.userId, function(res) {
        if (res.meta && res.meta.success) {
          if (res.data && res.data.flag) {
            ElMessage({
              type: 'warning',
              message: '该用户是企业管理员不能删除'
            })
          } else {
            delUser(row);
          }
        }
      });
    };

    const handleClick = (row) => {
      console.log("row" + JSON.stringify(row));
      editorUserDialog.value = true;
      editorUserTitle.value = "修改用户信息";
      editorUserDate.value = {
        userId: row.userId,
        userLoginName: row.userLoginName,
        userName: row.userName,
        orgnaId: row.orgnaId,
        porgnaId: row.orgnaId,
        empOrgnaIdList: row.empOrgnaIdList,
        mobile: row.userMobile,
        userCode: row.userCode,
        userEmail: row.userEmail,
        tenantId: row.tenantId,
        orgnaName: row.orgnaName,
        positionType: row.positionType,
        idCard: row.userCard,
        desc: row.userDesc,
      }
    };
    return {
      ...toRefs(page),
      userDate,
      entOrgSearch,
      doAdd,
      deleteAreaClick,
      handleClick,
      areaNameSearch,
      dateSearch,
      areaNameSearch01,
      shortcuts,
      addUserDialog,
      editorUserDialog,
      Search,
      Delete,
      Edit,
      EditPen,
      Plus,
      RefreshRight,
      Operation,
      Setting,
      FullScreen,
      addUserTitle,
      editorUserTitle,
      pwdReset,
      pwdResetDialog,
      pwdResetTitle,
      /*pwdForm,
      confrimPwdForm,*/
      closePwdDiaLog,
      /*handleSizeChange,
      handleCurrentChange,
      closeAddAndEditForm,
      saveCallBack,*/
      entOrgOptions,
      empTypeOptions,
      positionTypeOptions,
      defaultProps,
      tenantId,
      editorUserDate,
      addUserDate
    };
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.content {
  padding: 3px;
  height: 100%;
  overflow: hidden;
}

.content-aside {
  width: 23%;
  height: 95%;
}

.aside-btn01 {
  color: black;
}

.aside-btn01:hover,
.aside-btn01:focus {
  color: var(--element-ui-color-main);
}

.vs-workbench-card-scoped {
  height: 100% !important;
}

.el-select .el-input .el-select__caret {
  color: var(--el-select-input-color) !important;
}

.vs-workbench-card-scoped :deep(.el-card__body) {
  height: 98% !important;
}

.el-table-tool-default {
  margin-bottom: 0;
  padding: 5px 15px;
  box-sizing: border-box; /*background: #fafafa;border-top: 1px solid #ededed;border-left: 1px solid #ededed;border-right: 1px solid #ededed;*/
}

.el-list-scope-bodypadding {
  margin: 15px;
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

:deep(.el-input--default) {
  margin: 5px 0px;
}

:deep(.el-table-tool-default .el-tool .el-tool-item ) {
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
  border-width: 1px; /*border-color:#ededed;*/
  border-style: solid;
  overflow: auto;
}

:deep(.el-tree-node__content) {
  height: 40px;
}

.org-tree-group {
  border: 1px solid hsla(0, 0%, 60%, .15);
  height: calc(100vh - 262px);
  box-sizing: border-box;
  overflow: auto;
}

.org-tree-group :deep( .el-tree-node__content) {
  height: 40px;
}

.org-tree-group :deep( .el-tree-node__content > .el-tree-node__expand-icon) {
  margin-left: 10px;
}
</style>