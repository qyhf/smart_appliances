<template>
  <div class="tFooter">
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" :class="{'mui-active':bmTab==1}" @click="active(1)">
        <img class="ft-icon" v-if="bmTab!=1" src="../assets/tab/tab5.png">
        <img class="ft-icon" v-if="bmTab==1" src="../assets/tab/tab5-g.png">
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" :class="{'mui-active':bmTab==2}" @click="active(2)">
        <img class="ft-icon" v-if="bmTab!=2" src="../assets/tab/tab2.png">
        <img class="ft-icon" v-if="bmTab==2" src="../assets/tab/tab2-g.png">
        <span class="mui-tab-label">广场</span>
      </a>
      <a class="mui-tab-item" :class="{'mui-active':bmTab==3}" @click="active(3)">
        <img class="ft-icon" v-if="bmTab!=3" src="../assets/tab/tab1.png">
        <img class="ft-icon" v-if="bmTab==3" src="../assets/tab/tab1-g.png">
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>
  </div>
</template>


<script>
import { Toast, Tabbar, TabItem } from 'mint-ui';

export default {
  name: 'tFooter',
  computed: {
    bmTab(){
      return this.$store.state.bmTab;
    }
  },
  data(){
    return{
      
    }
  },
  watch:{
    
  },
  methods: {
    active(n){
      let that = this;
      this.$store.state.bmTab = n;
      if(n==1) this.$router.push({path:'/home'});
      if(n==2) this.$router.push({path:'/square'});
      if(n==3) this.$router.push({path:'/my'});
    }
  },
  created(){
    
  },
}
</script>


<style lang="scss">
.tFooter{
  position: fixed;
  bottom: 0;
  margin-top: 0.3rem;
  border-top: 1px solid #f5f5f5;
  z-index: 10;
  .mui-bar{
    background: rgba(237,237,237,0.90);
    box-shadow: none;
    height: 1.15rem;
    font-size: 0.20rem;
    padding-top: 0.05rem;
  }
  .mui-active{
    color: #2F4050 !important;
  }
}

.ft-icon{
  margin: 0 auto;
  width: 0.74rem !important;
  margin-bottom: 0.05rem;
}
</style>
