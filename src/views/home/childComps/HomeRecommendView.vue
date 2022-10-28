<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  padding: 10px 0 20px;
  text-align: center;
  font-size: 12px;
  border-bottom: 10px solid #eee;

  .recommend-item {
    flex: 1;

    img {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }
  }
}
</style>
