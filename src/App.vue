<template>
  <div id="app">
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTarBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }

}
</script>

<style scoped>

</style>
