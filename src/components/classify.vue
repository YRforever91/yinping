<template>
    <main>
        
        <v-heater></v-heater>
        <router-link :to="'/search'">
            <div class="se">
                <div class="search">
                    <i></i>
                    <input type="text" placeholder="搜索商品">
                </div>
            </div>
        </router-link>
        <div class="clssify">
            <!-- 右边 -->
            <v-classification :a="msg"></v-classification>

            <div class="classifyleft">
                <ul>
                    <li v-for="(item,index) in list" @click="change(item)">
                        {{item.con}}
                    </li>
                </ul>
            </div>
        </div>    
    </main>
</template>
<script>
import heater from './heater.vue'
import classification from './classification.vue'
export default {
    components:{
        'v-heater':heater,
        'v-classification':classification
    },
    data(){
        return{
            msg:'',
            list:[
                {
                    con:'声卡',
                    id:'v-shoes',
                },
                {
                    con:'麦克风',
                    id:'v-shoes',
                },
                {
                    con:'耳机',
                    id:'v-shoes',
                },
                {
                    con:'音箱',
                    id:'v-shoes',
                },
                {
                    con:'功放',
                    id:'v-shoes',
                },
                {
                    con:'英音视频',
                    id:'v-shoes',
                },
                {
                    con:'调音台',
                    id:'v-shoes',
                },
                {
                    con:'话放',
                    id:'v-shoes',
                },
                {
                    con:'耳放',
                    id:'v-shoes',
                },
                {
                    con:'键盘',
                    id:'v-shoes',
                },
                {
                    con:'控制器',
                    id:'v-shoes',
                },
                {
                    con:'其他',
                    id:'v-shoes',
                },
                {
                    con:'贝司',
                    id:'v-shoes',
                },
                {
                    con:'琴类',
                    id:'v-shoes',
                },
                {
                    con:'声卡',
                    id:'v-shoes',
                },
                {
                    con:'声卡',
                    id:'v-shoes',
                },
                {
                    con:'声卡',
                    id:'v-shoes',
                },
                {
                    con:'声卡',
                    id:'v-shoes',
                },
                {
                    con:'声卡',
                    id:'v-shoes',
                },
                {
                    con:'声卡',
                    id:'v-shoes',
                },
            ],
        }
    },
    methods:{
        change(a){
            this.msg=a.con;
        }
    }
}
</script>

<style scoped>
    .se{
        width:100%;
        background: #fff;
        padding:2% 0;
    }
    .search {
        height: 32px;
        background: #fff;
        width: 96%;
        margin:0 auto;
        border-radius: 6px;
        border:1px solid #ff6600;
    }
    .search i{
        display:inline-block;
        width:18px;
        height:18px;
        background:url(../assets/images/header_search.png);
        background-size:18px;
        position:relative;
        top:4px;
        left:13px;
    }
    .search input{
        outline: inherit;
        border: none;
        height: 100%;
        margin-left: 13px;
        width: 70%;
        background: none;
        display: inline-block;
        font-size:12px;
    }
    .classifyleft{
        width: 25%;
        height:634px;
        overflow: auto;
        background: #F6F6F9;
    }
    .classifyleft ul{
        width: 100%;
    }
    .classifyleft ul li{
        width: 100%;
        font-size: 14px;
        text-align: center;
        padding: 13px 0px;
    }

</style>