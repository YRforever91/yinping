<template>
    <main>
        <div class="heater">
            <ul class="topleft">
                <li>
                    <router-link :to="'/left_nav'">
                        <div class="icon_left">
                            <span></span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index/">
                        <img src="../assets/images/header_logo.jpg" alt="" height="35px">
                    </router-link>
                </li>
            </ul>
            <ul class="toprigth">
                <li>
                    <router-link :to="'/my'"><img src="../assets/images/header_icon1_on.png" alt="" ><span>我的</span></router-link>
                </li>
                <li>
                    <router-link :to="'/search'"><img src="../assets/images/header_icon3_on.jpg" alt=""><span>搜索</span></router-link>
                </li> 
            </ul>
        </div>
        <!-- 红色区域 -->
        <div class="back">
            <div>
                <router-link :to="'/index'">
                    <div class="goback">
                        <span>音平商城</span>
                    </div>
                </router-link>
                <div class="ico_x"></div>
                <div class="bread_word">
                    <h2></h2>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
    main{
        background: #fff;
    }
    .icon_left{
        float:left;
        width:30px;
        text-align:center;
        margin-left:2px;
    }
    .icon_left span {
        display: block;
        width: 30px;
        height: 30px;
        background: url(../assets/images/header_icon2_on.png) no-repeat;
        background-size: 100%;
    }
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
        padding:2%;
        border-bottom: 2px solid #ff6600;
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
    .back{
        overflow: hidden;
    }
    .back>div{
        width: 100%;
        height: 30px;
        line-height: 30px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        border-bottom-color: #ddd;
    }
    .goback{
        float: left;
        padding: 0 8px;
    }
    .ico_x{
        width: 13px;
        height: 30px;
        float: left;
        display: block;
        overflow: hidden;
        background: url(../assets/images/icon_x-v1.0.0.png) no-repeat;
        background-position: -130px 0;
        background-size: 151px;
    }
    .bread_word {
        height:100%;
        width:20%;
        padding: 0 8px;
        float:left;
    }
</style>