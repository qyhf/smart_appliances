import Vue from "vue";
import Router from "vue-router";
import base from "../utils/api.js";
import { aGet, aPost } from "../utils/request.js";
import { Toast } from "mint-ui";

import index from "@/pages/index";
import home from "@/pages/home/home";
import store from "../store/store";
import register from "@/pages/register/register";
import login from "@/pages/login/login";
import _index from "@/pages/index/index";

Vue.use(Router);

const routes = [
  // 有底部的动态路由
  // {
  //   path: "/",
  //   name: "home",
  //   component: index,
  //   children: [
  //     { path: "home", component: home, meta: { index: 1, title: "首页" } }
  //   ]
  // }
    {
      path: "/",
      name: "register",
      component:register,
    },
    {
      path: "/login",
      name: "login",
      component:login,
    },
    {
      path: "/index",
      name: "index",
      component:_index,
    }

];

const router = new Router({
  mode: "hash",
  routes
});

router.beforeEach((to, from, next) => {
  /*if(to.path=='/login'){
    next()
  } else {
    if(localStorage.getItem("userInfo")) {
      next();
    } else {
      Toast({message:'请先登录', position:'bottom', duration:1000 })
      setTimeout(function(){
        next({ path: '/login', query: { redirect: to.fullPath }})
      }, 1000)
    }
  } */
  next();
});

export default router;
