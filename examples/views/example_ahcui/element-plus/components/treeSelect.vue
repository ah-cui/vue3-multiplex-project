<template>
    <h5>TreeSelect 树形选择</h5>
    <el-tree-select v-model="value" :data="data" :render-after-expand="false" />
    <el-divider />
    show checkbox:
    <el-tree-select
        v-model="value"
        :data="data"
        :render-after-expand="false"
        show-checkbox
    />
    <h5>选择任意级别</h5>
    <el-tree-select
    v-model="value"
    :data="data"
    check-strictly
    :render-after-expand="false"
    />
    <el-divider />
    show checkbox(only click checkbox to select):
    <el-tree-select
        v-model="value"
        :data="data"
        check-strictly
        :render-after-expand="false"
        show-checkbox
    />
    <el-divider />
    show checkbox with `check-on-click-node`:
    <el-tree-select
        v-model="value"
        :data="data"
        check-strictly
        :render-after-expand="false"
        show-checkbox
        check-on-click-node
    />
    <h5>多选</h5>
    <el-tree-select
    v-model="value"
    :data="data"
    multiple
    :render-after-expand="false"
    />
    <el-divider />
    show checkbox:
    <el-tree-select
        v-model="value"
        :data="data"
        multiple
        :render-after-expand="false"
        show-checkbox
    />
    <el-divider />
    show checkbox with `check-strictly`:
    <el-tree-select
        v-model="valueStrictly"
        :data="data"
        multiple
        :render-after-expand="false"
        show-checkbox
        check-strictly
        check-on-click-node
    />
    <h5>自定义内容</h5>
    <el-tree-select v-model="value" :data="data">
        <template #default="{ data: { label } }">
        {{ label }}<span style="color: gray">(suffix)</span></template
        >
    </el-tree-select>
    <el-divider />
    use render content:
    <el-tree-select
        v-model="value"
        :data="data"
        :render-content="renderContent"
    />
</template>

<script setup>
import { ref } from 'vue'

const value = ref()

const data = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
</script>