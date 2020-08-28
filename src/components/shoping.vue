<template>
    <main>
        <v-heater></v-heater>
        <div class="title">
            <ul>
                <li>销量</li>
                <li>价格</li>
                <li>优惠</li>
                <li>筛选</li>
            </ul>
        </div>
            <v-goods :a="msg"></v-goods>
    </main>
</template>
<script>
import goods from './goods.vue'
import heater from './heater.vue'
export default {
    data(){
        return{
            msg:''
        }
    },
    components:{
        'v-heater':heater,
        'v-goods':goods,
    },
    mounted(){
        this.msg=this.$route.params.sh
    }
}
</script>

<style scoped>
.title {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    height: 37px;
    background-color: #fff;
    z-index: 999;
    top: 0;
}
.title ul {
    display: table;
    width: 100%;
    margin: 0;
    padding: 0;
}
.title ul li{
    position: relative;
    border-bottom: none;
    line-height: 32px;
    display: table-cell;
    border-bottom: 3px solid transparent;
    text-align: center;
    line-height: 38px;
}
</style>