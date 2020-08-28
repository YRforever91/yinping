<template>
    <main>
        <v-heater></v-heater>
        <div class="loginbox">
            <div class="in">
                <div class="l_name">
                    <input type="text" placeholder="请输入账号" id="userName" name="userName">
                </div>
                <div class="ps">
                    <input type="password" placeholder="请输入密码" id="password" name="password">
                </div>
            </div>
            <div class="lg">
                <input type="submit" class="btn" value="登录">
            </div>
            <p>
                <span>忘记密码？</span>
                <span>快速注册</span>
            </p>
        </div>
        <v-moreact></v-moreact>
        <v-bottom></v-bottom>

    </main>
</template>
<script>
import bottom from './bottom.vue'  //底部样式
import heater from './heater.vue'  //头部样式
import moreact from './moreact.vue' //更多活动
export default {
    components:{
        'v-bottom':bottom,   
        'v-heater':heater,
        'v-moreact':moreact
    }
}
 </script>
<style>
    .loginbox{
        width:100%;
        height:300px;
        /* margin: 5%; */
        overflow: hidden;
    }
    input{
        border:none;
        
    }
    .in input{
        position: relative;
        left:10px;
        top:2px;
    }
    .l_name{
        height:20px;
        border: 1px solid #ff6600;
        margin:5%;
        background:#fff;
        border-radius:10px;
    }
    .ps{
        margin:5%;
        height:20px;
        border: 1px solid #ff6600;
        background:#fff;
        border-radius:10px;
    }
    .lg{
        width:90%;
        background: #ff6600;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin:5%;
        border-radius:10px;
    }
    .btn{
        border:none;
        background: #ff6600;
    }
    div p{
        margin:5%;
    }
</style>