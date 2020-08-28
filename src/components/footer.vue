<template>
    <main>
        <div class="foo">
            <ul class="btm_nav">
                <li v-for="(item,index) in list">
                    <router-link :to="item.path">
                        <div class="btm_nav_img">
                            <img :src="item.src" alt="">
                        </div>
                            <p class="con">{{item.con}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
export default{
    data(){
        return{
            list:[
                {
                    src:'./src/assets/images/footer_nav_01.png',
                    con:'客服',
                    path:'/ctm_service'
                },
                {
                    src:'./src/assets/images/footer_nav_02.png',
                    con:'分类',
                    path:'/classify'
                },
                {
                    src:'./src/assets/images/footer_nav_03.png',
                    con:'套装',
                    path:'/suit'
                },
                {
                    src:'./src/assets/images/footer_nav_04.png',
                    con:'活动',
                    path:'/activity'
                },
                {
                    src:'./src/assets/images/footer_nav_05.png',
                    con:'购物车',
                    path:'shoppingcar'
                }
            ]
        }
    }
}
</script>

<style scoped>

    .btm_nav{
        width:100%;
        height:50px;
        position :fixed;
        bottom:0px;
        text-align:center;
        background:#fff;
        border-top: 1px solid #eee;
        overflow: hidden;
        z-index:1111;
    }
    .btm_nav li{
        float:left;
        width:20%;
        overflow: hidden;
    }
    .btm_nav_img{
        width:25px;
        height:25px;
        display: inline-block;
        margin-top: 5px;
        position: relative;
        overflow: hidden;
    }
    .btm_nav_img img{
        width:100%;
        vertical-align:center;
    }
    .btm_nav .con{
        color:#5f5f5f;
        font-size:10px;
        margin-top:-3px;
    }
    
</style>