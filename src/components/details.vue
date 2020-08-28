<template>
    <main>
        <!-- 头部 -->
        <v-heater></v-heater>
        <!-- 四个点击 -->
        <div class="fourtext">
            <ul>
                <li>基本信息</li>
                <li>套装详情</li>
                <li>评价</li>
                <li>咨询</li>
            </ul>
        </div>

        <div class="foot">
            <!-- 轮播图 -->
            <div class="footlunbo">
                <mt-swipe :auto="4000">
                    <mt-swipe-item>
                        <img src="../assets/images/202008211350404107071.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../assets/images/202004301152095631060.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../assets/images/20200211144138799572.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../assets/images/202004301154042205469.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../assets/images/202004021326116864672.jpg" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <!-- 价格块 -->
            <div class="footmoney">
                <span>￥5000</span>
                <span>￥5000</span>
                <div>
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/btn-d-col-v1.0.1.png" alt="">
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/btn-d-share-v1.0.1.png" alt="">
                </div>
            </div>
            <!-- 简介块 -->
            <div class="foottext">
            得胜MX1声卡搭配得胜PC-K220麦克风 电脑手机直播K歌声卡套装 抖音快手主播直播录音设备全套
            </div>
            <!-- 小文字 -->
            <div class="footsmall">
                    套装分类: 网络直播
            </div>
            <!-- 服务保证 -->
            <div class="footserve">
                <p>服务保障：</p>
                <ul>
                    <li>
                        <span>
                            <img src="https://static.ingping.com/siteWap/images/phoneWapV2/servicegua-v1.0.0.jpg" alt="">
                            支持七天无理由退货
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src="https://static.ingping.com/siteWap/images/phoneWapV2/servicegua-v1.0.0.jpg" alt="">
                            正品保证 官方保修
                        </span>
                    </li>
                    <li>
                        <span>  
                            <img src="https://static.ingping.com/siteWap/images/phoneWapV2/servicegua-v1.0.0.jpg" alt="">
                            支持货到付款
                        </span>
                    </li>
                </ul>
                <div>
                    <img src="https://static.ingping.com/siteWap/images/m_certified-1.0.0.jpg" alt="">
                </div>
            </div>
            <!-- 赠品 -->
            <div class="footfree">
                <p>赠 品:</p>
                <ul>
                    <li>
                        <img src="https://img.ingping.com/images/product/S/20204/202004210923375278319B.jpg " alt="">
                        <p>x 1</p>
                    </li>
                    <li>
                        <img src="https://img.ingping.com/images/product/S/20204/202004171042114303805.jpg" alt="">
                        <p>x 1</p>
                    </li>
                    <li>
                        <img src="https://img.ingping.com/images/product/S/20203/202003250943399323183.jpg" alt="">
                        <p>x 1</p>
                    </li>
                </ul>
            </div>
            <!-- 优惠 -->
            <div class="footyouhui">
                <span>优  惠:</span>
                <div>
                    <span>限时</span>
                    <span>已优惠</span>
                    <span>￥20.00</span>
                </div>
            </div>
            <!-- 促销 -->
            <div class="footcuxiao">
                <span class="cuxiao">促 销：</span>
                <div>
                    <span class="xx">买送</span>
                    <span>助力开学季 >> 满699送超值好礼</span>
                    <div class="cuxiao1">
                        <span>立减</span>
                        <span>小程序下单立减五元>></span>
                    </div>
                </div>
            </div>
            <!-- 选购 -->
            <div class="footbuy">
                <p>已 选：</p>
                <p>1套</p>
                <img src="https://static.ingping.com/siteWap/images/phoneWapV2/more-v1.0.0.png" alt="">
            </div>
            <!-- 配送 -->
            <div class="footpeisong">
                <span>配 送：</span>
                <span>现货，21:00前完成下单当天发货，预计1-3天到达</span>
                <span class="foorpeisongs">现在下单，立享满99元包邮   运费说明</span>
            </div>
            <!-- 推荐理由 -->
            <div class="foottuijian">
                <h2>推荐理由</h2>
            </div>
            <!-- 简介 -->
            <div class="textp">
                <p>
24种电音基调，唱电音歌曲更稳更轻松，内置高品质DSP芯片，9种美声效果，一键切换，支持双手机直播，自带48V供电通用性更强；搭配PC-K220麦克风，全音域拾音，让您只录进纯净的声音！适用于室内直播，网络主播，K歌录音，连麦对唱等应用场景。</p>
            </div>
            <!-- 视频 -->
            <div class="foottuijian">
                <h2>视频推荐</h2>
            </div>
            <!-- 视频 -->
            <div class="footmovie">
                <video src="https://video.ingping.com/e5bfcf8f105a4f62bc9bab0037a1e960/767e70e66bdb4dd18ee02a5ef60fb11f-0561dd5dc242c75763797452dd710906-ld.mp4" controls></video>
            </div>
            <!-- 底部 -->
            <div class="footbot">
                <div class="footbotone">
                    <img src="https://static.ingping.com/siteWap/images/phoneWapV2/yinge.png" alt="">
                    <p>在线客服</p>
                </div>
                <router-link to="/shoppingcar/">
                    <div class="footbotone">
                        <img src="https://static.ingping.com/siteWap/images/phoneWapV2/shop-v1.0.1.png" alt="">
                        <p>购物车</p>
                    </div>
                </router-link>    
                <div class="tes">
                    加入购物车
                </div>
                <div class="tes1">
                    立即购买
                </div>
            </div>
            <div class="ppp">

            </div>
        </div>
    </main>
</template>
<script>
import heater from './heater.vue'
export default {
    components:{
        'v-heater':heater,
    }
}
</script>

<style scoped>
    .fourtext{
        width: 100%;
        height: 37px;
    }
    .fourtext ul{
        width: 100%;
        overflow: hidden;
    }
    .fourtext ul li{
        width: 25%;
        float: left;
        text-align: center;
    }
    .footlunbo .mint-swipe-items-wrap{
        padding-bottom: 29.46%;
    }
    .footlunbo{
        height: 414.4px;
    }
    .footlunbo img{
        margin: 2px 0px;
        width: 100%;
        height: 414.4px;
    }
    .footmoney{
        padding: 10px 20px;
    }
    .footmoney div{
        float: right;
        position: relative;
        top: 0px;
    }
    .footmoney img{
        width: 20px;
        padding: 0px 10px;
    }
    .foottext{
        padding:5px 5px;
    }
    .footsmall{
        font-size: 12px;
        margin-top: 13px;
        margin-left: 10px;
    }
    .footserve{
        width: 100%;
        overflow: hidden;
    }
    .footserve p{
        font-size: 12px;
        display: inline-block;
        padding-left: 10px;
    }
    .footserve ul{
        
        position: relative;
        left: 85px;
        top: -20px;
    }
    .footserve span{
        margin-top: 5px;
        background-color: #edf3fa;
        border: 1px solid #6192cd;
        color: #2b62a3;
        height: 20px;
        line-height: 20px;
        display: inline-block;
        padding-right: 3px;
    }
    .footserve img{
        vertical-align: top;
        margin-right: 2px;
        width: 20px;
        height: auto;
    }
    .footserve div img{
        top: -100px;
        float: right;
        position: relative;
        width: 20%;
        overflow: hidden;
    }
    .footfree{
        width: 100%;
        overflow: hidden;
    }
    .footfree li{
        position: relative;
        float: left;
        left: 50px;
        top: -20px;
        padding: 0px 10px;
    }
    .footfree img{
        width: 25px;
    }
    .footfree p{
        font-size: 12px;
        padding: 0px 10px;
    }
    .footfree li p{
        font-size: 8px;
        text-align: center;
        color: tomato;
        
    }
    .footyouhui{
        width: 100%;
    }
    .footyouhui span{
        color: #333;
        font-size: 10px;
        margin-left: 17px;
        font-weight: 400;
        margin-bottom: 10px;
        float: left;
    }
    .footyouhui div{
        height: auto;
        padding: 0 0px;
        width: 72%;
        float: left;
    }
    .footyouhui div :nth-of-type(1){
        color: rgb(255,102,0);
        background-color: #fff!important;
        border: 1px solid rgb(255,102,0)!important;
        border-radius: 5px;
    }
    .footyouhui div :nth-of-type(3){
        color: rgb(255,102,0)!important;
    }
    .footcuxiao{
        width: 100%;
        overflow: hidden;
    }
    .cuxiao{
        color: #333;
        font-size: 10px;
        margin-left: 10px;
        font-weight: 400;
        margin-bottom: 10px;
        float: left;
    }
    .xx{
        color: rgb(255,102,0);
        background-color: #fff!important;
        border: 1px solid rgb(255,102,0)!important;
        border-radius: 5px;
    }
    .footcuxiao div :nth-of-type(2){
        color: red;
        background-color: #fff!important;
        border: 1px solid rgb(255,102,0)!important;
        border-radius: 5px;
    }
    .cuxiao1{
        width: 70%;
        overflow: hidden;
        margin-left:60px ;
        margin-top: 10px;
    }
    .cuxiao1 :nth-of-type(1){
        color: rgb(255,102,0);
        background-color: #fff!important;
        border: 1px solid rgb(255,102,0)!important;
        border-radius: 5px;
    }
    .footcuxiao span{
        font-size: 10px;
        padding: 0px 8px;
    }
    .footbuy{
        width: 100%;
        overflow: hidden;
    }
    .footbuy p{
         font-size: 10px;
        float: left;
        padding-top: 10px;
    }
    .footbuy img{
        float: right;
            width: 30px;
    height: 30px;
    }
    .footpeisong{
        width: 100%;
        
        overflow: hidden;
    }
    .footpeisong span{
        display: inline-block;
    }
    .footpeisong :nth-of-type(1){
        width: 20%;
        float: left;
        font-size: 10px;
    }
    .footpeisong  :nth-of-type(2){
        width: 70%;
        float: left;
        font-size: 10px;
    }
    .foorpeisongs{
        width: 70%;
        float: right;
        color: rgb(255,102,0)!important;
        font-size: 10px;
    }
    .foottuijian{
        width: 100%;
        overflow: hidden;
        margin-top: 10px;
        border-bottom: 1px solid #ddd;
    }
    .foottuijian h2{
        font-size: 18px;
        font-weight:bold;
    }
    .footmovie{
        width: 100%;
        height: 250px;
    }
    video{
        width: 100%;
        height: 100%;
    }
    .footbot{
        width: 100%;
        overflow: hidden;
        position: fixed;
        bottom:0;
        z-index:999;
    }
    .footbotone{
        width: 20%;
        background: #eee;
        float: left;
        height: 50px;
    }
    .footbotone img{
        display: inline-block;
        width: 23px;
        height: 23px;
        position: relative;
        right: -22px;
    }
    .footbotone p{
        font-size: 10px;
        color: black;
        display: block;
        line-height: 15px;
        margin-bottom: 6px;
        text-align: center;
    }
    .tes{
        width: 30%;
        float: left;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-weight: 400;
        background: #ffaa00;
    }
    .tes1{
        width: 30%;
        float: left;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-weight: 400;
        background:red;
    }
    .ppp{
        width: 100%;
        height: 50px;
        background: #eee;
    }
    .textp{
        line-height: 24px;
    font-size: 12px;
    padding: 10px 10px 0;
    }
</style>