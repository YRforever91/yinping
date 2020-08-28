<template>
    <main>
        <!-- 头部 -->
        <v-heater></v-heater>

        <!-- 中间 -->
        <!-- 第一块 -->
        <div class="actone">
            <div class="title">
                <div class="small">
                    <i class="i1"></i>
                    <i class="i2"></i>
                </div>
                <span>
                    热门
                    <b>活动</b>
                </span>
                <div class="small2">
                    <i class="i1"></i>
                    <i class="i2"></i>                 
                </div>
            </div>
            <div class="lunbo">
                <mt-swipe :auto="4000">
                    <mt-swipe-item>
                        <img src="../assets/images/202007241127180642664.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../assets/images/202008211138080615232.jpg" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <!-- 第二块 -->
        <div class="acttwo">
            <div class="title">
                <div class="small">
                    <i class="i1"></i>
                    <i class="i2"></i>
                </div>
                <span>
                    为你
                    <b>推荐</b>
                </span>
                <div class="small2">
                    <i class="i1"></i>
                    <i class="i2"></i>                 
                </div>
            </div>
            <ul>
                <li>
                    <img src="../assets/images/wntj_01.jpg" alt="">
                </li>
                <li>
                    <img src="../assets/images/wntj_02.jpg" alt="">
                </li>
                <li>
                    <img src="../assets/images/wntj_03.jpg" alt="" >
                </li>
            </ul>
        </div>

        <!-- 第三块 -->
        <div class="acttherr">
            <div class="title">
                <div class="small">
                    <i class="i1"></i>
                    <i class="i2"></i>
                </div>
                <span>
                    特色
                    <b>专场</b>
                </span>
                <div class="small2">
                    <i class="i1"></i>
                    <i class="i2"></i>                 
                </div>
                <ul>
                    <li>
                        <img src="../assets/images/tszc_01.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_02.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_03.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_04.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_05.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_06.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_07.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_08.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_09.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_10.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_12.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/images/tszc_14.jpg" alt="">
                    </li>
                </ul>
            </div>
        </div>

        <!-- 第四块 -->
        <div class="actfour">
            <div class="title">
                <div class="small">
                    <i class="i1"></i>
                    <i class="i2"></i>
                </div>
                <span>
                    新品
                    <b>发布</b>
                </span>
                <div class="small2">
                    <i class="i1"></i>
                    <i class="i2"></i>                 
                </div>
            </div>
            <ul>
                <li>
                    <img src="../assets/images/202007241114270297755.jpg" alt="">
                    <p>得胜MX1声卡带“电”来袭！自带锂电池和48V供电，9种美声效果，录音级别不挑人声，全面兼容各种场景，让您直播瞬间闪亮！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241115190493354.jpg" alt="">
                    <p>得胜TAK55采用华奢双面镀金振膜设计，可调节3种指向性，全方位拾音，得胜全新打造的高品质麦克风系列，音质再升级！！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241114030714793.jpg" alt="">
                    <p>得胜PH130采用镀金振膜音头，让声音的透晰度更高，声卡麦克风一体化即插即用无需繁琐调试，支持双手机直播，颜值品质双在线！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241115020666652.jpg" alt="">
                    <p>得胜PH125麦克风声麦一体好声音1秒立现，双手机直播和播放伴奏功能，一麦玩转K歌直播！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241112390327741.jpg" alt="">
                    <p>得胜PC-K850麦克风超低底噪纯净无暇的声音，音质得到全面飞跃，一声便定胜负，K歌、录音从容驾驭！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241113090524719.jpg" alt="">
                    <p>莱维特STREAM 4x5声卡蕴含奥地利音乐血统和精工品质，由专业的音频技术团队研发打造，人气主播热捧，彰显轻奢尊贵的大咖身份！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241110540893639.jpg" alt="">
                    <p>莱维特MTP LIVE麦克风是一款风靡网红直播圈的高品质手持电容麦，灵活性强，音色细腻动感，高灵敏度能够捕捉演唱的每一个瞬间！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241117520790917.jpg" alt="">
                    <p>MOBILE·U VST/MOBILE·U MINI网络K歌声卡是网络K歌、主持喊麦、语音聊天、音乐欣赏、HIFI监听、专业录音的不二选择！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241111540524419.jpg" alt="">
                    <p>得胜PC-K810电容麦克风 天生闪亮，为主播发声！麦克风高灵敏度，细节捕捉到位，声音清亮饱满有质感，对人声、乐器的录制稳重扎实。</p>
                </li>
                <li>
                    <img src="../assets/images/202007241111400507479.jpg" alt="">
                    <p>SHUER舒尔PAG27录音麦克风在音平商城火热发售！小而精悍，让你的声音更闪耀！个人录音、乐器录音、网络直播K歌品质之选！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241114330877120.jpg" alt="">
                    <p>得胜PH-120手机麦克风，你的声音，一手掌握！ 出色音质，时尚新宠，手机直播更出色。映客、花椒、yy等主播都在用的K歌神器！</p>
                </li>
                <li>
                    <img src="../assets/images/202007241114200760813.jpg" alt="">
                    <p>得胜TS-2280立体声入耳式耳机，得胜20周年的匠心之作，高品质的用料，严苛的苹果认证，以平易近人的价格开启耳机行业新标准</p>
                </li>
                <li>
                    <img src="../assets/images/202007281638530260421.jpg" alt="">
                    <p>得胜金杯麦克风，让你的声音一鸣惊人！凭借高颜值及超高性价比受到网络主播和录音爱好者喜爱，好口碑爆款热售，它会给你惊喜！</p>
                </li>
            </ul>
        </div>

        <!-- 第五块 -->
        <v-moreact></v-moreact>

        <!-- 底部 -->
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
         },
}
 </script>
<style>
    .lunbo .mint-swipe-items-wrap{
        padding-bottom: 29.46%;
    }
    .lunbo{
        height: 170px;
    }
    .lunbo img{
        padding: 0px 10px;
        width: 94%;
        border-radius: 30px;
    }
</style>
<style scoped>
    main{
        background:#eee;
    }
    .actone{
        background: #eee;
    }
    .title{
        text-align: center;
        font-size: 20px;
        color: #333;
        font-weight: bold;  
    }
    b{
        color: #ff0066;
        font-weight: bold;
    }
    .small{
        display: inline-block;
        width: 36px;
        text-align: right;
        position: relative;
        top: -3px;
        right: 8px;
    }
    .small .i1{
        display: inline-block;
        height: 1px;
        width: 36px;
        background: #cdcdcd;
        margin-bottom: -18px;
    }
    .small .i2{
        display: inline-block;
        width: 18px;
        background: #cdcdcd;
        margin-bottom:0px;
        height: 1px;
    }
    .small2{
        display: inline-block;
        width: 36px;
        text-align: left;
        position: relative;
        top: -3px;
        left: 8px;
    }
    .small2 .i1{
        display: inline-block;
        width: 18px;
        height: 1px;
        margin-bottom: -18px;
        background: #cdcdcd;
    }
    .small2 .i2{
        display: inline-block;
        height: 1px;
        width: 36px;
        background: #cdcdcd;
    }
    .lunbo .mint-swipe-items-wrap{
        padding-bottom: 29.46%;
    }
    .lunbo{
        height: 170px;
    }
    .lunbo img{
        padding: 0px 10px;
        width: 94%;
        border-radius: 30px;
    }
    /* 第二个 */
    .acttwo{
        background: #eee;
    }
    .acttwo ul{
        width: 100%;
        overflow: hidden;
    }
    .acttwo ul li{
        float: left;
        width: 31%;
        padding: 0px 4px;
    }
    .acttwo img{
        width: 100%;
        border-radius: 16px;
    }
    /* 第三个 */
    .acttherr{
        background: #eee;
    }
    .acttherr ul{
        width: 100%;
        overflow: hidden;
    }
    .acttherr ul li{
        float: left;
        width: 48%;
        padding: 0px 2px;
    }
    .acttherr img{
        width: 100%;
        border-radius: 16px;
    }
    /* 第四块 */
    .actfour{
        background: #eee;
        margin-bottom: 50px;
    }
    .actfour ul{
        width: 94%;
        overflow: hidden;
        margin: 4px auto;
    }
    .actfour ul li{
        float: left;
        width: 100%;    
        border-radius: 16px;
        background:white;
        margin:5px 0px;
 
    }
    .actfour p{
        font-size: 13px;
        text-align: left;
        color: #999999;
        width: 90%;
        margin: 2px auto;
    }
    .actfour img{
        width: 100%;
        border-radius: 16px;
    }

    
</style>