<template>
  <div id="app">
    <!-- <router-view/> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import api from './utils/api.js'
import { aGet, aPost } from './utils/request.js'

export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  methods: {
    
  },
  created(){
    
  },
  mounted(){

  }
}
</script>

