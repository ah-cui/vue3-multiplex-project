<template>
	<el-container >
			<el-card shadow="never" class="el-card-scoped vs-workbench-scoped">
        		
					
						<div class="fileresource">本内容来自于根目录的readme.md</div>
						 <!--<markdown-it-vue class="md-body-scoped" :content="readme_content"/>-->
						 <markdown-it :plugins="plugins" class="md-body-scoped" :source="readme_content"/>
					
			</el-card>
	</el-container>
</template>




<script>



import readfile from '../../assets/webApi/readfile.js';
import MarkdownIt from 'vue3-markdown-it';
import markdownItabbr from 'markdown-it-abbr'
import markdownItanchor from 'markdown-it-anchor'
import markdownItdeflist from 'markdown-it-deflist'
import markdownItemoji from 'markdown-it-emoji'
import markdownItfootnote from 'markdown-it-footnote'
import markdownIthighlightjs from 'markdown-it-highlightjs'
import markdownItins from 'markdown-it-ins'
import markdownItmark from 'markdown-it-mark'
import markdownItsub from 'markdown-it-sub'
import markdownItsup from 'markdown-it-sup'
import markdownIttasklists from 'markdown-it-task-lists'
import markdownIttocdoneright from 'markdown-it-toc-done-right'
import 'highlight.js/styles/monokai.css';
import {vue} from '../../assets/core';;

export default {
	name: "ReadMe-index",
	components: {
		MarkdownIt,
	},
	setup(){

		let filepath=vue.ref("/README.md"),readme_content=vue.ref("");
		const plugins=vue.reactive([
			{
				plugin:markdownItabbr
			},
			{
				plugin:markdownItanchor
			},
			{
				plugin:markdownItdeflist
			},
			{
				plugin:markdownItemoji
			},
			{
				plugin:markdownItfootnote
			},
			{
				plugin:markdownIthighlightjs
			},
			{
				plugin:markdownItins
			},
			{
				plugin:markdownItmark
			},
			{
				plugin:markdownItsub
			},
			{
				plugin:markdownItsup
			},
			{
				plugin:markdownIttasklists
			},
			{
				plugin:markdownIttocdoneright
			}
		])
		const getReadMe=()=>{
			let readmepath=filepath;
			readfile.getFileByFilepath(readmepath.value,resp=>{
					readme_content.value=resp;
					
			},err=>{
				console.log(err.message)
			})
		}
		vue.onMounted(()=>{
			getReadMe();
		})

		return {
			readme_content,
			plugins,
		}
	}
}
</script>

