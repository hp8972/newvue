<template>
	<div id="register">
		<el-row type="flex"  justify="center" >
			<el-form  label-width="100px" :rules="rules" :ref="login" :model="login" >
			  <el-form-item label="用户名" prop="username">
			    <el-input type="text"  auto-complete="off" v-model="login.username" placeholder="请填写用户名"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="password">
			    <el-input type="password"  auto-complete="off" v-model="login.password" placeholder="请填写密码"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="save">提交</el-button>
			  </el-form-item>
			</el-form>
		</el-row>
	</div>



</template>

<script>
   import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

  const rules = {
    username: [{
        required: true,
        message: '请填写用户名',
        trigger: 'blur'
    },
    {
        min: 3,
        max: 19,
        message: '长度在 3 到 19 个字符',
        trigger: 'blur'
    }],
    password: [{
        required: true,
        message: '请填写密码',
        trigger: 'blur'
    },
    {
        min: 7,
        max: 19,
        message: '长度在 7 到 19 个字符',
        trigger: 'blur'
    }]
}

 
	export default {
		data(){
			return{
				 login: {
	                username: '',
	                password: ''
           		 },
           		   rules: rules,
			}
			// 一定要记得把定义的rules和model绑定在data上，要不然会报未定义

		},

	    created(){
	      this.$store.dispatch('saveName')
	//    dispatch可以调用action种的方法，然后在action方法中进行数据请求，然后把数据保存到state中
	    },
	    methods:{
	      save(){
	        console.log(2)
	      }
	    },
	}


</script>

<style>
	.demo-ruleForm{
		width: 400px;
		margin: 50px auto;
	}
</style>
