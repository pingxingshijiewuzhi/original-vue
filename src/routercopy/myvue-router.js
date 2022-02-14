/*
 * @Author: wangzichi
 * @Date: 2022-02-12 17:35:53
 * @LastEditors: wangzichi
 * @LastEditTime: 2022-02-12 17:55:49
 * @Description: file content
 * @FilePath: \studyVueoriginal\vueoriginal\src\routercopy\myvue-router.js
 */
// 1.插件
// 2.两个组件

// vue插件方式：fn或者obj
// 要求必须由install方法，将来会被Vue.use调用
let Vue // 保存Vue构造函数，插件中使用
class VueRouter {}
// 参数1是Vue.use调用时传入的
VueRouter.install = function (_Vue) {
  Vue = _Vue
  // 1.挂载$router属性
  // this.$router.push()
  // 全局混入==>这里是延迟执行,延迟到每个组件的各自创建
  // Vue.use(VueRouter)执行isntall先于new VueRouter创建的实例配置放在main.js里面new Vue({router})
  Vue.mixin({
    beforeCreate () {
      // 延迟到让每个组件创建在挂载Vue.prototype.$router
      // 次钩子在每个组件创建是咧都会调用
      // 这里的this就是模板实例-->main.js里面new Vue的全局实例
      // 根实例才有$option选项
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })
}
export default VueRouter
