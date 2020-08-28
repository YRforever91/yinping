<template>
    <main>
        <div class="classsort">
            <div class="classheater">
                <div class="tit">
                    <h5>所有</h5>
                </div>
                <p>全部</p>
            </div>
            <div class="classtext">
                <ol></ol>
                <h5>分类</h5>
            </div>
            <ul class="text">
                
                <li v-for="(item,index) in list">
                    <router-link to="/details/">
                        <p> {{item.text}}</p>
                    </router-link>
                </li>
            </ul>
            <div class="classtext">
                <ol></ol>
                <h5>品牌</h5>
            </div>    
            <ul>
                <li v-for="(item,index) in list">
                <router-link to="/details/">    
                    <img :src="item.src" alt="">
                    <p>{{item.op}}</p>
                </router-link>    
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            list:''
        }
    },
    props:['a'],
    watch:{
        a(){
            if(this.a=='声卡'){
                this.list=[
                {
                    text:'手机声卡',
                    src:'./src/assets/images/201204021521500957606.gif',
                    op:'艾肯'
                },
                {
                    text:'专业录音声卡',
                    src:'./src/assets/images/201204021452530468834.gif',
                    op:'雅马哈'
                },
                {
                    text:'网络k歌声卡',
                    src:'./src/assets/images/201703141800410023840.gif',
                    op:'REM'
                },
                {
                    text:'游戏影音声卡',
                    src:'./src/assets/images/201205211641320708609.gif',
                    op:'弗兰特斯'
                },
                {
                    text:'音乐HIFI声卡',
                    src:'./src/assets/images/20140815152342029160.jpg',
                    op:'阿波罗'
                },
                {
                    text:'MIDI声卡',
                    src:'./src/assets/images/201610281205430007738.gif',
                    op:'森然'
                },
                {
                    text:'声卡调试',
                    src:'./src/assets/images/201204021447130848835.gif',
                    op:'罗兰'
                },
                ]
            }else if(this.a=='麦克风'){
                this.list=[
                {
                    text:'录音麦克风',
                    src:'./src/assets/images/201712181143390451354.gif',
                    op:'德胜'
                },
                {
                    text:'乐器麦克风',
                    src:'./src/assets/images/201211291637040818474.gif',
                    op:'莱维特'
                },
                {
                    text:'手机麦克风',
                    src:'./src/assets/images/201204021443100645594.gif',
                    op:'铁三角'
                },
                {
                    text:'采访麦克风',
                    src:'./src/assets/images/201204021447480113997.gif',
                    op:'舒尔'
                },
                {
                    text:'英式麦克风',
                    src:'./src/assets/images/201805251513070144171.gif',
                    op:'森海塞尔'
                },
                {
                    text:'ktv演出麦',
                    src:'./src/assets/images/201204021453490257722.gif',
                    op:'纽曼'
                },
                ]
            }else if(this.a=='耳机'){
                this.list=[
                {
                    text:'监听耳机',
                    src:'./src/assets/images/201204021530510083856.gif',
                    op:'JBL'
                },
                {
                    text:'音乐耳机',
                    src:'./src/assets/images/201703141757060597640.gif',
                    op:'索尼'
                },
                {
                    text:'手机耳机',
                    src:'./src/assets/images/201204021553380199373.gif',
                    op:'漫步者'
                },
                {
                    text:'耳麦',
                    src:'./src/assets/images/201204021443100645594.gif',
                    op:'铁三角'
                },
                {
                    text:'游戏耳机',
                    src:'./src/assets/images/20120406153611079582.gif',
                    op:'爱科技'
                },
                {
                    text:'运动耳机',
                    src:'./src/assets/images/201204021447480113997.gif',
                    op:'舒尔'
                },
                ]     
            }else if(this.a=='音箱'){
                this.list=[
                {
                    text:'监听音响',
                    src:'./src/assets/images/201204021530510083856.gif',
                    op:'JBL'
                },
                {
                    text:'HIFI印象',
                    src:'./src/assets/images/201703141757060597640.gif',
                    op:'雅马哈'
                },
                {
                    text:'多媒体音箱',
                    src:'./src/assets/images/201204021553380199373.gif',
                    op:'真力'
                },
                {
                    text:'卡包音箱',
                    src:'./src/assets/images/201204021443100645594.gif',
                    op:'BMB'
                },
                {
                    text:'会议音箱',
                    src:'./src/assets/images/20120406153611079582.gif',
                    op:'卡尔卡'
                },
                {
                    text:'舞台音箱',
                    src:'./src/assets/images/201204021447480113997.gif',
                    op:'舒尔'
                },
                ]    
            }else if(this.a=='功放'){
                this.list=[
                {
                    text:'ktv功放',
                    src:'./src/assets/images/201410081759050576213.jpg',
                    op:'皇冠'
                },
                {
                    text:'会议功放',
                    src:'./src/assets/images/201204021452530468834.gif',
                    op:'雅马哈'
                },
                {
                    text:'AV功放',
                    src:'./src/assets/images/201306081144040627287.jpg',
                    op:'马兰士'
                },
                {
                    text:'HIFI功放',
                    src:'./src/assets/images/201301211630560558894.gif',
                    op:'天龙'
                },
                {
                    text:'2.0声道功放',
                    src:'./src/assets/images/201712181143390451354.gif',
                    op:'德胜'
                },
                {
                    text:'5.1声道功放',
                    src:'./src/assets/images/20130313110104051656.jpg',
                    op:'惠威'
                },
                ]  

            }else if(this.a=='英音视频'){
                this.list=[
                {
                    text:'手机声卡',
                    src:'./src/assets/images/201204021521500957606.gif',
                    op:'艾肯'
                },
                {
                    text:'专业录音声卡',
                    src:'./src/assets/images/201204021452530468834.gif',
                    op:'雅马哈'
                },
                {
                    text:'网络k歌声卡',
                    src:'./src/assets/images/201703141800410023840.gif',
                    op:'REM'
                },
                {
                    text:'游戏影音声卡',
                    src:'./src/assets/images/201205211641320708609.gif',
                    op:'弗兰特斯'
                },
                {
                    text:'音乐HIFI声卡',
                    src:'./src/assets/images/20140815152342029160.jpg',
                    op:'阿波罗'
                },
                {
                    text:'MIDI声卡',
                    src:'./src/assets/images/201610281205430007738.gif',
                    op:'森然'
                },
                {
                    text:'声卡调试',
                    src:'./src/assets/images/201204021447130848835.gif',
                    op:'罗兰'
                },
                ]                
            }else if(this.a=='麦克风'){
                this.list=[
                {
                    text:'手机声卡',
                    src:'./src/assets/images/201204021521500957606.gif',
                    op:'艾肯'
                },
                {
                    text:'专业录音声卡',
                    src:'./src/assets/images/201204021452530468834.gif',
                    op:'雅马哈'
                },
                {
                    text:'网络k歌声卡',
                    src:'./src/assets/images/201703141800410023840.gif',
                    op:'REM'
                },
                {
                    text:'游戏影音声卡',
                    src:'./src/assets/images/201205211641320708609.gif',
                    op:'弗兰特斯'
                },
                {
                    text:'音乐HIFI声卡',
                    src:'./src/assets/images/20140815152342029160.jpg',
                    op:'阿波罗'
                },
                {
                    text:'MIDI声卡',
                    src:'./src/assets/images/201610281205430007738.gif',
                    op:'森然'
                },
                {
                    text:'声卡调试',
                    src:'./src/assets/images/201204021447130848835.gif',
                    op:'罗兰'
                },
                ]                
            }else if(this.a=='麦克风'){
                this.list=[
                {
                    text:'手机声卡',
                    src:'./src/assets/images/201204021521500957606.gif',
                    op:'艾肯'
                },
                {
                    text:'专业录音声卡',
                    src:'./src/assets/images/201204021452530468834.gif',
                    op:'雅马哈'
                },
                {
                    text:'网络k歌声卡',
                    src:'./src/assets/images/201703141800410023840.gif',
                    op:'REM'
                },
                {
                    text:'游戏影音声卡',
                    src:'./src/assets/images/201205211641320708609.gif',
                    op:'弗兰特斯'
                },
                {
                    text:'音乐HIFI声卡',
                    src:'./src/assets/images/20140815152342029160.jpg',
                    op:'阿波罗'
                },
                {
                    text:'MIDI声卡',
                    src:'./src/assets/images/201610281205430007738.gif',
                    op:'森然'
                },
                {
                    text:'声卡调试',
                    src:'./src/assets/images/201204021447130848835.gif',
                    op:'罗兰'
                },
                ]                
            }else if(this.a=='麦克风'){
                this.list=[
                {
                    text:'手机声卡',
                    src:'./src/assets/images/201204021521500957606.gif',
                    op:'艾肯'
                },
                {
                    text:'专业录音声卡',
                    src:'./src/assets/images/201204021452530468834.gif',
                    op:'雅马哈'
                },
                {
                    text:'网络k歌声卡',
                    src:'./src/assets/images/201703141800410023840.gif',
                    op:'REM'
                },
                {
                    text:'游戏影音声卡',
                    src:'./src/assets/images/201205211641320708609.gif',
                    op:'弗兰特斯'
                },
                {
                    text:'音乐HIFI声卡',
                    src:'./src/assets/images/20140815152342029160.jpg',
                    op:'阿波罗'
                },
                {
                    text:'MIDI声卡',
                    src:'./src/assets/images/201610281205430007738.gif',
                    op:'森然'
                },
                {
                    text:'声卡调试',
                    src:'./src/assets/images/201204021447130848835.gif',
                    op:'罗兰'
                },
                ]                
            }
        }
     }
}
</script>

<style scoped>
    .classsort{
        width: 72%;
        height:632px;
        float: right;
        overflow: hidden;
        background:#fff;
    }
    .classsort ul{
        width: 100%;
        overflow: hidden;
    }
    .classsort ul li{
        width: 33.3%;
        float: left;
        padding: 8px 0px;
        text-align: center
    }
    .classheater .tit{
        width:40px;
        margin-top:4px;
        margin-left:12px;
        float:left;
    }
    .classheater{
        width: 94%;
        border-bottom: 1px black solid;
        overflow: hidden;
    }
    .classheater p{
        float: right;
        font-size: 14px;
    }
    h5{
        font-size: 16px;
        float: left;
    }
    .classtext{
        width: 100%;
        padding: 10px 0px;
        overflow: hidden;
    }
    .classtext ol{
        width: 2%;
        height: 16px;
        background: red;
        float: left;
        margin: 4px 5px;
    }
    .classsort p{
        display: block;
        height: 35px;
        line-height: 35px;
        overflow: hidden;
        text-align: center;
        font-size: 14px;
    }
    .classsort img{
        width: 50px;
        position: relative;
        padding: 0px 25px;
    }
</style>