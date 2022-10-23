<template>
  <div id="app">
    <router-view />
    <main-tabber />
  </div>
</template>

<script>
// @ is an alias to /src
import MainTabber from "@/components/content/mainTabber/MainTabber.vue";

export default {
  name: "HomeView",
  components: {
    MainTabber,
  },
};
</script>

<style lang="less">
@import "@/assets/css/base.css";
@import "@/assets/iconfont/iconfont.css";
</style>
