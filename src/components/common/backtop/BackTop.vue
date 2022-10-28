<template>
  <div class="backtop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  //   methods: {
  //     TopClick() {
  //       console.log("回到");
  //     },
  //   },
};
</script>

<style lang="less" scoped>
.backtop {
  position: fixed;
  right: 8px;
  bottom: 60px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px #eee;
}
</style>
