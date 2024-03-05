<template>
  <div>
    <el-card class="el-list-scope-bodypadding">
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
          <el-table-column type="selection" width="50" align="center" />
          <el-table-column type="index" width="50" align="center"/>
          <el-table-column prop="orgnaName" label="组织机构名称" width="180" />
          <el-table-column prop="orgnaCode" label="组织机构编号" width="200"/>
          <el-table-column prop="porgnaName" label="上级组织机构" width="200"/>
          <el-table-column prop="createTime" label="创建时间"/>
          <el-table-column prop="guige" label="载体规格" width="180"/>
        </el-table>
      </div>
    </el-card>
  </div>
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
  Sort
} from '@element-plus/icons-vue'
export default {
  components: {
    Delete,
    Edit,
    Share,
    Upload,
    Plus,
    Sort
  },
  setup() {
    const orgList = vue.ref([
      {
        orgnaId: '1',
        porgnaId: '0',
        orgnaName: '测试',
        orgnaCode: 'ysjgl',
        porgnaName: '',
        createTime: '2022-04-29 14:51:22',
        guige:'纸张'
      },
      {
        orgnaId: '11',
        porgnaId: '1',
        orgnaName: '测试01',
        orgnaCode: 'ysjgl',
        porgnaName: '测试',
        createTime: '2022-04-29 14:51:22',
        guige:'纸张'
      },{
        orgnaId: '12',
        porgnaId: '1',
        orgnaName: '测试02',
        orgnaCode: 'ysjgl',
        porgnaName: '测试',
        createTime: '2022-04-29 14:51:22',
        guige:'纸张'
      },
      {
        orgnaId: '13',
        porgnaId: '1',
        orgnaName: '测试03',
        orgnaCode: 'ysjgl',
        porgnaName: '测试',
        createTime: '2022-04-29 14:51:22',
        guige:'纸张'
      },{
        orgnaId: '14',
        porgnaId: '1',
        orgnaName: '测试04',
        orgnaCode: 'ysjgl',
        porgnaName: '测试',
        createTime: '2022-04-29 14:51:22',
        guige:'纸张'
      },
      {
        orgnaId: '131',
        porgnaId: '13',
        orgnaName: '测试131',
        orgnaCode: 'ysjg',
        porgnaName: '测试03',
        createTime: '2022-04-29 14:51:22',
        guige:'纸张'
      }
    ]);
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

    return {
      orgList,
      init,
      Search,
    };
  }

}
</script>

<style scoped>
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