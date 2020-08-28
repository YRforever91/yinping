<template>
    <main>
        <!-- 头部 -->
        <v-heater></v-heater>
        <!-- 中间内容 -->
        <div class="title">
            <div>
                <p class="ispan">解决方案</p>
            </div>
            <ul>
                <li v-for="(item,index) in list">
                    <!-- 可跳转 -->
                    <router-link :to="'/shoping/'+item.id">
                        <div class="photo">

                        </div>
                        <div>
                            <h2>{{item.conh}}</h2>
                            <p>{{item.conp}}</p>
                        </div>
                    </router-link>    
                </li>
            </ul>
        </div>
        <!-- 底部内容 -->
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
         methods:{
             change(){

             }
         },
    data(){
        return{
            list:[
                {
                    conh:'录音编曲',
                    conp:'一站式打造专属录音师',    
                    src:'./src/assets/images/bottom_logo1-1.0.2.jpg',
                    path:'/shoping',
                    id:'luyin'
                },
                {
                    conh:'网络直播',
                    conp:'热榜主播御用设备 赠送调试',    
                    src:'',
                    path:'/shoping',
                    id:'wangluo'
                },
                {
                    conh:'手机直播',
                    conp:'直播神器 热卖套装限时优惠',    
                    src:'',
                    path:'/shoping',
                    id:'shouji'
                },
                {
                    conh:'演出音响',
                    conp:'专业音响设备为舞台演出助力',    
                    src:'',
                    path:'',
                    id:'yanchu'
                },
                {
                    conh:'家庭KTV',
                    conp:'汇聚世界品牌 在家欢唱KTV',    
                    src:'',
                    path:'',
                    id:'ktv'
                },
                {
                    conh:'影视录音',
                    conp:'专业提供影视录音解决方案',    
                    src:'',
                    path:'',
                    id:'yingshi'
                },
                {
                    conh:'乐器设备',
                    conp:'精选吉他、贝斯等乐器设备',    
                    src:'',
                    path:'',
                    id:'yueqi'
                },
                {
                    conh:'音乐欣赏',
                    conp:'娱乐休闲 随身享受高品质音乐',    
                    src:'',
                    path:'',
                    id:'yinyue'
                },
                {
                    conh:'会议工程',
                    conp:'量身定制 专业会议音响设备',    
                    src:'',
                    path:'',
                    id:'huiyi'
                },
                {
                    conh:'家庭影院',
                    conp:'把电影院搬回家 轻松看大片',    
                    src:'',
                    id:'jiating'
                },
            ],
        }
    }
}
</script>

<style scoped>
    .toprigth li span{
        position: relative;
        right:22px;
        top:10px;
        font-size: 10px;
    }
    .heater{
        position: inherit;
        min-height: 0;
        overflow: hidden;
    }
    .heater .toprigth li{
        float: right;
    }
    .toprigth img{
        width: 25px;
        height: 25px;
    }
    .topleft li{
        float: left;
    }
    .sersh{
        width: 100%;
        height: 40px;
        line-height: 30px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        background-color: red;
    }
        .title .ispan{
        line-height: 45px;
        border-bottom: 1px solid red;
        font-size: 15px;
        width: 94%;
        margin-left: 3%;
    }

    .title li{
        height: 70px;
        width: 94%;
        margin-left: 3%;
        border-bottom: 1px solid red;
        overflow: hidden;
    }
    .photo{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #ffe7f8;
        display: block;
        text-align: center;
        line-height: 45px;
        font-size: 24px;
        float: left;
        margin-right: 2%;
        margin-top: 12.5px;
    }
        .title h2{
        font-weight: normal;
        font-size: 15px;
        padding-top: 12px;
        line-height: 27px;
    }
    .title ul li div p{
        color: #999;
    }

</style>