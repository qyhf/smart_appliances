<template>
  <div class="login">
    <div class="wrapper">
        <div class="top">
            <p>登录
                <span></span>
            </p>
        </div>
        <div class="content">
            <div class="phone">
                <span></span>
                <input type="text" placeholder="请输入手机号">
            </div>
            <div class="password">
                <span></span>
                <input type="password" placeholder="请输入密码号">
            </div>
            <div class="forget">
                <a href="#">忘记密码</a>
            </div>
        </div>
        <div class="btn">
            <button>登录</button>
        </div>
        <div class="register">
            <span class="line"></span>
            <a href="#">新用户注册</a>
            <span class="line"></span>
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
$font:rem(50);
@mixin input($img){
  display:flex;
  margin:rem(46) rem(160);
  border-bottom:1px solid #fff;
  span{
      display:block;
      width:rem(82);
      height:rem(96);
      background-image:url($img);
      background-repeat: no-repeat;
      background-size:rem(82) rem(96);
      background-position: 0 0;
      margin:auto 0;
  }
  input{
    display:inline-block;
    border:0;
    margin-bottom:rem(0);
    font-size:$font;
    font-family: "SimSun";
    background-color:transparent;
    
  }
  input::-webkit-input-placeholder{
    font-size:$font;
    font-family: "SimSun";  
    color:#fff;
  }
}
body{
    height:100%;
}
.login{
  padding: rem(16);
  font-size: rem(12);
  width:100%;
  height:100%;
  background-image:url("../../assets/img/login_background.png");
  background-repeat: no-repeat;
  background-size:100% 100% ;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  .wrapper{
      .top{
          p{
            font-family: "SimSun";
            font-size:rem(72);
            color:#000;
            padding:rem(670) rem(162) 0;
            font-weight:bold;
            color:#fff;
            span{
                display:block;
                width:rem(216);
                height:rem(60);
                background: linear-gradient(to right, #1fb3ff,#47dcf4);
                background-color:#91fbf3;
                margin-left:rem(-18);
                margin-top:rem(-50);
            }
        }
      } 
      .content{
          margin-top:rem(660);
          .phone{
              
              @include input("../../assets/img/phone.png");
          }
          .password{
              @include input("../../assets/img/password.png");
          }
          .forget{
              margin:0 rem(160);
              a{
                  display:block;
                  font-family: "SimSun";
                  font-size:rem(42);
                  color:#fff;
                  text-align:right;
              }
          }
      }
      .btn{
        padding:0 rem(160) ;
        margin-top:rem(120);
        button{
            display:block;
            width:100%;
            height:rem(156);
            color:#5cc9fa;
            background-color:#fff;
            font-size:rem(52);
            border-radius:rem(128);
            }
        }
        .register{
            display:flex;
            margin:rem(64) rem(160) 0;
            justify-content: center;
            a{
                font-size:rem(24);
                padding:0 rem(52);
                color:#fff;
                font-family: "SimSun";

            }
            .line{
                display:block;
                height:1px;
                width:rem(432);
                background-color:#fff;
                margin:auto 0;
            }
        }
    } 
 
}
</style>

