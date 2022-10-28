<template>
  <div id="home">
    <nav-bar class="nav">
      <div slot="center">购物中心</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper :banners="banner" />
      <home-recommend-view :recommends="recommends" />
      <home-feature-view />
      <tab-contral :titles="['流行', '新款', '精选']" class="tab-contral" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="BackTopClick">
      <i class="iconfont icon-arrow-up-bold"></i>
    </back-top>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "@/components/common/backtop/BackTop.vue";
import TabContral from "@/components/content/tabContral/TabContral.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import HomeFeatureView from "./childComps/HomeFeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    BackTop,
    TabContral,
    GoodsList,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
  },
  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [
            { show: { img: "https://pic.ntimg.cn/file/20210907/31848808_154026472103_2.jpg" }, title: "我是title", price: "1000", cfav: 20 },
            { show: { img: "http://i1.go2yd.com/image.php?url=0WL4QR2H6v" }, title: "我是title2", price: "1000", cfav: 40 },
            { show: { img: "https://inews.gtimg.com/newsapp_bt/0/15135015628/1000" }, title: "我是title3", price: "10", cfav: 204 },
            { show: { img: "http://hbimg.huabanimg.com/2858820b85e4c5a7d07f48ffb3fe6858751f6c35177536-s7hBpq_fw236" }, title: "我是title4", price: "32240", cfav: 20444 },
          ],
        },
        new: {
          page: 0,
          list: [
            {
              show: {
                img: "https://upload-bbs.mihoyo.com/upload/2021/06/08/168585685/4f2e2c8fa3ff7d5a5ed9cb62a42a10f2_7670232540367286547.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg",
              },
              title: "我是title",
              price: "1000",
              cfav: 20,
            },
            {
              show: {
                img: "https://upload-bbs.mihoyo.com/upload/2021/01/30/184621160/8973f9d446ece41ad6d761acced9a494_8356339554585708563.png?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png",
              },
              title: "我是title2",
              price: "1000",
              cfav: 40,
            },
            { show: { img: "https://inews.gtimg.com/newsapp_bt/0/15135015628/1000" }, title: "我是title3", price: "10", cfav: 204 },
            { show: { img: "http://hbimg.huabanimg.com/2858820b85e4c5a7d07f48ffb3fe6858751f6c35177536-s7hBpq_fw236" }, title: "我是title4", price: "32240", cfav: 20444 },
          ],
        },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    BackTopClick() {
      console.log("发生点击");
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          this.banner = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
        .catch((err) => {
          console.log("出错了\n" + err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  height: 100vh;
  padding-top: 44px;
}
.nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  // width: 100vw;
  height: 44px;
  z-index: 999;
  background-color: var(--color-tint);
  color: white;
}
.tab-contral {
  position: sticky; //相当于state + fixed
  top: 44px;
  z-index: 9;
}
.content {
  height: 100%;
  // height: 400px;
  overflow: hidden;
}
</style>
