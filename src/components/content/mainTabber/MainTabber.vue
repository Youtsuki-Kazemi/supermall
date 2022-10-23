<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <i class="iconfont icon-home icon" slot="item-icon"></i>
      <i class="iconfont icon-top-filling icon" slot="item-icon-active"></i>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <i class="iconfont icon-menu1 icon" slot="item-icon"></i>
      <i class="iconfont icon-top-filling icon" slot="item-icon-active"></i>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <i class="iconfont icon-sign-out icon" slot="item-icon"></i>
      <i class="iconfont icon-top-filling icon" slot="item-icon-active"></i>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <i class="iconfont icon-user icon" slot="item-icon"></i>
      <i class="iconfont icon-top-filling icon" slot="item-icon-active"></i>
      <div slot="item-text">个人</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style lang="less" scoped></style>
