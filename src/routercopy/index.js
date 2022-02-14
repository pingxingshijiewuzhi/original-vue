/*
 * @Author: wangzichi
 * @Date: 2022-02-12 17:11:18
 * @LastEditors: wangzichi
 * @LastEditTime: 2022-02-12 17:36:29
 * @Description: file content
 * @FilePath: \studyVueoriginal\vueoriginal\src\routercopy\index.js
 */
import Vue from 'vue'
import VueRouter from './myvue-router'
import Home from '../views/Home.vue'

// 1.VueRouter是一个插件
// 内部做什么?
// 1.实现并声明了两个组件 router-view router-link
// 2.(插件就要有这个方法)install: this.$router.push()
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// 2.创建实例
const router = new VueRouter({
  routes // 配置项
})

export default router
