/*
 * @Author: wangzichi
 * @Date: 2022-02-12 17:35:53
 * @LastEditors: wangzichi
 * @LastEditTime: 2022-02-16 17:19:48
 * @Description: file content
 * @FilePath: \vueoriginal\src\routercopy\myvue-router.js
 */
// 1.插件
// 2.两个组件

// vue插件方式：fn或者obj
// 要求必须由install方法，将来会被Vue.use调用
let Vue // 保存Vue构造函数，插件中使用
class VueRouter {
  /*   // 2.创建实例
const router = new VueRouter({
  mode: 'hash',
  routes // 配置项
}) */
  constructor (options) {
    // options 就是{
    //   mode: 'hash',
    //   routes // 配置项
    // }
    this.$options = options
    // 把current作为响应式数据
    // 将来发生变化,router-view的render函数能否再次执行
    // this.current = '/'
    const initial = window.location.hash.slice('#') || '/'
    Vue.util.defineReactive(this, 'current', initial)
    // 监听hash变化
    window.addEventListener('hashchange', () => {
      this.current = window.location.hash.slice(1)
    })
  }
}
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
        Vue.prototype.$router = this.$options.router // 这里在原型上加的$router是new VueRouter({
        //   mode: 'hash',
        //   routes // 配置项
        // })
        // 这个全局唯一的路由实例
      }
    }
  })

  // 2.注册实现两个组件router-view,router-link
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render (h) {
      // <a href='to'>xxx</a>--->xxx就是组件插槽内容this.$solt.default
      // 方式一:不推荐
      // return <a href={'#' + this.to}>{this.$slots.default}</a>
      // 方式二:
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    // template: '<div>router-view</div>'
    // 不能直接用模板，用渲染函数
    render (h) {
      let component = null
      // 获取当前路由对应的组件
      // this.$options = options
      // this.current = '/'
      // console.log(
      //   this.$router,
      //   '当前类VueRouter实例,实例上有$options和current两个属性'
      // )
      const route = this.$router.$options.routes.find((route) => {
        return route.path === this.$router.current
      })
      // console.log(this.$router.current, route, '当前变化后的路由值和对应的路由对象')
      if (route) {
        component = route.component
      } else {
        component = null
      }
      return h(component)
      // return h('div', 'router-view')
    }
  })
}
export default VueRouter
