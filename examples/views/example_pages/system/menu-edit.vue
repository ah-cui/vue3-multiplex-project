<template>
    <div style="height: 100%">
      <el-row>
        <el-col style="text-align: center">
          <i class="el-icon-user" style="font-size: 56px"></i>
        </el-col>
      </el-row>
      <el-form :model="userForm" ref="userForm" :disabled="disabled" :rules="rule" label-width="100px" size="mini">
        <el-row>
          <el-col :span="12">
            <el-form-item label="账号" prop="accountNo" >
              <template #label>
                <span>账号
                  <el-tooltip class="item" effect="dark" placement="top-start">
                    <template #content>
                      <div>
                        验证规则：字母、数字及特殊字符的组合<br/>特殊字符包含：! @ $ % ^ _ -
                      </div>
                    </template>
                    <i class="el-icon-question"></i>
                  </el-tooltip>
                </span>
              </template>
              <el-input v-model="userForm.accountNo" :disabled="propDisable('accountNo')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="userName">
              <el-input v-model="userForm.userName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="组织机构" prop="orgnaId">
              <!--<tree-select v-model="userForm.orgnaId" :disabled="disabled" placeholder="请选择组织机构" :defaultExpandLevel="1" :clearable="false"
                           style="margin-right: 8px" :options="orgOptions"
                           :normalizer="batchNormalizer"></tree-select>-->
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="userForm.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="手机" prop="mobile">
              <el-input v-model="userForm.mobile"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="员工类型" prop="empType">
              <el-select v-model="userForm.empType" style="width: 100%">
                <el-option v-for="item in empTypeOptions" :key="item.value" :label="item.label"
                           :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="职工类型" prop="positionType">
              <el-select v-model="userForm.positionType" style="width: 100%">
                <el-option v-for="item in positionTypeOptions" :key="item.value" :label="item.label"
                           :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证" prop="idCard">
              <el-input v-model.trim="userForm.idCard"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="描述" prop="desc">
              <el-input v-model="userForm.desc" type="textarea" maxlength="50" show-word-limit rows="2"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </template>
  
  <script>
  /*import TreeSelect from "@riophae/vue-treeselect";*/
  /*import appUserApi from "../../../../assets/api/app/appUserApi";
  import entUserApi from "../../../../assets/api/sys/entUserApi";*/
  
  export default {
    name: "appUser",
    components: {
      /*TreeSelect*/
    },
    props: {
      tenantId:{
        type: String,
        default: ""
      },
      /**
       * 应用ID
       */
      appId:{
        type: String,
        default: ""
      },
      disableField:{
        type:Array,
        default:function(){
          return [];
        }
      },
      /**
       * 是否禁用
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * 组织机构树
       */
      orgOptions: {
        type: Array,
        default: function(){
          return []
        }
      },
      /**
       * 用户类型列表
       */
      empTypeOptions: {
        type: Array,
        default: function(){
          return []
        }
      },
      positionTypeOptions: {
        type: Array,
        default: function(){
          return []
        }
      },
      /**
       * form对象
       */
      form: {
        type: Object,
        default: function(){
          return {
            userId:null,
            accountNo: "",
            userName: "",
            orgnaId: null,
            mobile: "",
            appId:this.appId,
            tenantId: this.tenantId,
            email: "",
            empType: "1",
            positionType: '1',
            idCard: "",
            desc: ""
          }
        }
      }
    },
    data(){
      const validateText = (rule, value, callback) => {
        if(value){
          const reg = new RegExp("^([\u4e00-\u9fa5]|[a-zA-Z0-9\-()_（）])+$");
          if(!reg.test(value)){
            callback(new Error("规则：汉字、字母、数字、-或下划线等的组合"))
          }
          callback();
        }else {
          callback();
        }
      };
      const checkUserEmail = (rule, val, callback) => {
        if (val != null && val != "") {
          var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if (!reg.test(val)) {
            callback(new Error("请输入有效的邮箱"));
          }else{
            entUserApi.checkUserEmail(this.userForm.userId,this.userForm.email,function(res){
              if(res.meta && res.meta.success){
                if(res.data && res.data.flag){
                  callback(new Error("邮箱已存在，请修改"))
                }else{
                  callback();
                }
              }
            })
          }
        }else {
          callback();
        }
      }
      const checkAccountNo = (rule, val, callback) => {
        if(!val){
          return callback(new Error("账号不能为空"))
        }else{
          const reg = /^(\w!*@*\$*%*\^*_*-*)+$/;
          if(!reg.test(val)){
            callback(new Error("账号验证失败"))
          }
        }
        if(this.userForm.userId==null || this.userForm.userId==""){
          appUserApi.checkUser(this.tenantId,this.appId,this.userForm.accountNo,function(res){
            if(res.meta && res.meta.success){
              if(res.data && res.data.flag){
                callback(new Error("账号已存在，请修改"))
              }else{
                callback();
              }
            }
          });
        }else {
          return callback();
        }
      }
      return {
        userForm: this.form,
        rule: {
          accountNo: [
            {required: true, message: '账号不能为空', trigger: 'blur'},
            { min: 1, max: 20, message: "长度不得超过20", trigger: "blur" },
            {validator: checkAccountNo, trigger: 'blur'}
          ],
          userName: [
            {required: true, message: '姓名不能为空', trigger: 'blur'},
            { min: 1, max: 12, message: "长度不得超过12", trigger: "blur" },
            {validator: validateText, trigger: 'blur'},
          ],
          orgnaId: [
            {required: true, message: '组织机构不能为空', trigger: 'blur'},
          ],
          mobile:[
            {
              required: false,
              validator: (rule, value, callback) => {
                if (value !== "") {
                  var reg = /^1[3456789]\d{9}$/;
                  if (!reg.test(value)) {
                    callback(new Error("请输入有效的手机号码"));
                  }
                }
                callback();
              },
              trigger: "blur"
            }],
          email: [
            {required: true, message: '邮箱不能为空', trigger: 'blur'},
            { validator: checkUserEmail,trigger: "blur"},
            { min: 1, max: 40, message: "长度不得超过40", trigger: "blur" },
          ],
          idCard:[{
            required: false,
            validator: (rule, value, callback) => {
              if (value != null && value != "") {
                var reg =
                    /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                if (!reg.test(value)) {
                  callback(new Error("请输入有效的身份证号"));
                }else{
                  callback();
                }
              }else{
                callback();
              }
            },
            trigger: "blur"
          }]
        }
      };
    },
    watch:{
      form:{
        handler(val,oval){
          if(val.hasOwnProperty("accountNo")){
            this.userForm = val;
          }
          if( this.$refs['userForm']){
            this.$refs['userForm'].clearValidate();
          }
        },
        immediate:true,
        deep:true
      }
    },
    methods: {
      propDisable(prop){
        return this.disableField.indexOf(prop)!==-1;
      },
      resetForm(){
        this.userForm = {
          userId:null,
          accountNo: "",
          userName: "",
          orgnaId: null,
          areaId:this.appId,
          tenantId: this.tenantId,
          mobile: "",
          email: "",
          empType: "1",
          positionType: '1',
          idCard: "",
          desc: ""
        }
      },
      /**
       * 检查用户信息
       */
      checkUser(callback){
        const that = this;
        appUserApi.checkUser(this.tenantId,this.appId,this.userForm.accountNo,function(res){
          if(res.meta && res.meta.success){
            if(res.data && res.data.flag){
              that.$message.error("账号已存在，请检查！");
            }else{
              if(typeof callback === "function"){
                callback();
              }
            }
          }
        });
      },
      /**
       * 保存用户信息
       */
      saveUser(successCallBack,isCheckUser=true){
        const that = this;
        this.$refs.userForm.validate(valid => {
          if(valid){
            if(isCheckUser){
              that.checkUser(function(){
                that.submitUser(successCallBack);
              })
            }else{
              that.submitUser(successCallBack);
            }
  
          }
        })
      },
      /**
       * 提交
       */
      submitUser(successCallBack){
        const that = this;
        that.$confirm(`确定保存该用户?`, "提示", {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let user = {
            userId:that.userForm.userId,
            userLoginName:that.userForm.accountNo,
            userName: that.userForm.userName,
            orgnaId: that.userForm.orgnaId,
            tenantId: this.tenantId,
            areaId:this.appId,
            userMobile: that.userForm.mobile,
            userCode:that.userForm.userCode,
            userEmail: that.userForm.email,
            employeeType: that.userForm.empType,
            positionType: that.userForm.positionType,
            userCard: that.userForm.idCard,
            userDesc: that.userForm.desc
          }
          appUserApi.saveUser(user, function(res){
            if(res.data){
              that.$message.success("用户保存成功");
              if(typeof successCallBack ==="function"){
                successCallBack();
              }
            }
          })
        }).catch(() => {
        })
      },
      batchNormalizer(node){
        //去掉children=[]的children属性
        if(node.children && !node.children.length){
          delete node.children;
        }
        return {
          id: node.orgnaId,
          label: node.orgnaName,
          children: node.children
        }
      },
    }
  }
  </script>
  
  <style scoped>
  
  </style>