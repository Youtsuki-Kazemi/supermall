<template>
  <div id="app">
    <router-view />
    <main-tabber class="maintabber" />
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

.maintabber {
  z-index: 1000;
}
</style>
