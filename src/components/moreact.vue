<template>
    <main>
        <div class="moreact">
            <div>
                <span>
                    更多主题专场
                </span>
            </div>    
            <ul>
                <li v-for="(item,index) in list">
                    <img :src="item.src" alt="">
                    <p>{{item.com}}</p>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    src:'./src/assets/images/soundrecording.png',
                    com:'录音编曲'
                },
                    {
                    src:'./src/assets/images/wangluozhubo-1.0.0.png',
                    com:'网络主播'
                },
                    {
                    src:'./src/assets/images/shoujiKge-1.0.0.png',
                    com:'手机直播'
                },
                    {
                    src:'./src/assets/images/yanchuyinxiang-1.0.0.png',
                    com:'演出音响'
                },
                    {
                    src:'./src/assets/images/jiatingKTV-1.0.0.png',
                    com:'家庭ktv'
                },
                    {
                    src:'./src/assets/images/jitayueqi-1.0.0.png',
                    com:'吉他乐器'
                },
                    {
                    src:'./src/assets/images/yingshiluyin-1.0.0.png',
                    com:'影视录音'
                },
                    {
                    src:'./src/assets/images/yinyuexinshang-1.0.0.png',
                    com:'音乐欣赏'
                },
                    {
                    src:'./src/assets/images/jiatingyingyuan-1.0.0.png',
                    com:'家庭影院'
                },
                    {
                    src:'./src/assets/images/meeting.png',
                    com:'会议工程'
                },
            ]
        }
    }
}
</script>

<style scoped>
    .moreact{
        background: #eee;
    }
    .moreact div{
        margin: 24px auto;
        width: 94%;
        height: 1px;
        border-top: 1px solid #d4d4d4;
        text-align: center;
    }
    .moreact span{
        position: relative;
        top: -12px;
        background: #eee;
        padding: 0 20px;
        font-size: 16px;
        color: #333;
    }
    .moreact ul{
        width: 100%;
    }
    .moreact ul li{
        float: left;
        width: 20%;
        padding: 25px 0px;
    }
    .moreact img{
        height: 40px;
        width: 40px;
        padding:0px 20px ;  
    }
    .moreact p{
        font-size: 12px;
        text-align: center;
    }
</style>