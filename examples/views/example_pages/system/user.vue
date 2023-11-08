<template>
  <el-card class="el-list-scope-bodypadding">
    <div style="height: 100%">
      <el-form
          :model="where"
          label-width="77px"
          class="ele-form-search">
        <el-row :gutter="15">
          <el-col :lg="6" :md="12">
            <el-form-item label="用户账号:">
              <el-input
                  v-model="apiNameSearch"
                  clearable
                  placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12">
            <el-form-item label="用户名:">
              <el-input
                  v-model="apiNameSearch"
                  clearable
                  placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12">
            <el-form-item label="性别:">
              <el-select
                  clearable
                  v-model="groupNameSearch"
                  placeholder="请选择"
                  class="ele-fluid">
                <el-option label="男" value="1"/>
                <el-option label="女" value="2"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12">
            <div class="ele-form-actions">
              <el-button
                  type="primary"
                  class="ele-btn-icon"
                  @click="reload">
                <el-icon style="vertical-align: middle;">
                  <Search/>
                </el-icon>
                查询
              </el-button>
              <el-button @click="reset">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div class="content-border">
        <div class="el-table-tool el-table-tool-default" style="margin-top:0px;">
          <div class="el-table-tool-title el-cell">
            <el-button type="primary" @click="doAdd" size="default">
              <el-icon style="vertical-align: middle;">
                <plus/>
              </el-icon>
              <span style="vertical-align: middle;"> 新建 </span>
            </el-button>
            <el-button type="danger" @click="doAdd" size="default">
              <el-icon style="vertical-align: middle;">
                <Delete/>
              </el-icon>
              <span style="vertical-align: middle;"> 删除 </span>
            </el-button>
            <el-button @click="doAdd" size="default">
              <el-icon style="vertical-align: middle;">
                <Upload/>
              </el-icon>
              <span style="vertical-align: middle;"> 导入 </span>
            </el-button>
          </div>
        </div>
        <div class="radius-border" style="height: 100%">
          <el-table :data="issuedList" border highlight-current-row :style="{width:'100%',height: cardHeight,overflow:'auto',display: 'flex'}" style="width:100%;">
            <el-table-column type="index" width="50" align="center"/>
            <el-table-column prop="apiName" label="API名称">
              <template #default="scope">
                <el-link @click="doDetail(scope.row)" type="text" class="font14">{{
                    scope.row.apiName
                  }}
                </el-link>
              </template>
            </el-table-column>
            <el-table-column prop="groupName" label="分组名称"/>
            <el-table-column prop="apiComment" label="描述"/>
            <el-table-column prop="createrName" label="创建用户" width="120"/>
            <el-table-column prop="apiEnabled" label="上/下线" width="120">
              <template #default="scope">
                      <span v-if="scope.row.apiEnabled=='0'">
                        <el-switch v-model="scope.row.online"/>
                      </span>
                <span v-else>
                        <el-tag type="success" size="mini" effect="dark">已上线</el-tag>
                      </span>
              </template>
            </el-table-column>
            <el-table-column prop="fromSource" label="来源" width="120">
              <template #default="scope">
                <el-tag v-show="scope.row.fromSource === 'personal'" size="mini" effect="dark">
                  自建
                </el-tag>
                <el-tag v-show="scope.row.fromSource === 'third'" size="mini" type="success" effect="dark">
                  分配
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="issued" label="是否发布" width="120">
              <template #default="scope">
                       <span v-if="scope.row.fromSource=='personal' && scope.row.apiPublic=='1'">
                           <el-tag type="success" size="mini" effect="dark">已发布</el-tag>
                       </span>
                <span v-if="scope.row.fromSource=='personal' && scope.row.apiPublic=='0'">
                           <el-tag size="mini" effect="dark">未发布</el-tag>
                      </span>
              </template>
            </el-table-column>
            <el-table-column prop="toolkit" label="操作" width="220">
              <template #default="scope">
                <el-link type="text" @click="onlineTestClick(scope.row)" size="small" icon="el-icon-search">
                  <el-icon><EditPen /></el-icon> 修改
                </el-link>
                <el-link style="margin-left:12px;" type="text" @click="editClick(scope.row)" size="small"><el-icon><Key /></el-icon>重置密码</el-link>
                <el-link style="margin-left:12px;" @click="deleteClick(scope.row)" size="small" type="danger"><el-icon><Delete /></el-icon>删除</el-link>
              </template>
            </el-table-column>
          </el-table>
          <div class="block" style="text-align: center;float:left;width:100%;margin-top: 5px;">
            <el-pagination :currentPage="currentPage" :page-size="pageSize"
                           :page-sizes="[100, 200, 300, 400]" :disabled="false" :background="false"
                           layout="total, sizes, prev, pager, next, jumper" :total="400"
                           @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           small="true"/>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 100%;width: 100%;margin-right: 20px;">
      <api-registration-edit @onCancelEdit="cancelEdit" load-options="loadList"
                             :api-info="form"></api-registration-edit>
    </div>
    <el-dialog
        v-model="onlineTestDialog"
        :title="onlineTestTitle"
        modal-append-to-body
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        width="80%">
      <online-test-dialog
          @closeOnlinTestDialog="closeOnlinTestDialog"
          :is-admin="isAdmin"
          :tenant-id="tenantId"
          :api-info="form"
      ></online-test-dialog>
    </el-dialog>
  </el-card>
</template>
<script>
import {vue} from '../../../assets/core/index';
import {inject} from "vue";
import {computed, getCurrentInstance} from "vue";
import {
  Search, Plus, Delete, Upload, EditPen, Key
} from '@element-plus/icons-vue'
import {
  ElMessageBox,
  ElMessage,
  ElLoading,
  FormInstance,
  FormRules
} from 'element-plus';
import {randomWord} from "../../../assets/core/comFun";

export default {
  components: {
    /*onlineTestDialog,
    apiRegistrationEdit,*/
    Search, Plus, Delete, Upload, EditPen, Key
  },

  setup() {
    /**
     * 超级管理员标识
     */
    const isAdmin = vue.ref(1);
    /**
     * 企业ID
     */
    const tenantId = vue.ref(1);

    const groupNameSearch = vue.ref("");
    const apiNameSearch = vue.ref("");
    const areaId = vue.ref(1);
    const showPage = vue.ref("list");
    const isEdit = vue.ref(true);

    const currentPage = vue.ref(1);
    const pageSize = vue.ref(15);
    const totalCount = vue.ref(0);
    const groupOptions = vue.reactive([{groupId: "1", groupName: "权限服务"}, {groupId: "1", groupName: "消息服务"}]);
    const loadList = vue.reactive([{loadCode: "1", loadName: "权限服务"}, {loadCode: "1", loadName: "消息服务"}]);
    const issuedList = vue.ref([]);
    const refresh = inject("reload");
    const id = vue.ref('');
    const activeName = vue.ref('base');
    let form = vue.reactive({});
    /**
     * 在线测试页面弹窗标识
     */
    //const onlineTestDialog = vue.ref(false);
    /**
     * 应用编辑页面弹窗标题
     */
    const onlineTestTitle = vue.ref('在线测试');
    const scrollerHeight = computed(() => {
      return (window.innerHeight - 213) + 'px';
    });
    const cardHeight = computed(() => {
      return (window.innerHeight - 223) + 'px';
    });
    const init = () => {
      getApiList();
    };

    /*  列表   start  */
    /**
     * 获取管理角色列表
     */
    const getApiList = () => {
      issuedList.value = [
        {
          apiId: "1",
          apiName: '查询组织机构',
          apiGroupCode: "1",
          groupName: "权限服务",
          apiType: "0",
          apiComment: "限组织机构树",
          apiEnabled: "0",
          tenantName: "租户1",
          apiCreateAccount: "1",
          createrName: "用户1",
          apiPublic: "0",
          fromSource: "personal",
          issuedTime: "2022-5-20 20:12:35",
          apiRequestHost: "pass",
          apiRequestProtocol: "0",
          apiRequestPath: "/api/data/getInfo",
          apiRequestCommunication: "0",
          apiRequestMethod: "1",
          apiAuthentication: "1",
          apiServiceProtocol: "0",
          apiServicePath: "/api/rest/test",
          apiServiceLoadEnabled: "1",
          apiRequestRetryNum: 3,
          apiRequestSendTime: 60,
          apiRequestRetryTime: 30,
          apiRequestConnTime: 20,
          returnExample: "{meta:{success:true,message:'ok',status:200},data:[{}]}",
          failResultExample: "{meta:{success:false,message:'error',status:200},data:[{}]}"
        }, {
          apiId: "2",
          apiName: '短信发送服务',
          apiGroupCode: "1",
          groupName: "消息服务",
          apiComment: "发送短信",
          apiEnabled: "0",
          tenantName: "租户1",
          apiCreateAccount: "1",
          createrName: "用户1",
          apiPublic: "1",
          fromSource: "personal",
          issuedTime: "2022-5-20 20:12:35",
          apiRequestMethod: "1",// 0:GET 1: POST 2: PUT 3: DELETE
          apiRequestProtocol: "0",//0： HTTP 1：HTTPS
          apiRequestPath: "/api/data/getInfo",
          apiAuthentication: "1",
          apiRequestHost: "pass",
          apiRequestCommunication: "0",
          apiServiceProtocol: "0",
          apiServicePath: "/api/rest/test",
          apiServiceLoadEnabled: "1",
          apiRequestRetryNum: 3,
          apiRequestSendTime: 60,
          apiRequestRetryTime: 30,
          apiRequestConnTime: 20,
          returnExample: "{meta:{success:true,message:'ok',status:200},data:[{}]}",
          failResultExample: "{meta:{success:false,message:'error',status:200},data:[{}]}"
        }, {
          apiId: "3",
          apiName: '查询菜单',
          apiGroupCode: "1",
          groupName: "权限服务",
          apiComment: "查询菜单树",
          apiEnabled: "0",
          apiVersion: "1.0",
          tenantName: "租户1",
          apiCreateAccount: "1",
          createrName: "用户1",
          apiPublic: "0",
          fromSource: "personal",
          issuedTime: "2022-5-20 20:12:35",
          apiRequestHost: "pass",
          apiRequestProtocol: "0",
          apiRequestPath: "/api/data/getInfo",
          apiRequestCommunication: "0",
          apiRequestMethod: "1",
          apiAuthentication: "1",
          apiServiceProtocol: "0",
          apiServicePath: "/api/rest/test",
          apiServiceLoadEnabled: "1",
          apiRequestRetryNum: 3,
          apiRequestSendTime: 60,
          apiRequestRetryTime: 30,
          apiRequestConnTime: 20,
          returnExample: "{meta:{success:true,message:'ok',status:200},data:[{}]}",
          failResultExample: "{meta:{success:false,message:'error',status:200},data:[{}]}"
        }, {
          apiId: "4",
          apiName: '查询角色列',
          apiGroupCode: "1",
          groupName: "权限服务",
          apiComment: "查询角色列表",
          apiEnabled: "1",
          tenantName: "租户1",
          apiCreateAccount: "admin",
          createrName: "用户1",
          apiPublic: "1",
          fromSource: "third",
          apiCreateCate: "2022-5-20 20:12:35",
          apiRequestHost: "pass",
          apiRequestProtocol: "0",
          apiRequestPath: "/api/data/getInfo",
          apiRequestCommunication: "0",
          apiRequestMethod: "1",
          apiAuthentication: "1",
          apiServiceProtocol: "0",
          apiServicePath: "/api/rest/test",
          apiServiceLoadEnabled: "1",
          apiRequestRetryNum: 3,
          apiRequestSendTime: 60,
          apiRequestRetryTime: 30,
          apiRequestConnTime: 20,
          returnExample: "{meta:{success:true,message:'ok',status:200},data:[{}]}",
          failResultExample: "{meta:{success:false,message:'error',status:200},data:[{}]}"
        },
      ];
      totalCount.value = issuedList.value.length;
    };
    const doAdd = () => {
      showPage.value = "edit";
      isEdit.value = true;
      id.value = "";
      form.tenantId = tenantId.value;
      form.areaId = areaId.value;
      form.apiId = "";
      form.apiName = "";
      form.apiComment = "";
      form.apiCode = randomWord(8, 8);
      form.apiEnabled = "0";
      form.apiPublic = "0";
    };

    const doDetail = (row) => {
      showPage.value = "edit";
      isEdit.value = false;
      // 初始化
      if (!!(row.apiId)) {
        id.value = row.apiId;
        setFormInfo(row);
      }
    };
    const editClick = (row) => {
      showPage.value = "edit";
      isEdit.value = true;
      // 初始化
      if (!!(row.apiId)) {
        id.value = row.apiId;
        setFormInfo(row);
      }
    };


    const setFormInfo = (row) => {
      form.apiId = row.apiId;
      form.apiCode = row.apiCode;
      form.apiName = row.apiName;
      form.apiRequestMethod = row.apiRequestMethod;
      form.apiRequestProtocol = row.apiRequestProtocol;
      form.apiRequestPath = row.apiRequestPath;
      form.apiAuthentication = row.apiAuthentication;
      form.apiRequestHost = row.apiRequestHost;

      form.headerParams = [{name: "id", value: "", disableEdit: true}, {name: "name", value: "", disableEdit: true}];
      form.queryParams = [{name: "code", value: "", disableEdit: true}, {name: "name", value: "", disableEdit: true}];
      form.bodyParams = [{name: "code", value: "", disableEdit: true}, {name: "name", value: "", disableEdit: true}];
      form.apiParams = [{
        paramId: "1",
        paramCode: "1",//参数编码，对应plugin和api编码
        paramType: "1",//参数类型  1：传参 2：常量 3：系统
        paramAttrReceiveType: "1",
        paramAttrName: "name",
        paramAttrReceiveType: "1",//入参类型 1：Header
        paramAttrType: "1",//参数类型 1：String 2：int 3：boolean
        paramAttrRequired: "0",//必填 0：否 1：是
        paramAttrDefault: "",
        paramAttrComponent: ""
      }, {
        paramId: "2",
        paramCode: "1",//参数编码，对应plugin和api编码
        paramType: "1",//参数类型  1：传参 2：常量 3：系统
        paramAttrReceiveType: "2",
        paramAttrName: "title",
        paramAttrReceiveType: "1",//入参类型 1：Header
        paramAttrType: "1",//参数类型 1：String 2：int 3：boolean
        paramAttrRequired: "0",//必填 0：否 1：是
        paramAttrDefault: "",
        paramAttrComponent: ""
      }];
      form.apiServiceParams = [{
        paramId: "1",
        paramCode: "1",//参数编码，对应plugin和api编码
        paramType: "2",//参数类型  1：传参 2：常量 3：系统
        paramAttrName: "name",
        paramAttrReceiveType: "1",//入参类型 1：Header
        paramAttrType: "1",//参数类型 1：String 2：int 3：boolean
        paramAttrRequired: "0",//必填 0：否 1：是
        paramAttrDefault: "",
        paramAttrComponent: "名称"
      }, {
        paramId: "2",
        paramCode: "1",//参数编码，对应plugin和api编码
        paramType: "2",//参数类型  1：传参 2：常量 3：系统
        paramAttrName: "title",
        paramAttrReceiveType: "1",//入参类型 1：Header
        paramAttrType: "1",//参数类型 1：String 2：int 3：boolean
        paramAttrRequired: "0",//必填 0：否 1：是
        paramAttrDefault: "",
        paramAttrComponent: "标题"
      }];
      form.serviceNodes = [{host: "https://code.visualstudio.com/", port: "80"}, {host: "localhost", port: "80"}];
      form.errorCodes = [{errorCode: "563", errorMsg: "空指针异常", errorDes: ""}];
      form.apiServiceLoad = [{loadCode: "cloud", loadName: "云开发"}, {loadCode: "dev", loadName: "研发管理"}];
    };

    const onlineTestClick = (row) => {
      // 初始化
      if (!!(row.apiId)) {
        //onlineTestDialog.value = true;
        onlineTestTitle.value = row.apiName;
        id.value = row.apiId;
        setFormInfo(row);
      }
    };
    const deleteClick = (row) => {
      ElMessageBox.confirm('你确定删除API[' + row.apiName + ']?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ElMessage.success({
          message: '删除成功!'
        });
      }).catch(() => {
        ElMessage.info({
          message: '已取消删除'
        });
      });
    };
    /*  列表   end  */
    /*  编辑   start  */
    const cancelEdit = () => {
      showPage.value = "list";
    };
    /*  编辑   end  */
    /*  在线测试   start  */
    /**
     * 关闭弹窗回调
     */
    const closeOnlinTestDialog = () => {
      //onlineTestDialog.value = false;
    };
    /*  在线测试   end  */
    /* tab 页签 处理 start */
    const handleClick = (tab, event) => {
      if (tab.props.name != 'base' && id.value.length < 1) {
        ElMessage({
          message: '请先保存基本信息！',
          type: 'warning'
        });
        activeName.value = "base";
      }
    }
    /* tab 页签 处理 end */
    vue.onMounted(() => {
      isAdmin.value = "0";
      tenantId.value = "a4a8a423336c4c2189b5252515206c7c";
      areaId.value = "3DC1292D8A5D46F9AF9967357AEAE2C7";
      init();
    });
    return {
      showPage,
      scrollerHeight,
      cardHeight,
      loadList,
      groupOptions,
      groupNameSearch,
      apiNameSearch,
      issuedList,
      currentPage,
      pageSize,
      totalCount,
      refresh,
      cancelEdit,
      //onlineTestDialog,
      onlineTestTitle,
      closeOnlinTestDialog,
      doAdd,
      onlineTestClick,
      doDetail,
      deleteClick,
      editClick,
      init,
      Search,
      Plus,
      Delete,
      Upload,
      EditPen,
      Key,
      id,
      form,
    };
  }
}
</script>
<style scoped>
.el-tab-pane > div[data-v-a33531a6] {
  height: 710px !important;
}

.customer-table td.el-table__cell {
  border-bottom: none;
}

.customer-table td.el-table__cell {
  border-bottom: none;
}
.el-list-scope-bodypadding{margin:15px;}
*>>> .el-table thead{color: #303133 !important; font-weight: normal;/*background: #fafafa;*/}

.el-table-tool-default{
  margin-bottom: 0;
  margin-top:10px;
  padding: 5px 15px;
  box-sizing: border-box;
  /*background: #fafafa;
  border-top: 1px solid #ededed;
  border-left: 1px solid #ededed;
  border-right: 1px solid #ededed;*/
}
*>>> .el-table th.el-table__cell{/*background: #fafafa !important;*/ height: 44px; font-weight: normal; color: #303133;}
*>>> .el-tag--mini {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
}
*>>> .el-table-tool .el-table-tool-title {
  flex: auto;
  margin-top: 5px;
  margin-bottom: 5px;}
</style>

