<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" :class="{ active: isActive }">
      <slot name="item-icon"></slot>
    </div>
    <div v-else :class="{ active: isActive }">
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <!-- :style="activeStyle"-->
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    //定义props对象获取父级传进来的值
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      //判断当前活跃路径
      return this.$route.path.indexOf(this.path) !== -1;
      //   return this.$route.path === this.path;
    },
    activeStyle() {
      //根据当前活跃路径，赋予样式
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  /* line-height: 49px; */
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
