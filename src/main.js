//引入根视图组件模块区域
import App from './App.vue';

//引入路由文件
import router from './router/router';

//引入vuex属性文件
import store from './store/index';

//引入插件包区域-----------------------------------------
import Vue from 'vue';

// //引入路由插件包
// import VueRouter from 'vue-router';
// //挂载vue-router插件
// Vue.use(VueRouter);

// //引入vuex插件包
// import Vuex from 'vuex';
// //挂载Vuex插件
// Vue.use(Vuex);

//引入axios插件包
import axios from 'axios';
//挂载axios插件
Vue.prototype.$axios = axios;

//引入mock (生成虚拟数据，用于前端测试)
import 'mockjs';
//------------------------------------------------------

//设置为开发环境
Vue.config.productionTip = false;

//创建vue实例
var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router,
    store
});

//导航守卫：-------------------------------
router.beforeEach((to, from, next) => {
    next();
});
//----------------------------------------