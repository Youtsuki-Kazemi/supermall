import Vue from "vue";
import VueRouter from "vue-router";
//懒加载
const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Cart = () => import("../views/cart/Cart");
const Profile = () => import("../views/profile/Profile");
//安装插件
Vue.use(VueRouter);
//创建路由对象
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/category",
    name: "category",
    component: Category,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
