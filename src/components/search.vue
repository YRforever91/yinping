<template>
    <main>
        <v-heater></v-heater>
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
            <mt-cell v-for="item in result" :title="item.title" :value="item.value">
                
            </mt-cell>
        </mt-search>
    </main>
</template>
<script>
    import heater from './heater.vue'  //头部样式
    export default {
        components:{
            'v-heater':heater
        },
        data(){
            return{
                result:[
                    {
                        title:'吉他',
                        value:'吉他弹唱'
                    },
                    {
                        title:'吉他',
                        value:'吉他 初学者'
                    },
                    {
                        title:'吉他',
                        value:'吉他拾音器'
                    },
                    {
                        title:'吉他',
                        value:'吉他麦克风'
                    },
                    {
                        title:'吉他',
                        value:'吉他 民谣'
                    },
                    {
                        title:'吉他',
                        value:'吉他贝斯拨片1 2mm'
                    },
                    {
                        title:'吉他',
                        value:'吉他自学三月通'
                    },
                    {
                        title:'吉他',
                        value:'吉他a型架'
                    },
                    {
                        title:'吉他',
                        value:'吉他立式架'
                    },
                    {
                        title:'吉他',
                        value:'吉他支架'
                    }
                ]
            }
        }
    }
</script>