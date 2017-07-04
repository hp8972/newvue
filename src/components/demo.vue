<template>
	<div id="demo">
		<el-row :gutter="20">
		  <el-col :span="24">
		  	<div class="grid-content bg-purple"  v-for="(item,index) in list" :key="index" @click="select(item.No)">
		  		<h1>{{item.name}}</h1>
		  	</div>
		  </el-col>		  
		</el-row>
	</div>
	
</template>

<script>
	
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default {
	    data() {
	      return {
	        
	      };
	    },
	    computed: {
		    ...mapState([
		    	"list"
			]),
		 },
	    methods: {
	    	select(No){
	    		this.$router.replace({ path: "listdetail",query:{
	    			id:No,
//					地址栏传参，商品id（名字可以随便写）
	    		}});
	    	}
	    	
	    }
	  }

</script>
<style scoped>


h1{
	font-size: 50px;
}
</style>