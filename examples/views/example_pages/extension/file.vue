<template>
  <el-card class="el-list-scope-bodypadding">
    <div style="height: calc(100% - 22px);">
      <div style="padding: 0px;">
        <!-- 提示信息 -->
        <div class="content-header">
          <!-- 工具栏 -->
          <div class="el-table-tool">
            <div class="el-table-tool-title">
              <el-upload
                  action=""
                  :show-file-list="false"
                  :before-upload="beforeUpload"
                  class="el-inline-block ele-action">
                <el-button
                    size="small"
                    type="primary"
                    class="el-btn-icon"
                    icon="el-icon-upload2">上传
                </el-button>
              </el-upload>
              <el-button
                  size="small"
                  class="el-btn-icon"
                  icon="el-icon-folder-add">新建文件夹
              </el-button>
              <template v-if="checked.length">
                <el-button
                    size="small"
                    icon="el-icon-view"
                    class="el-btn-icon hidden-xs-only"
                    @click="view(checked[0])">预览
                </el-button>
                <el-button
                    size="small"
                    type="danger"
                    icon="el-icon-delete"
                    class="el-btn-icon hidden-xs-only">删除
                </el-button>
              </template>
            </div>
            <div class="el-table-tool-right">
              <!-- 搜索框 -->
              <div class="el-file-tool-search hidden-xs-only">
                <el-input
                    size="small"
                    v-model="search"
                    placeholder="搜索您的文件">
                  <el-button slot="append" icon="el-icon-search"/>
                </el-input>
              </div>
              <!-- 排序方式切换 -->
              <el-dropdown @command="onSortClick">
                <i class="el-icon-_filter el-file-tool-btn" title="排序方式"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="name">
                  <span :class="['el-file-sort-item el-text-primary', {'active': sort === 'name'}]">
                    <i
                        :class="['el-file-sort-item-icon', {'el-icon-top': order === 'asc'}, {'el-icon-bottom': order === 'desc'}]"></i>
                    <span>文件名</span>
                  </span>
                  </el-dropdown-item>
                  <el-dropdown-item command="length">
                  <span :class="['el-file-sort-item el-text-primary', {'active': sort === 'length'}]">
                    <i
                        :class="['el-file-sort-item-icon', {'el-icon-top': order === 'asc'}, {'el-icon-bottom': order === 'desc'}]"></i>
                    <span>大小</span>
                  </span>
                  </el-dropdown-item>
                  <el-dropdown-item command="updateTime">
                  <span :class="['el-file-sort-item el-text-primary', {'active': sort === 'updateTime'}]">
                    <i
                        :class="['el-file-sort-item-icon', {'el-icon-top': order === 'asc'}, {'el-icon-bottom': order === 'desc'}]"></i>
                    <span>修改日期</span>
                  </span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <!-- 显示方式切换 -->
              <i
                  title="显示方式"
                  :class="['el-file-tool-btn', {'el-icon-_menu': !grid}, {'el-icon-_nav': grid}]"
                  @click="grid = !grid"></i>
            </div>
          </div>
          <!-- 文件目录面包屑 -->
          <div class="el-file-breadcrumb-group el-cell">
            <div class="el-cell-content el-cell">
              <div
                  class="el-file-breadcrumb-back el-text-primary"
                  @click="back">返回上一级
              </div>
              <div class="el-file-breadcrumb-list el-cell-content el-cell">
                <div
                    :class="['el-file-breadcrumb-item ele-cell', {'el-text-primary': directory.length}]"
                    @click="listAll">
                  <div class="el-file-breadcrumb-item-title">全部文件</div>
                  <i class="el-icon-arrow-right"></i>
                </div>
                <div
                    v-for="(item,index) in directory"
                    :key="index"
                    :class="['el-file-breadcrumb-item ele-cell', {'el-text-primary': index !== directory.length - 1}]"
                    @click="listDir(index)">
                  <div class="el-file-breadcrumb-item-title">{{ item }}</div>
                  <i class="el-icon-arrow-right"></i>
                </div>
              </div>
            </div>
            <div class="hidden-xs-only">已全部加载，共{{ data.length }}个</div>
          </div>
        </div>
      </div>
      <div style="padding: 3px;">
        <div style="height: 100%">
          <div class="content-border">
            <!-- 文件列表 -->
            <div v-loading="loading" style="min-height: 400px;">
              <el-file-list
                  :data="data"
                  :grid="grid"
                  :sort="sort"
                  :order="order"
                  v-model="checked"
                  @item-click="onItemClick"
                  @sort-change="onSortChange">
                <template slot="tool" #default="scope">
                  <i
                      title="查看"
                      class="el-icon-view el-file-list-item-tool el-text-primary"
                      @click="stop(scope.row)">
                  </i>
                  <i
                      title="分享"
                      class="el-icon-share el-file-list-item-tool el-text-primary">
                  </i>
                  <i
                      title="删除"
                      class="el-icon-delete el-file-list-item-tool el-text-primary">
                  </i>
                </template>
              </el-file-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
  <!-- 用于图片预览 -->
  <el-image
      ref="previewImage"
      :src="currentImage"
      class="el-file-image-preview"
      :preview-src-list="previewList">
  </el-image>
</template>

<script>
export default {
name: "file"
}
</script>

<style scoped>
/** 文件目录面包屑 */
.el-file-breadcrumb-group {
  font-size: 13px;
  padding: 2px 0 6px 0;
  line-height: 1;
}

.el-file-breadcrumb-back {
  padding-right: 10px;
  border-right: 2px solid hsla(0, 0%, 60%, .2);
}

.el-file-breadcrumb-back:hover,
.el-file-breadcrumb-item.el-text-primary:hover > .el-file-breadcrumb-item-title {
  text-decoration: underline;
  cursor: pointer;
}

/* 图片预览组件 */
.el-file-image-preview ::v-deep img.el-image__inner {
  display: none;
}

.el-file-image-preview ::v-deep .el-image__error {
  display: none;
}

/* 图标按钮 */
.el-file-tool-btn {
  cursor: pointer;
  font-size: 22px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}

/* 搜索框 */
.el-file-tool-search {
  display: inline-block;
  vertical-align: middle;
  background-color: hsla(0, 0%, 60%, .15);
  border-radius: 32px;
}

.el-file-tool-search ::v-deep .el-input-group__append,
.el-file-tool-search ::v-deep .el-input__inner {
  background-color: transparent;
  border: none;
}

.el-file-tool-search ::v-deep .el-input-group__append {
  padding: 0;
}

.el-file-tool-search ::v-deep .el-input-group__append .el-button {
  margin: 0;
  padding: 7px 16px 7px 10px;
  border: none;
}

.el-file-tool-search ::v-deep .el-input-group__append .el-button > i {
  font-size: 16px;
  font-weight: 600;
}

.el-file-tool-search ::v-deep .el-input__inner {
  width: 200px;
  padding-right: 0;
  box-sizing: border-box;
}

/* 排序下拉 */
.el-file-sort-item:not(.active) .el-file-sort-item-icon {
  visibility: hidden;
}

.el-file-sort-item .el-file-sort-item-icon {
  font-weight: 600;
}

.el-file-sort-item:not(.active) {
  color: inherit;
}
</style>