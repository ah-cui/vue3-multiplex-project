<template>
    <div>
        <el-button :plain="true" @click="open">Show message</el-button>
        <el-button :plain="true" @click="openVn">VNode</el-button>
    </div>
    <div>
        <el-button :plain="true" @click="open2">success</el-button>
        <el-button :plain="true" @click="open3">warning</el-button>
        <el-button :plain="true" @click="open1">message</el-button>
        <el-button :plain="true" @click="open4">error</el-button>
    </div>
</template>

<script setup>
import { h } from 'vue'
import { ElMessage } from 'element-plus'

const open = () => {
  ElMessage('this is a message.')
}
const open1 = () => {
  ElMessage('this is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}
const openVn = () => {
  ElMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>