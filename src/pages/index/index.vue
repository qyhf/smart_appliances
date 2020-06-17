<template>
  <div class="index">
    <div class="wrapper">
        <div class="nav">
            <span class="app"></span>
            <span class="more"></span>
        </div>
        <div class="icon">
            <img src="../../assets/img/house.png"/>
            <p>有新智能用电</p>
        </div>
        <div class="content">
            <ul>
                <li>
                    <img src="../../assets/img/pc.png" />
                    <p>智能终端</p>
                </li>
                <li>
                    <img src="../../assets/img/组 895.png" />
                    <p>定时控制</p>
                </li>
                <li>
                    <img src="../../assets/img/组 906.png" />
                    <p>电量</p>
                </li>
                <li>
                    <img src="../../assets/img/组 887.png" />
                    <p>一键开关</p>
                </li>
                <li>
                    <img src="../../assets/img/组 881.png" />
                    <p>漏报自查</p>
                </li>
                <li>
                    <img src="../../assets/img/组 876.png" />
                    <p>安全信息</p>
                </li>
             
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
  import api from '../../utils/api'  
  import { aGet, aPost } from '../../utils/request' 
  import $ from 'jquery'

  export default {
    data(){
      return {
        
      }
    },
    methods:{
      
    },

    created(){
      
    },

    mounted(){
      $(window).scrollTop(0)
    }
  }
</script>

<style lang="scss">
@function rem($len) {
  @return $len * 16/750 + rem;
}
body{
    background-color:#f8f8f8;
}
.index{
  width:100%;
  height:50rem;
  padding: rem(16);
  font-size: rem(12);
  background:linear-gradient(to bottom, #1cb1ff, #a9eefa,#fff);
  .wrapper{
      margin:rem(164) rem(86) 0;
      position:relative;
      .nav{
          .app{
              display:inline-block;
              width:rem(82);
              height:rem(82);
              background-image:url("../../assets/img/app.png");
              background-repeat: no-repeat;
          }
          .more{
              display:inline-block;
              width:rem(82);
              height:rem(82);
              background-image:url("../../assets/img/more.png");
              background-repeat: no-repeat;
              position:absolute;
              top:0;
              right:0;
          }
      }
      .icon{
          margin-top:rem(258);
          text-align: center;
          img{
              display:block;
              margin:0 auto;
            
          }
          p{
              font-size:rem(72);
              color:#fff;
              margin-top:rem(74);
          }
      }
      .content{
          margin-top:rem(380);
          ul{
              display:flex;
              flex-wrap: wrap;
              li{
                  height:rem(534);
                  width:rem(390);
                  background-color:#fff;
                  border-radius: rem(100);
                  text-align: center;
                  font-size:rem(52);
                  padding:rem(58) 0;
                  margin:0 rem(76)  rem(64) 0;
                  img{
                      display:block;
                      margin:0 auto rem(80);

                  }
                  
              }
              li:nth-child(3n){
                  margin-right:0;
              }
          }
      }
  }
}
</style>

