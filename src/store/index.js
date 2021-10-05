import Vue from "vue";
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import modules from './modules';


Vue.use(Vuex);

//创建vuex实例
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules
});

export default store;