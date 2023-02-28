import Vue from 'vue'
import App from './App.vue'
// let a = 100;
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name, TypeNav);
//引入路由
import router from '@/router';
//引入仓库
import store from './store';

new Vue({
  render: h => h(App),
  //注册路由：底下的写法KV一直省略V【router小写的】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$router.$router属性
  router,
  //注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
