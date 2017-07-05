<template>
  <div id="app">
  	<router-link to="register">注册</router-link>
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
//    console.log(this.$state.list)
//    dispatch可以调用action种的方法，然后在action方法中进行数据请求，然后把数据保存到state中
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
