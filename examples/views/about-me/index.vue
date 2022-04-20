<template>
	<el-container class="el-container-scoped">
		<el-main ref="main" class="el-main-scoped">
			<el-card shadow="never" class="el-card-scoped">
        		
			
				<el-container>
					<el-main class="el-main-scoped">
						<div class="fileresource">本内容来自于根目录的readme.md</div>
						 <markdown-it-vue class="md-body-scoped" :content="readme_content"/>
					</el-main>
				</el-container>
			</el-card>
		</el-main>
	</el-container>
</template>




<script>



import readfile from '../../assets/webApi/readfile.js';
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import{ref} from 'vue';

export default {
	name: "ReadMe-index",
	components: {
		MarkdownItVue,
	},
	setup(){

		const readmepath=ref("/README.md"),loading=ref(false),readme_content=ref("");

		const getReadMe=()=>{
			loading.value=true;
			readfile.getFileByFilepath(readmepath.value,resp=>{
					readme_content.value=resp;
					_loading.value=false;
					
			},err=>{
					loading.value=false;
			})
		}
		vue.onMounted(()=>{
			getReadMe();
		})

		return {
		filepath,
		loading,
		readme_content,
		}
	}
}
</script>

