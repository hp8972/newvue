import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    list:{},
    detail:{},
    msg:""
  },
actions:{
//获取列表页面主标题
  list({ commit }, status) {
    // fetch调用数据，具体原理还不太了解，加强了解
            fetch('https://www.easy-mock.com/mock/595c69be9adc231f35716163/example_1499228606146/vue/list')
            .then(response => response.json())
            .then(data => {
                commit('GETLIST', data.data)
            })
            .catch(e => console.log("Oops, error", e))
      },
      //获取详情页面新闻信息
        detail({ commit }, status) {
            fetch('https://www.easy-mock.com/mock/595c69be9adc231f35716163/example_1499228606146/proxy?s='+status)
              //status: dispatch中传的参数，请求的关于id的数据
            .then(response => response.json())
            .then(data => {
                commit('GETDETAIL', data.data.news)
            })
            .catch(e => console.log("Oops, error", e))
        },
 
  //注册
  saveName({commit},status){
    commit("SAVEMSG",status)
  }
},
getters:{

},
mutations:{
    //数据更改赋值给state
	['GETLIST'](state, status) {
	        state.list = status
	   },

        ['GETDETAIL'](state, status) {
            state.detail = status
        },
  ['SAVEMSG'](state,status){
	  state.msg=status
  }
}

})
