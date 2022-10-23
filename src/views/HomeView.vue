<template>
  <div class="home">
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
