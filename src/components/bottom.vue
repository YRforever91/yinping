<template>
    <main>
<div>
    <footer>
        <div class="footer_one">

            <div class="img">
                <router-link to='/ypApp'>
                    <img src="https://img.ingping.com/images/activity/template/347/footer_wechat_code.jpg" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
                    <!-- 可跳转 -->
                    <img src="https://img.ingping.com/images/activity/template/347/footer_download_icon.jpg" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
                </router-link>
            </div>
            <p>
                <b>下单立减5元</b>
                    "购物更轻松！"
            </p>
        </div>

        <div class="false"></div>

        <div class="footer_two">
            <div>
                <router-link to='/login'>
                    <div class="login">
                        <!-- 可跳转 -->
                        <p>登录</p>
                        <span> | </span>
                        <p>注册</p>
                    </div>
                </router-link>
                
                <p class="iph"><span>客服热线：</span>400-700-3638</p>
            </div>
            <div>
                <p>正品保证</p><span> | </span>
                <p>满99包邮</p><span> | </span>
                <p>七天退换</p><span> | </span>
                <p>售后服务</p>
            </div>
            <div>
                <ul>
                    <!-- 需要跳转 -->
                    <li v-for="(item,index) in list1">
                        <img :src="item.src" alt="">
                        <span>{{item.con}}</span>
                    </li>
                </ul>
            </div>
            <div>
                <p>增值电信业务经营许可证：粤B2-20110237 | 粤ICP备11032710号</p>
                <p>© 2011-2020 音平商城</p>
            </div>
            <div class="xxx">

            </div>
        </div>
    </footer>
</div>
<div class="ture"></div>
    </main>
</template>

<script>
export default {
     data(){
        return{
           list1:[
                {
                    src:'./src/assets/images/bottom_logo1-1.0.2.jpg',
                    con:'了解音频'
                },
                {
                    src:'./src/assets/images/bottom_logo1-1.0.2.jpg',
                    con:'触屏版'
                },
                {
                    src:'./src/assets/images/bottom_logo1-1.0.2.jpg',
                    con:'电脑版本'
                },
                {
                    src:'./src/assets/images/bottom_logo1-1.0.2.jpg',
                    con:'小程序'
                },
                {
                    src:'./src/assets/images/bottom_logo1-1.0.2.jpg',
                    con:'客户端'
                }
            ]
        }
}
}
</script>

<style scoped>
    main{
        background: white;
    }
    .footer_one{
        min-height: 0;
        overflow: hidden;
        border-top: 10px solid #eee;
        border-bottom: 10px solid #eee;
        background: #fff;
        padding: 20px 0;
        width: 100%;
    }
    .footer_one p{
        display: block;
        width: 100%;
        text-align: center;
        font-size: 20px;
        color: #666;
        padding-top: 18px;
    }
    .footer_one .img img:nth-of-type(1){
        width: 40%;
        margin-left: 5%;
        border-right: 1px solid #666;
        padding-right: 20px;
    }
    .footer_one .img img:nth-of-type(2){
        width: 35%;
        margin-left: 7%;
        margin-top: 2.5%;
    }
    .false{
        height: 10px;
        background: #eee;
    }
    .footer_two div:nth-of-type(1){
        border-bottom: 1px solid #ebeced;
        overflow: hidden;
        padding-bottom: 5px;
        padding-top: 5px;
    }
    .login{
        float: left;
        margin-left: 20px;
        padding: 10px 0;
        padding-bottom: 0;
    }
    .login span{
        float: left;
        margin: 0 5px;
        color: #ccc;
    }
    .login p{
        float: left;
        font-size: 14px 
    }
    .iph{
        float: right;
        margin-right: 20px;
        border: none;
        color:#ff6600;
        margin-top:6px;
    }
    .footer_two div:nth-of-type(2){
        padding: 2px;
        overflow: hidden;
        border-bottom: 1px #ebeced solid;
        margin:0 auto;
    }
    .footer_two div:nth-of-type(2) p{
        float: left;
        /* padding: 0px 6px; */
        width:24%;
        color: #888;
        text-align: center;
        margin:2px auto;
        display: block;
    }
    .footer_two div:nth-of-type(2) span{
        float: left;
        color: #ddd;
        display: block;
    }
    .footer_two div:nth-of-type(3) ul li img{
        width: 42px;
        height: 42px;
        margin-left: 3px;
    }
    .footer_two div:nth-of-type(3) ul li{
        width: 20%;
        text-align: center;
        display: block;
        float: left;
        padding: 20px 0px;

    }
    .footer_two div:nth-of-type(3) ul li span{
        font-size: 13px;
        display: block;
        color: #888;
    }
    .footer_two div:nth-of-type(4){
        font-size: 9px;
        text-align: center;
        padding: 5px 0 8px;
        color: #888;
        line-height: 14px;
    }
    .ture{
        height: 30px;
    }
    .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    }
    .xxx{
        width: 100%;
        height: 20px;
        background: #eee;
    }
</style>