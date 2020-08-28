<template>
    <main>
        <!-- 头部 -->
        <v-heater></v-heater>

        <div class="myone">
            <div class="myone1">
                <img src="https://img.ingping.com/images/activity/template/324/download_yp_icon.png" alt="">
                <div class="myone2">
                    <span>-.-</span>
                    <span>注册会员</span>
                </div>
            </div>
            <div class="myone3">
                <div class="myone3a">
                    <em>我的余额</em>
                    <i>￥0.00</i>
                </div>
            </div>
        </div>

        <div class="mytwo">
            <div class="mytwo1">
                <div class="mytwo_one">
                    <img src="https://img.ingping.com/images/activity/template/324/download_yp_icon.png" alt="">
                    <span>全部订单</span>
                </div>
            </div>
            <div class="mytwo2">
                <div class="mytwo2_one">
                    <div>
                        <img src="https://static.ingping.com/siteWap/images/phoneWapV2/item-icon01-v1.0.4.png" alt="">
                    </div>
                    <div>
                        待付款
                    </div>
                </div>
                <div class="mytwo2_one">
                    <div>
                        <img src="https://static.ingping.com/siteWap/images/phoneWapV2/item-icon02-v1.0.4.png" alt="">
                    </div>
                    <div>
                        待发货
                    </div>
                </div>
                    <div class="mytwo2_one">
                    <div>
                        <img src="https://static.ingping.com/siteWap/images/phoneWapV2/item-icon03-v1.0.4.png" alt="">
                    </div>
                    <div>
                        待收货
                    </div>
                </div>
                    <div class="mytwo2_one">
                    <div>
                        <img src="https://static.ingping.com/siteWap/images/phoneWapV2/item-icon04-v1.0.4.png" alt="">
                    </div>
                    <div>
                        待评价
                    </div>
                </div>
                    <div class="mytwo2_one">
                    <div>
                        <img src="https://static.ingping.com/siteWap/images/phoneWapV2/item-icon05-v1.0.4.png" alt="">
                    </div>
                    <div>
                        退换货
                    </div>
                </div>
            </div>
            <div class="mytwo3">
                <img src="https://static.ingping.com/siteWap/images/phoneWap/sdlhb-v1.0.0.png" alt="">
                
                晒单领微信红包
            </div>
        </div>
        <div class="myfour">
            <ul>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/user-icon-01-v1.0.4.png" alt="">
                    <p>我的收藏</p>
                </li>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/user-icon-02-v1.0.4.png" alt="">
                    <p>我的评价</p>
                </li>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/user-icon-03-v1.0.4.png" alt="">
                    <p>我的咨询</p>
                </li>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/user-icon-04-v1.0.4.png" alt="">
                    <p>我的投诉</p>
                </li>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/user-icon-05-v1.0.4.png" alt="">
                    <p>我的卡卷</p>
                </li>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/user-icon-06-v1.0.4.png" alt="">
                    <p>中奖纪录</p>
                </li>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/user-icon-07-v1.0.4.png" alt="">
                    <p>账号管理</p>
                </li>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/user-icon-08-v1.0.4.png" alt="">
                    <p>声卡调试</p>
                </li>
            </ul>
        </div>
        <div class="myfive">
            <ul>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/icon-lexiang-v1.0.0.png" alt="">
                    <span>音平乐享，音友原创翻唱 </span>
                </li>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/icon-yinshifu-v1.0.0.png" alt="">
                    <span>设备使用，有问题找音师傅</span>
                </li>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/list-01.png" alt="">
                    <span>音平资讯，了解行业一手音频资讯</span>
                </li>
            </ul>
        </div>

        <div class="mysix">
            <ul>
                <li>
                    <img src="https://static.ingping.com/siteWap/images/phoneWap/khfw-v1.0.0.png" alt="">
                    <span>客服服务</span>
                </li>
            </ul>    
        </div>
        <!-- 底部 -->
        <v-bottom></v-bottom>
    </main>
</template>
<script>
import bottom from './bottom.vue'  //底部样式
import heater from './heater.vue'  //头部样式
export default {
    components:{
        'v-bottom':bottom,
        'v-heater':heater,
         },
}
</script>
<style scoped>
    .myone{
            border: 1px solid #dddddd;
    background-color: #fff;
    margin: 10px;
    }
    .myone1{
        margin-bottom: 5px;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        font-size: 12px;
        border-bottom: 1px solid #eeeeee;
        padding-bottom: 10px;
        padding: 10px;
    }
    .myone1 img{
        width: 35px;
        height: 35px;
        background-size: cover;
    }
    .myone2{
        -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding-left: 10px;
    overflow: hidden;
}
    .myone2 span{
        display: block;
    height: 19px;
    line-height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .myone3{
            border-width: 1px 0 1px 0;
    text-align: center;
    background: #fff;
    }
    .myone3a{
            display: block;
    border-right: 1px solid #eeeeee;
    font-size: 14px;
    }
    .myone3 em{
            display: block;
    line-height: 24px;
    font-size: 14px;
    }
    .myone3 i{
            color: #ff3c3c;
    /* font-family: Futura-Medium; */
    font-size: 14px;
    }
    .mytwo{
        border: 1px solid #dddddd;
    background-color: #fff;
    margin: 10px;
    }
    .mytwo_one img{
            width: 18px;
    height: 18px;
    float: left;
    margin: 0px 3px 0 0;
    }
    .mytwo2{
        width: 100%;
    text-align: center;
    margin: 5px auto;
    height: 60px;
    border-bottom: 1px solid #eee;
    }
    .mytwo2_one{
        float: left;
    width: 20%;
    margin-top: 8px;
    }
    .mytwo3{
            border-top: 2px;
    border-color: #dddddd;  
        padding: 10px;
    }
    .mytwo3 img{
            width: 18px;
    height: 18px;
    float: left;
    margin: 0px 3px 0 0;
    }
    .myfour{
        width: 94%;
        height: 140px;
        text-align: center;
        margin: 0 auto;
            border: 1px solid #dddddd;
        background-color: #fff;
    }
    .myfour ul{
        padding-top:20px ;
        width: 100%;
    }
    .myfour li{
        padding-bottom: 15px;
        width: 25%;
        float: left;
    }
    .myfour li img{
        width: 22px;
        height: 22px;
    }
    .myfive{
     border: 1px solid #dddddd;
    background-color: #fff;
    margin: 10px;
    }
    .myfive li{
            position: relative;
    font-size: 14px;
    padding: 10px;
    border-bottom: 1px solid #eee;
    }
    .myfive li img{
        width: 18px;
    height: 18px;
    float: left;
    margin: 0px 3px 0 0;
    }
    .myfive li span{
        color: #20bbca;
    }
    .mysix{
            border: 1px solid #dddddd;
    background-color: #fff;
    margin: 10px;
    }
    .mysix li{
        padding: 10px;
    }
    .mysix img{
            width: 18px;
    height: 18px;
    float: left;
    margin: 0px 3px 0 0;
    }
</style>