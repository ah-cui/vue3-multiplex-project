<template>
  <el-card class="el-list-scope-bodypadding">
    <div style="height: calc(100% - 22px);">
      <div style="padding: 0px;">
      </div>
      <div style="padding: 3px;">
        <div style="height: 100%">
          <div class="content-border">
            <div class="el-table-tool el-table-tool-default" style="margin-top:0px; display: flex;justify-content: space-between;">
              <div class="el-table-tool-title el-cell" style="line-height: 40px;">
                树形表格
              </div>
              <div>
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
                    <el-link type="text" size="small"><el-icon><plus/> </el-icon>添加</el-link>
                    <el-link style="margin-left:12px;" type="text" @click="deleteAreaClick(scope.row)" size="small">
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
import {
  Delete,
  Edit,
  Search,
  Share,
  Upload,
  Plus,
  Sort,
  RefreshRight,
  Operation,
  Setting,
  FullScreen,
} from '@element-plus/icons-vue'
import {getRootIds, list2Tree} from "../../../assets/core/comFun";
import {
  ElMessage,
  ElLoading
} from 'element-plus';
export default {
  components: {
    Delete,
    Edit,
    Share,
    Upload,
    Plus,
    Sort,
    RefreshRight,
    Operation,
    Setting,
    FullScreen,
  },
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
      RefreshRight,
      Operation,
      Setting,
      FullScreen,
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


.el-table-tool-default{
  margin-bottom: 0;
  margin-top:10px;
  padding: 5px 15px;
  box-sizing: border-box;
 /* background: #fafafa;
  border-top: 1px solid #ededed;
  border-left: 1px solid #ededed;
  border-right: 1px solid #ededed;*/
}
.el-table th.el-table__cell{/*background: #fafafa !important;*/ height: 44px; font-weight: normal; color: #303133;}
*>>> .el-tag--mini {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
}
.el-list-scope-bodypadding{margin:15px;}
*>>> .el-table thead{color: #303133 !important; font-weight: normal;/*background: #fafafa;*/}
*>>> .el-table th.el-table__cell{/*background: #fafafa !important;*/ height: 44px; font-weight: normal; color: #303133;}
*>>> .el-table-tool-default .el-tool .el-tool-item{font-size: 16px;padding: 5px 6px;border-radius: 2px;border: 1px solid #e5e5e5;box-sizing: border-box;line-height: 1;}
</style>


