<template>
  <div class="tab-contral">
    <div v-for="(item, index) in titles" :key="index" class="tab-contral-item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContral",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style lang="less" scoped>
.tab-contral {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: white;
  .tab-contral-item {
    flex: 1;
    span {
      padding: 5px;
      padding-bottom: 2px;
    }
  }
}
.active {
  color: var(--color-high-text);
  span {
    border-bottom: 3px solid var(--color-tint);
  }
}
</style>
