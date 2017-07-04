<template>
  <div id="app">
    <h1>一个新的vuex小demo</h1>
    <router-view></router-view>
  </div>
</template>

<script>
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	import Demo from '@/components/demo'
	
export default {
	components:{Demo},
  name: 'app',
  data(){
  	return{
  		
  	}
  },
  created(){
  	this.$store.dispatch('list')
  }
  
  
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
