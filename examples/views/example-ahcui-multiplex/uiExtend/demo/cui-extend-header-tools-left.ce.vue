

<template>
    <div class="cui-header-tools-inner-left" >
        <el-input v-model="input" placeholder="我是一个扩展的查询输入框" />
    </div>
</template>

<script>
import {vue,runtimeCfg} from '../../../../assets/core';
import {ElInput} from 'element-plus';
export default {
    components:{ElInput},
    props:{},
    setup() {
        return {
            runtimeCfg,
        }
    }

}
</script>

<style>
.cui-header-tools-inner-left
{
    background-color: var(--sidebar-main-background-color);
    border:1px solid red;
    width:100%;
    box-sizing: border-box;
    height: 100%;
}
:root {
    --el-color-white:#ffffff;
    --el-color-black:#000000;
    --el-color-primary:#409eff;
    --el-color-primary-light-1:#53a8ff;
    --el-color-primary-light-2:#66b1ff;
    --el-color-primary-light-3:#79bbff;
    --el-color-primary-light-4:#8cc5ff;
    --el-color-primary-light-5:#a0cfff;
    --el-color-primary-light-6:#b3d8ff;
    --el-color-primary-light-7:#c6e2ff;
    --el-color-primary-light-8:#d9ecff;
    --el-color-primary-light-9:#ecf5ff;
    --el-color-success:#67c23a;
    --el-color-success-light:#e1f3d8;
    --el-color-success-lighter:#f0f9eb;
    --el-color-warning:#e6a23c;
    --el-color-warning-light:#faecd8;
    --el-color-warning-lighter:#fdf6ec;
    --el-color-danger:#f56c6c;
    --el-color-danger-light:#fde2e2;
    --el-color-danger-lighter:#fef0f0;
    --el-color-error:#f56c6c;
    --el-color-error-light:#fde2e2;
    --el-color-error-lighter:#fef0f0;
    --el-color-info:#909399;
    --el-color-info-light:#e9e9eb;
    --el-color-info-lighter:#f4f4f5;
    --el-bg-color:#f5f7fa;
    --el-border-width-base:1px;
    --el-border-style-base:solid;
    --el-border-color-hover:var(--el-text-color-placeholder);
    --el-border-base:var(--el-border-width-base) var(--el-border-style-base) var(--el-border-color-base);
    --el-svg-monochrome-grey:#dcdde0;
    --el-fill-base:var(--el-color-white);
    --el-font-size-extra-large:20px;
    --el-font-size-large:18px;
    --el-font-size-medium:16px;
    --el-font-size-base:14px;
    --el-font-size-small:13px;
    --el-font-size-extra-small:12px;
    --el-font-weight-primary:500;
    --el-font-line-height-primary:24px;
    --el-text-color-disabled-base:#bbb;
    --el-index-normal:1;
    --el-index-top:1000;
    --el-index-popper:2000;
    --el-text-color-primary:#303133;
    --el-text-color-regular:#606266;
    --el-text-color-secondary:#909399;
    --el-text-color-placeholder:#c0c4cc;
    --el-border-color-base:#dcdfe6;
    --el-border-color-light:#e4e7ed;
    --el-border-color-lighter:#ebeef5;
    --el-border-color-extra-light:#f2f6fc;
    --el-border-radius-base:4px;
    --el-border-radius-small:2px;
    --el-border-radius-round:20px;
    --el-border-radius-circle:100%;
    --el-box-shadow-base:0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    --el-box-shadow-light:0 2px 12px 0 rgba(0, 0, 0, 0.1);
    --el-disabled-bg-color:var(--el-bg-color);
    --el-disabled-text-color:var(--el-text-color-placeholder);
    --el-disabled-border-color:var(--el-border-color-light);
    --el-transition-duration:0.3s;
    --el-transition-duration-fast:0.2s;
    --el-transition-function-ease-in-out-bezier:cubic-bezier(0.645, 0.045, 0.355, 1);
    --el-transition-function-fast-bezier:cubic-bezier(0.23, 1, 0.32, 1);
    --el-transition-all:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);
    --el-transition-fade:opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);
    --el-transition-md-fade:transform var(--el-transition-duration) var(--el-transition-function-fast-bezier), opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);
    --el-transition-fade-linear:opacity var(--el-transition-duration-fast) linear;
    --el-transition-border:border-color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);
    --el-transition-color:color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier)
}
.el-input {
    --el-input-text-color:var(--el-text-color-regular);
    --el-input-border:var(--el-border-base);
    --el-input-border-color:var(--el-border-color-base);
    --el-input-border-radius:var(--el-border-radius-base);
    --el-input-bg-color:var(--el-color-white);
    --el-input-icon-color:var(--el-text-color-placeholder);
    --el-input-placeholder-color:var(--el-text-color-placeholder);
    --el-input-hover-border:var(--el-border-color-hover);
    --el-input-clear-hover-color:var(--el-text-color-secondary);
    --el-input-focus-border:var(--el-color-primary);
    position:relative;
    font-size:var(--el-font-size-base);
    display:inline-flex;
    width:100%;
    line-height:32px
}
.el-input::-webkit-scrollbar {
    z-index:11;
    width:6px
}
.el-input::-webkit-scrollbar:horizontal {
    height:6px
}
.el-input::-webkit-scrollbar-thumb {
    border-radius:5px;
    width:6px;
    background:#b4bccc
}
.el-input::-webkit-scrollbar-corner {
    background:#fff
}
.el-input::-webkit-scrollbar-track {
    background:#fff
}
.el-input::-webkit-scrollbar-track-piece {
    background:#fff;
    width:6px
}
.el-input .el-input__clear {
    color:var(--el-input-icon-color);
    font-size:14px;
    cursor:pointer;
    transition:var(--el-transition-color)
}
.el-input .el-input__clear:hover {
    color:var(--el-input-clear-hover-color)
}
.el-input .el-input__count {
    height:100%;
    display:inline-flex;
    align-items:center;
    color:var(--el-color-info);
    font-size:12px
}
.el-input .el-input__count .el-input__count-inner {
    background:#fff;
    line-height:initial;
    display:inline-block;
    padding:0 5px
}
.el-input__inner {
    -webkit-appearance:none;
    background-color:var(--el-input-bg-color, var(--el-color-white));
    background-image:none;
    border-radius:var(--el-input-border-radius, var(--el-border-radius-base));
    border:var(--el-input-border, var(--el-border-base));
    box-sizing:border-box;
    color:var(--el-input-text-color, var(--el-text-color-regular));
    display:inline-block;
    font-size:inherit;
    height:32px;
    line-height:32px;
    outline:0;
    padding:0 11px;
    transition:var(--el-transition-border);
    width:100%
}
.el-input__inner::placeholder {
    color:var(--el-input-placeholder-color, var(--el-text-color-placeholder))
}
.el-input__inner:hover {
    border-color:var(--el-input-hover-border, var(--el-border-color-hover))
}
.el-input__inner:focus {
    outline:0;
    border-color:var(--el-input-focus-border, var(--el-color-primary))
}
.el-input__suffix {
    display:inline-flex;
    position:absolute;
    height:100%;
    right:12px;
    top:0;
    text-align:center;
    color:var(--el-input-icon-color, var(--el-text-color-placeholder));
    transition:all var(--el-transition-duration);
    pointer-events:none
}
.el-input__suffix-inner {
    pointer-events:all;
    display:inline-flex
}
.el-input__prefix {
    display:inline-flex;
    position:absolute;
    height:100%;
    left:12px;
    top:0;
    text-align:center;
    color:var(--el-input-icon-color, var(--el-text-color-placeholder));
    transition:all var(--el-transition-duration)
}
.el-input__prefix-inner {
    pointer-events:all;
    display:inline-flex
}
.el-input .el-input__icon {
    height:inherit;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all var(--el-transition-duration)
}
.el-input__validateIcon {
    pointer-events:none
}
.el-input.is-active .el-input__inner {
    outline:0;
    border-color:var(--el-input-focus-border, )
}
.el-input.is-disabled .el-input__inner {
    background-color:var(--el-disabled-bg-color);
    border-color:var(--el-disabled-border-color);
    color:var(--el-disabled-text-color);
    cursor:not-allowed
}
.el-input.is-disabled .el-input__inner::placeholder {
    color:var(--el-text-color-placeholder)
}
.el-input.is-disabled .el-input__icon {
    cursor:not-allowed
}
.el-input.is-exceed .el-input__inner {
    border-color:var(--el-color-danger)
}
.el-input.is-exceed .el-input__suffix .el-input__count {
    color:var(--el-color-danger)
}
.el-input--suffix--password-clear .el-input__inner {
    padding-right:55px
}
.el-input--suffix .el-input__inner {
    padding-right:31px
}
.el-input--prefix .el-input__inner {
    padding-left:31px
}
.el-input--large {
    font-size:14px;
    line-height:38px
}
.el-input--large .el-input__inner {
    height:40px;
    line-height:40px;
    padding:0 15px
}
.el-input--large .el-input__icon {
    line-height:40px
}
.el-input--large.el-input--prefix .el-input__inner {
    padding-left:35px
}
.el-input--large.el-input--suffix .el-input__inner {
    padding-right:35px
}
.el-input--large .el-input__prefix {
    left:16px
}
.el-input--large .el-input__suffix {
    right:16px
}
.el-input--small {
    font-size:12px;
    line-height:22px
}
.el-input--small .el-input__inner {
    height:24px;
    line-height:24px;
    padding:0 7px
}
.el-input--small .el-input__icon {
    line-height:24px
}
.el-input--small.el-input--prefix .el-input__inner {
    padding-left:25px
}
.el-input--small.el-input--suffix .el-input__inner {
    padding-right:25px
}
.el-input--small .el-input__prefix {
    left:8px
}
.el-input--small .el-input__suffix {
    right:8px
}
</style>

