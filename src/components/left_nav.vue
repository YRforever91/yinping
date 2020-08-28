<template>
    <main>
        <div class="navBar">
            <div class="box">
                <div>
                    <h2>网站导航</h2>
                    <ul>
                        <li>
                            <router-link :to="'/index'">
                                <span>首页</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="'/#'">
                                <span>品牌专区</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="'/suit'">
                                <span>套装分类</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="'/classify'">
                                <span>商品分类</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="'/activity'">
                                <span>活动专场</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="'/my'">
                                <span>我的音平</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="'/#'">
                                <span>帮助中心</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="'/#'">
                                <span>商城公告</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>特色服务</h2>
                    <ul class="tese">
                        <li><img src="../assets/images/left_bar_logo5.jpg" alt=""></li>
                        <li><img src="../assets/images/left_bar_logo1.jpg" alt=""></li>
                        <li><img src="../assets/images/left_bar_logo3.jpg" alt=""></li>
                        <li><img src="../assets/images/left_bar_logo3.jpg" alt=""></li>
                        <li><img src="../assets/images/left_bar_logo2.jpg" alt=""></li>
                        <li><img src="../assets/images/left_bar_logo4.jpg" alt=""></li>
                    </ul>
                </div>
                <div class="aa">
                    <ul>
                        <li>
                            <img src="../assets/images/ico_02-v1.0.0.jpg" alt="">
                            <span>订单查询</span>
                        </li>
                        <li>
                            <img src="../assets/images/edit_index-1.0.0.png" alt="">
                            <span>投诉建议</span>
                        </li>
                    </ul>
                </div>
                <div class="aa">
                    <ul>
                        <li>
                            <img src="../assets/images/ico_03-v1.0.0.jpg" alt="">
                            <span>400-700-3638</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li v-for="(item,index) in list_adv">
                            <router-link :to="item.path">
                                <span>{{item.tit}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    export default {
        data(){
            return{
                list_adv:[
                    {
                        // 正品保障
                        tit:'正品保障',
                        path:'/quality_ass' 
                    },
                    {
                        //闪电发货
                        tit:'闪电发货',
                        path:'/#'
                    },
                    {
                        //七天退换
                        tit:'七天退换',
                        path:'/s_day_return'
                    },
                    {
                        //售后无忧
                        tit:'售后无忧',
                        path:'/aftersale'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .navBar {
        width: 135px;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        z-index: 1001;
        background: #fff;
        /* left: -165px; */
        transition: all linear 200ms;
    }
    .navBar ul{
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
    .navBar h2 {
        font-size: 16px;
        font-weight: normal;
        color: #ff6600;
        padding-bottom: 5px;
        line-height: 26px;
    }
    .box{
        overflow-y: scroll;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
    img{
        width:100%;
    }
    .aa img{
        width:10px;
        height:10px;
    }
</style>