/*
 * @Author: wangzichi
 * @Date: 2022-02-12 17:11:18
 * @LastEditors: wangzichi
 * @LastEditTime: 2022-02-12 17:36:16
 * @Description: file content
 * @FilePath: \studyVueoriginal\vueoriginal\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './routercopy'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
new Vue({
  router, // 添加到配置项中，为什么？
  render: (h) => h(App)
}).$mount('#app')
