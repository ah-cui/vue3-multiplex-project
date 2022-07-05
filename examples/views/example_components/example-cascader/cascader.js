export default {
  queryData:{
    options: [{
      value: 'zhinan',
      label: '指南',
      id: '1',
      pid: '',
      children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        id: '1-1',
        pid: '1',
        children: [{
          value: 'yizhi',
          label: '一致',
          id: '1-1-1',
          pid: '1-1',
        }, {
          value: 'fankui',
          label: '反馈',
          id: '1-1-2',
          pid: '1-1',
        }, {
          value: 'xiaolv',
          label: '效率',
          id: '1-1-3',
          pid: '1-1',
        }, {
          value: 'kekong',
          label: '可控',
          id: '1-1-4',
          pid: '1-1',
        }]
      }, {
        value: 'daohang',
        label: '导航',
        id: '1-2',
        pid: '1',
        children: [{
          value: 'cexiangdaohang',
          label: '侧向导航',
          id: '1-2-1',
          pid: '1-2',
        }, {
          value: 'dingbudaohang',
          label: '顶部导航',
          id: '1-2-2',
          pid: '1-2',
        }]
      }]
    }, {
      value: 'zujian',
      label: '组件',
      id: '2',
      pid:'',
      children: [{
        value: 'basic',
        label: 'Basic',
        id: '2-1',
        pid: '2',
        children: [{
          value: 'layout',
          label: 'Layout 布局',
          id: '2-1-1',
          pid: '2-1',
        }, {
          value: 'color',
          label: 'Color 色彩',
          id: '2-1-2',
          pid: '2-1',
        }, {
          value: 'typography',
          label: 'Typography 字体',
          id: '2-1-3',
          pid: '2-1',
        }, {
          value: 'icon',
          label: 'Icon 图标',
          id: '2-1-4',
          pid: '2-1',
        }, {
          value: 'button',
          label: 'Button 按钮',
          id: '2-1-5',
          pid: '2-1',
        }]
      }, {
        value: 'form',
        label: 'Form',
        id: '2-2',
        pid: '2',
        children: [{
          value: 'radio',
          label: 'Radio 单选框',
          id: '2-2-1',
          pid: '2-2',
        }, {
          value: 'checkbox',
          label: 'Checkbox 多选框',
          id: '2-2-2',
          pid: '2-2',
        }, {
          value: 'input',
          label: 'Input 输入框',
          id: '2-2-3',
          pid: '2-2',
        }, {
          value: 'input-number',
          label: 'InputNumber 计数器',
          id: '2-2-3',
          pid: '2-2',
        }, {
          value: 'select',
          label: 'Select 选择器',
          id: '2-2-4',
          pid: '2-2',
        }, {
          value: 'cascader',
          label: 'Cascader 级联选择器',
          id: '2-2-5',
          pid: '2-2',
        }, {
          value: 'switch',
          label: 'Switch 开关',
          id: '2-2-6',
          pid: '2-2',
        }, {
          value: 'slider',
          label: 'Slider 滑块',
          id: '2-2-7',
          pid: '2-2',
        }, {
          value: 'time-picker',
          label: 'TimePicker 时间选择器',
          id: '2-2-8',
          pid: '2-2',
        }, {
          value: 'date-picker',
          label: 'DatePicker 日期选择器',
          id: '2-2-9',
          pid: '2-2',
        }, {
          value: 'datetime-picker',
          label: 'DateTimePicker 日期时间选择器',
          id: '2-2-9',
          pid: '2-2',
        }, {
          value: 'upload',
          label: 'Upload 上传',
          id: '2-2-10',
          pid: '2-2',
        }, {
          value: 'rate',
          label: 'Rate 评分',
          id: '2-2-11',
          pid: '2-2',
        }, {
          value: 'form',
          label: 'Form 表单',
          id: '2-2-12',
          pid: '2-2',
        }]
      }, {
        value: 'data',
        label: 'Data',
        id: '2-3',
        pid: '2',
        children: [{
          value: 'table',
          label: 'Table 表格',
          id: '2-3-1',
          pid: '2-3',
        }, {
          value: 'tag',
          label: 'Tag 标签',
          id: '2-3-2',
          pid: '2-3',
        }, {
          value: 'progress',
          label: 'Progress 进度条',
          id: '2-3-3',
          pid: '2-3',
        }, {
          value: 'tree',
          label: 'Tree 树形控件',
          id: '2-3-4',
          pid: '2-3',
        }, {
          value: 'pagination',
          label: 'Pagination 分页',
          id: '2-3-5',
          pid: '2-3',
        }, {
          value: 'badge',
          label: 'Badge 标记',
          id: '2-3-6',
          pid: '2-3',
        }]
      }, {
        value: 'notice',
        label: 'Notice',
        id: '2-4',
        pid: '2',
        children: [{
          value: 'alert',
          label: 'Alert 警告',
          id: '2-4-1',
          pid: '2-4',
        }, {
          value: 'loading',
          label: 'Loading 加载',
          id: '2-4-2',
          pid: '2-4',
        }, {
          value: 'message',
          label: 'Message 消息提示',
          id: '2-4-3',
          pid: '2-4',
        }, {
          value: 'message-box',
          label: 'MessageBox 弹框',
          id: '2-4-4',
          pid: '2-4',
        }, {
          value: 'notification',
          label: 'Notification 通知',
          id: '2-4-5',
          pid: '2-4',
        }]
      }, {
        value: 'navigation',
        label: 'Navigation',
        id: '2-5',
        pid: '2',
        children: [{
          value: 'menu',
          label: 'NavMenu 导航菜单',
          id: '2-5-1',
          pid: '2-5',
        }, {
          value: 'tabs',
          label: 'Tabs 标签页',
          id: '2-5-2',
          pid: '2-5',
        }, {
          value: 'breadcrumb',
          label: 'Breadcrumb 面包屑',
          id: '2-5-3',
          pid: '2-5',
        }, {
          value: 'dropdown',
          label: 'Dropdown 下拉菜单',
          id: '2-5-4',
          pid: '2-5',
        }, {
          value: 'steps',
          label: 'Steps 步骤条',
          id: '2-5-5',
          pid: '2-5',
        }]
      }, {
        value: 'others',
        label: 'Others',
        id: '2-6',
        pid: '2',
        children: [{
          value: 'dialog',
          label: 'Dialog 对话框',
          id: '2-6-1',
          pid: '2-6',
        }, {
          value: 'tooltip',
          label: 'Tooltip 文字提示',
          id: '2-6-2',
          pid: '2-6',
        }, {
          value: 'popover',
          label: 'Popover 弹出框',
          id: '2-6-3',
          pid: '2-6',
        }, {
          value: 'card',
          label: 'Card 卡片',
          id: '2-6-4',
          pid: '2-6',
        }, {
          value: 'carousel',
          label: 'Carousel 走马灯',
          id: '2-6-5',
          pid: '2-6',
        }, {
          value: 'collapse',
          label: 'Collapse 折叠面板',
          id: '2-6-6',
          pid: '2-6',
        }]
      }]
    }, {
      value: 'ziyuan',
      label: '资源',
      id: '3',
      pid: '',
      children: [{
        value: 'axure',
        label: 'Axure Components',
        id: '3-1',
        pid: '3',
      }, {
        value: 'sketch',
        label: 'Sketch Templates',
        id: '3-2',
        pid: '3',
      }, {
        value: 'jiaohu',
        label: '组件交互文档',
        id: '3-3',
        pid: '3',
      }]
    }]
  }
}