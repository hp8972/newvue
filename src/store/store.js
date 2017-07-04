import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
actions:{
	list({ commit }, status) {
            fetch('https://www.easy-mock.com/mock/595b20da9adc231f357059e2/example/vue/list')
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                commit('GETLIST', data.data)
            })
            .catch(e => console.log("Oops, error", e))
	    },
        detail({ commit }, status) {
            fetch('https://www.easy-mock.com/mock/595b20da9adc231f357059e2/example/proxy?s='+status)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                commit('GETDETAIL', data.data.news)
            })
            .catch(e => console.log("Oops, error", e))
        }
},
getters:{
    	
},
mutations:{
	['GETLIST'](state, status) {
	        state.list = status
	   },

        ['GETDETAIL'](state, status) {
            state.detail = status
        }
}
	
})
