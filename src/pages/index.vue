<template>
  <div id="lbWallct">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <!-- <tFooter></tFooter> -->
  </div>
</template>


<script>
import Vue from "vue";
import $ from "jquery";
// import tFooter from "../components/tfooter.vue";

export default {
  name: "index",
  data() {
    return {
      transitionName: "slide-left",
      pubShow: false
    };
  },
//   components: {
//     tFooter
//   },
  computed: {
    bmTab() {
      let bmTab = this.$store.state.bmTab;
      if (bmTab == 3) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "visible");
      }
      //console.log('bmTab', bmTab);
      return bmTab;
    }
  },
  methods: {},
  beforeRouteUpdate(to, from, next) {
    let isBack = this.$router.isBack;
    if (isBack) {
      this.transitionName = "slide-right";
    } else {
      this.transitionName = "slide-left";
    }
    this.$router.isBack = false;
    next();
  },
  mounted() {}
};
</script>

<style lang="scss">
#lbWallct {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  .child-view {
    position: absolute;
    width: 100%;
    transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
    height: 100%;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
}
</style>
