<template>
  <div class="register">
    <div class="wrapper">
      <div class="top">
        <p>新用户注册
          <span></span>
        </p>
      </div>
      <div class="content">
        <div class="phone">
          <div class="left">
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="right">
            <a>获取验证码</a>
          </div>
          
        </div>
        <div class="code">
          <input type="text" placeholder="请输入验证码">
        </div>
        <div class="password">
          <input type="password" placeholder="请设置您的密码（最少8位。字母+数字）">
        </div>
        <div class="agreement">
          <van-radio-group v-model="radio">
            <van-radio checked-color="#5cc9fa" name="1">我已阅读并同意《隐私条款》及《用户服务协议》</van-radio>
            <van-radio checked-color="#5cc9fa" name="2">我已阅读并同意《隐私条款》及《用户服务协议》</van-radio>
          </van-radio-group>
        </div>
        
      </div>
      <div class="btn">
        <button>注册</button>
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
        radio: '1'
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
$font:rem(50);
@mixin input{
  margin:rem(46) rem(160);
  border-bottom:1px solid #5cc9fa;
  input{
    display:inline-block;
    border:0;
    font-size:$font;
    font-family: "SimSun";
    margin-bottom:0;
  }
  input::-webkit-input-placeholder{
    font-size:$font;
    font-family: "SimSun";  
  }
  
}
body{
  background-color:#fff;
}
.register{
  padding: rem(16);
  font-size: rem(12);
  
  .wrapper{
    width:100%;
    .top{
      width:100%;
      height:rem(684);
      background: linear-gradient(to bottom, #1cb1ff, #a9eefa,#fff);
      p{
        font-family: "SimSun";
        font-size:rem(72);
        color:#000;
        padding:rem(466) rem(160) 0;
        font-weight:bold;
        span{
          display:block;
          width:rem(390);
          height:rem(60);
          background: linear-gradient(to right, #cbf7fb, #a5f2f9,#92faf3);
          margin-left:rem(18);
          margin-top:rem(-50);
        }
      }

    }
    .content{
      .phone{
        display:flex;
        flex-wrap: nowrap;
        @include input;
        .left{
          width:70%;
        }
        .right{
          width:30%;
          a{
            display:block;
            margin-top:rem(10);
            color:#999;
            font-size:$font;
            text-align: right;
          }
        }
       
      }
      .code{
        @include input;
      }
      .password{
        @include input;
      }
      .agreement{
        margin:rem(46) rem(160);
        .van-radio{
          margin-bottom:rem(48);
        }
        .van-radio__label{
          font-size:rem(36);
          color:#ccc;
          font-family:"SimSun"
        }
      }
    }
    .btn{
      padding:0 rem(160) ;
      margin-top:rem(104);
      button{
        display:block;
        width:100%;
        height:rem(156);
        color:#fff;
        background-color:#5cc9fa;
        font-size:rem(52);
        border-radius:rem(128);
      }
    }
     
  }
 
}


</style>

