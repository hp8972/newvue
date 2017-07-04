<template>
	<div id="a">
		<a class="back" href="javascript:;" @click="back">返回</a>	
   		<h2>详情页</h2>
   		<el-row :gutter="20">
		  <el-col :span="24">
		  	<div class="grid-content bg-purple"  v-for="(item,index) in detail" :key="index">
		  		<h3>{{index+1}}、{{item.medium_title}}</h3>
		  	</div>
		  		
		  </el-col>		  
		</el-row>
	</div>
	
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import Element from 'element-ui'
	export default {
	    data() {
	      return {
	        
	      };
	    },
	    created(a){
	    	this.$store.dispatch('detail',this.$route.query.id)
	    	//调用store的action方法进行请求数据
	    },
	    computed: {
	    
		    ...mapState([
		    	"detail"
			])
		 },
	    methods: {
	    	back(){
	    		this.$router.replace({ path: "/"});
	    	},
	    }
	  }

</script>

<style scoped>

.back{
    font-size:50px;
}
h2{
    font-size:30px;
}


</style>