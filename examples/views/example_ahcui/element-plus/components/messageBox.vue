<template>
    <div>
        消息提示<el-button text @click="open">Click to open the Message Box</el-button>
    </div>
  
    <div>
        确认消息<el-button text @click="open1">Click to open the Message Box</el-button>
    </div>
  
    <div>
        提交内容 <el-button text @click="open2">Click to open Message Box</el-button>
    </div>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}

const open1 = () => {
  ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
const open2 = () => {
  ElMessageBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      ElMessage({
        type: 'success',
        message: `Your email is:${value}`,
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}
</script>