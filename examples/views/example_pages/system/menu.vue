<template>
  <el-card class="el-list-scope-bodypadding">
    <div style="height: calc(100% - 22px);">
      <div style="padding: 0px;">
        <!-- 提示信息 -->
        <div class="content-header">
          <div class="card-header">
            <div class="el-tool el-space">
              <el-form-item label="用户账号" style="padding:0px 7.5px; margin-bottom:15px;">
                <el-input v-model="apiNameSearch" clearable size="default"
                          style="width: 200px;" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="用户名" style="padding:0px 7.5px">
                <el-input v-model="apiNameSearch" clearable size="default"
                          style="width: 200px;" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="性别" style="padding:0px 7.5px">
                <el-select v-model="groupNameSearch" clearable class="m-2" placeholder="请选择" size="default">
                  <el-option
                      v-for="item in groupOptions"
                      :key="item.groupId"
                      :label="item.groupName"
                      :value="item.groupId"
                  />
                </el-select>
              </el-form-item>
              <el-button type="primary"><el-icon style="vertical-align: middle;">
                <Search/>
              </el-icon>查询</el-button>
              <el-button>重置</el-button>
            </div>
          </div>
        </div>
      </div>
      <div style="padding: 3px;">
        <div style="height: 100%">
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
            <div class="radius-border"  style="height: 100%">
              <el-table
                  ref="table"
                  :data="orgList"
                  border
                  row-key="orgnaId"
                  highlight-current-row
                  style="width:100%"
                  default-expand-all
                  :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
              >
                <el-table-column type="index" width="50" align="center"/>
                <el-table-column prop="orgnaName" label="组织机构名称" width="250" />
                <el-table-column prop="orgnaCode" label="组织机构编号" width="200"/>
                <el-table-column prop="porgnaName" label="上级组织机构"/>
                <el-table-column prop="createTime" label="创建时间" width="250"/>
                <el-table-column prop="toolkit" label="操作" width="200" align="center">
                  <template #default="scope">
                    <el-link type="primary" size="small"><el-icon><plus/> </el-icon>添加</el-link>
                    <el-link type="primary" style="margin-left:12px;" @click="deleteAreaClick(scope.row)" size="small">
                      <el-icon><Edit /></el-icon>修改
                    </el-link>
                    <el-link style="margin-left:12px;" @click="deleteAreaClick(scope.row)" size="small" type="danger"><el-icon><Delete /></el-icon>删除</el-link>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
import { vue } from '../../../assets/core/index';
import {Delete, Edit, Search, Share, Upload, Plus, Sort} from '@element-plus/icons-vue'
import {getRootIds, list2Tree} from "../../../assets/core/comFun";
import {ElMessage, ElLoading} from 'element-plus';
import MenuEdit from './menu-edit';
export default {
  components: {Delete, Edit, Share, Upload, Plus, Sort, MenuEdit},
  setup() {
    const currentPage = vue.ref(1);
    const pageSize = vue.ref(10);
    const orgList = vue.ref([]);
    const areaNameSearch = vue.ref("");
    const dateSearch = vue.ref('');
    const addAndEditDialog = vue.ref(false);
    const addOrEditTitle = vue.ref('新增组织机构');
    const shortcuts = [
      {
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
    const init = () => {
      var list = [{
        orgnaId: '1',
        porgnaId: '0',
        orgnaName: '测试',
        orgnaCode: 'ysjgl',
        porgnaName: '',
        createTime: '2022-04-29 14:51:22'
      },
        {
          orgnaId: '11',
          porgnaId: '1',
          orgnaName: '测试01',
          orgnaCode: 'ysjgl',
          porgnaName: '测试',
          createTime: '2022-04-29 14:51:22'
        },{
          orgnaId: '12',
          porgnaId: '1',
          orgnaName: '测试02',
          orgnaCode: 'ysjgl',
          porgnaName: '测试',
          createTime: '2022-04-29 14:51:22'
        },
        {
          orgnaId: '13',
          porgnaId: '1',
          orgnaName: '测试03',
          orgnaCode: 'ysjgl',
          porgnaName: '测试',
          createTime: '2022-04-29 14:51:22'
        },{
          orgnaId: '14',
          porgnaId: '1',
          orgnaName: '测试04',
          orgnaCode: 'ysjgl',
          porgnaName: '测试',
          createTime: '2022-04-29 14:51:22'
        },
        {
          orgnaId: '131',
          porgnaId: '13',
          orgnaName: '测试131',
          orgnaCode: 'ysjg',
          porgnaName: '测试03',
          createTime: '2022-04-29 14:51:22'
        }
      ]
      orgList.value = list2Tree(list, getRootIds(list, "orgnaId", "porgnaId"), "orgnaId", "porgnaId");
    }
    const doAdd = () => {
      addAndEditDialog.value = true;
    };
    const deleteAreaClick = (row) => {
      orgList.value= [{
        areaName: '元数据管理',
        areaCode: 'ysjgl',
        areaType: 'pc',
        adminUserName: '高远',
        isPublish: '1'
      }
      ]
      ElMessage({
        message: '删除应用'+row.date,
        type: 'success',
      })
    };
    vue.watch(areaNameSearch,(newV,old)=>{
      console.log(newV,old);
    });
    vue.watch(dateSearch,(newV,old)=>{
      console.log(newV,old);
    });
    vue.onMounted(() => {
      init();
    });
    return {
      orgList,
      currentPage,
      pageSize,
      doAdd,
      deleteAreaClick,
      init,
      areaNameSearch,
      dateSearch,
      shortcuts,
      Search,
      addAndEditDialog,
      addOrEditTitle
    };
  }
}
</script>
<style scoped>
.el-input--small .el-input__inner {
  height: 33px;
}

.el-range-editor--small.el-input__inner {
  height: 33px;
}

.el-table-tool-default {
  margin-bottom: 0;
  margin-top: 10px;
  padding: 5px 15px;
  box-sizing: border-box;
  /*  background: #fafafa;
    border-top: 1px solid #ededed;
    border-left: 1px solid #ededed;
    border-right: 1px solid #ededed;*/
}

.el-table th.el-table__cell { /*background: #fafafa !important;*/
  height: 44px;
  font-weight: normal;
  color: #303133;
}

:deep( .el-tag--mini) {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;

}

.el-list-scope-bodypadding {
  margin: 15px;
}

:deep( .el-table thead) {
  color: #303133 !important;
  font-weight: normal;
  background: #fafafa;
}

:deep( .el-table th.el-table__cell) { /*background: #fafafa !important; */
  height: 44px;
  font-weight: normal;
  color: #303133;
}
</style>


