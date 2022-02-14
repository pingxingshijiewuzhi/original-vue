<!--
 * @Author: wangzichi
 * @Date: 2022-02-12 17:11:18
 * @LastEditors: wangzichi
 * @LastEditTime: 2022-02-12 17:27:32
 * @Description: file content
 * @FilePath: \studyVueoriginal\vueoriginal\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <!-- 路由跳转连接 -->
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <!-- 路由出口 -->
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
