<template>
    <main>
        <div>
            <ul>
                <router-link to="/details/">
                    <li v-for="(item,index) in list" class="oli">
                        <div>
                            <img :src="item.src" alt="" class="photo">
                        </div>
                        <div class="text">
                            {{item.text}}
                        </div>
                        <div class="price">
                            <b>{{item.cu}}</b>
                            <span>
                                <small>￥</small>
                                <span>{{item.price}}</span>
                            </span>
                            <s>
                                <small>￥</small>
                                <font>{{item.oldprice}}</font>
                            </s>
                        </div>
                    </li>
                </router-link>    
            </ul>
        </div>
    </main>
</template>
<script>
export default {
    props:['a'],
    // mounted(){
    //     console.log(a)
    // },
    watch:{
        a(){
            console.log(this.a)
            if(this.a=='luyin'){
                this.list=[
                {
                    src:'./src/assets/images/202004211728087387125.jpg',
                    text:'  富克斯特三代solo声卡搭配得胜PC-K600麦克风 录音套装',
                    cu:'促',
                    price:'1690.00',
                    oldprice:'1808.00',
                },
                {
                    src:'./src/assets/images/202004281651249262540.jpg',
                    text:'  富克斯特Solo Studio 三代声卡话筒录音套装',
                    cu:'促',
                    price:'1799.00',
                    oldprice:'1907.00',
                },
                {
                    src:'./src/assets/images/202007031128332271379.jpg',
                    text:'  雅马哈UR 22C声卡搭配爱科技C3000 专业个人录音配音设备套装',
                    cu:'促',
                    price:'3339.00',
                    oldprice:'3561.00',
                },
                {
                    src:'./src/assets/images/202005211131422663621.jpg',
                    text:'雅马哈UR 22C声卡搭配sE ELECTRONICS se2200 麦克风 专业个人录音配音设备套装',
                    cu:'促',
                    price:'4839.00',
                    oldprice:'5164.00',
                },                                                
            ]
            }else if(this.a=='wangluo'){
                this.list=[
                {
                    src:'./src/assets/images/202004301152095631060.jpg',
                    text:'得胜MX1声卡搭配得胜PC-K220麦克风 电脑手机直播K歌声卡套装 抖音快手主播直播录音设备全套',
                    cu:'促',
                    price:'1089.00',
                    oldprice:'1109.00',
                },
                {
                    src:'./src/assets/images/201905271723452258723.jpg',
                    text:'得胜MX1声卡搭配得胜TA-60麦克风 户外手机K歌直播套装 抖音快手全民K歌唱歌设备全套',
                    cu:'促',
                    price:'1229.00',
                    oldprice:'1340.00',
                }, 
                {
                    src:'./src/assets/images/20200226160948742233.jpg',
                    text:'得胜MX1声卡搭配莱维特LCT 240pro麦克风 电脑手机直播K歌声卡套装 抖音快手主播直播录音设备全套',
                    cu:'促',
                    price:'2629.00',
                    oldprice:'2837.00',
                }, 
                {
                    src:'./src/assets/images/201909091359164722867.jpg',
                    text:'雅马哈UR 22C声卡搭配sE ELECTRONICS se2200 麦克风 专业个人录音配音设备套装',
                    cu:'促',
                    price:'4839.00',
                    oldprice:'5164.00',
                }, 
            ]
            }else if(this.a=='shouji'){
                this.list=[
                {
                    src:'./src/assets/images/202004301152095631060 (1).jpg',
                    text:'  得胜MX1声卡搭配得胜PC-K220麦克风 电脑手机直播K歌声卡套装 抖音快手主播直播录音设备全套',
                    cu:'促',
                    price:'6000',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201905271723452258723 (1).jpg',
                    text:'  得胜MX1声卡搭配得胜TA-60麦克风 户外手机K歌直播套装 抖音快手全民K歌唱歌设备全套',
                    cu:'促',
                    price:'6000',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201909091359164722867 (1).jpg',
                    text:'  得胜TAK35麦克风搭配得胜MX1声卡 电脑手机直播K歌声卡套装 抖音快手主播直播录音设备全套',
                    cu:'促',
                    price:'6000',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201909091359164722867.jpg',
                    text:'  得胜MX1声卡搭配得胜PC-K600麦克风 手机K歌直播套装 抖音快手全民K歌室内唱歌设备全套',
                    cu:'促',
                    price:'6000',
                    oldprice:'5000',
                },
            ]
            }else if(this.a=='yanchu'){
                this.list=[
                {
                    src:'./src/assets/images/202001231006236659950.jpg',
                    text:'JBL JRX125音箱搭配皇冠XLS 802D功放 舞台演出套装',
                    cu:'',
                    price:'17748.00',
                    oldprice:'',
                },
                {
                    src:'./src/assets/images/201707191008160578571.jpg',
                    text:'山逊 Auro X15D音箱搭配得胜W80麦克风 舞台演出套装',
                    cu:'',
                    price:'11430.00',
                    oldprice:'',
                },
                {
                    src:'./src/assets/images/201903251740307614861.jpg',
                    text:'罗兰CUBE-STREET音箱搭配舒尔SM58s麦克风 户外街唱套装 ',
                    cu:'',
                    price:'4804.00',
                    oldprice:'',
                },
                {
                    src:'./src/assets/images/201803051612580473484.jpg',
                    text:'JBL JRX125 音箱搭配皇冠XLS 802D后级功放 舞台音箱',
                    cu:'',
                    price:'32422.00',
                    oldprice:'',
                },
            ]               
            }else if(this.a=='ktv'){
                this.list=[
                {
                    src:'./src/assets/images/202006031729116774373.jpg',
                    text:'惠威D3.2MKII音箱搭配天逸AD-9313EHD功放 家庭影院KTV 影K一体套装',
                    cu:'促',
                    price:'14299.00',
                    oldprice:'14983.00',
                },
                {
                    src:'./src/assets/images/20191115153917436606.jpg',
                    text:'JBL Ki512音箱搭配皇冠KVS700功放 家庭KTV套装',
                    cu:'促',
                    price:'21399.00',
                    oldprice:'22413.00',
                },
                {
                    src:'./src/assets/images/202001231135434562623.jpg',
                    text:'得胜MA-K20卡包功放搭配博士301V音箱 免点歌机KTV套装',
                    cu:'促',
                    price:'6759.00',
                    oldprice:'7095.00',
                },
                {
                    src:'./src/assets/images/201907231357593378581.jpg',
                    text:'音王品牌家庭KTV 免点歌机卡拉OK套装',
                    cu:'促',
                    price:'4499.00',
                    oldprice:'4757.00',
                },
            ]               
            }else if(this.a=='yingshi'){
                this.list=[
                {
                    src:'./src/assets/images/201903121552349659377.jpg',
                    text:'TASCAM DR-70D单反录音机搭配罗德NTG2麦克风 影视同期录音套装',
                    cu:'促',
                    price:'4635.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201903121003132899025.jpg',
                    text:'ZOOM H4n Pro录音机搭配罗德NTG2麦克风 影视同期录音套装',
                    cu:'促',
                    price:'3862.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/202008121052509981971.jpg',
                    text:'ZOOM H6 录音机搭配得胜PRO82耳机 影视同期录音套装',
                    cu:'促',
                    price:'3467.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201903121702071482891.jpg',
                    text:'拉达WM9无线麦克风搭配得胜SGC-568枪式麦克风 影视同期录音套装',
                    cu:'促',
                    price:'1937.00',
                    oldprice:'5000',
                },
            ]                
            }else if(this.a=='yueqi'){
                this.list=[
                {
                    src:'./src/assets/images/201905041446276105510.jpg',
                    text:'斯奎尔031-0005-506电吉他搭配罗兰CUBE-STREET音箱 电吉他演出套装',
                    cu:'促',
                    price:'4762.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201812141633230036852.jpg',
                    text:'雅马哈FGX800C电箱吉他搭配美奇Onyx Artist 1·2 声卡 吉他录音套装',
                    cu:'促',
                    price:'4127.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201904161535369028835.jpg',
                    text:'艾肯MOBILE·U VST 声卡搭配得胜K820麦克风 吉他网K套装',
                    cu:'促',
                    price:'4433.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201905041531113049459.jpg',
                    text:'摇滚信仰 进阶电吉他套装',
                    cu:'促',
                    price:'3756.00',
                    oldprice:'5000',
                },
            ]               
            }else if(this.a=='yinyue'){
                this.list=[
                {
                    src:'./src/assets/images/201810260929460486246.jpg',
                    text:'小不点MK2 真空管耳放搭配拜亚动力DT770 PRO耳机 高品质音乐欣赏HIFI听歌套装',
                    cu:'促',
                    price:'2107.00',
                    oldprice:'5000',
                },
               {
                    src:'./src/assets/images/20181024160346005330.jpg',
                    text:'罗兰Rubix 22声卡搭配小不点MK3真空管耳放 音乐欣赏套装',
                    cu:'促',
                    price:'4787.00',
                    oldprice:'5000',
                },
               {
                    src:'./src/assets/images/20181024141051010688.jpg',
                    text:'亚当T7V音箱搭配旷世CMA400i解码器 音乐欣赏套装',
                    cu:'促',
                    price:'103400.00',
                    oldprice:'5000',
                },
               {
                    src:'./src/assets/images/201309140936260328587.jpg',
                    text:'Audio V1耳放+DH600监听耳机',
                    cu:'促',
                    price:'2689.00',
                    oldprice:'5000',
                },
            ]
            }else if(this.a=='huiyi'){
                this.list=[
                {
                    src:'./src/assets/images/201411221456340142700.jpg',
                    text:'惠威VA4OS音响搭配得胜TC-TH会议VHF无线麦克风 无线网络会议套装1',
                    cu:'促',
                    price:'5993.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201510291927230305758.jpg',
                    text:'得胜KA-E10音箱搭配得胜TC-TH会议VHF无线麦克风 多媒体会议套装',
                    cu:'促',
                    price:'9986.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/20141122155123043761.jpg',
                    text:'惠威VA4OS音响搭配得胜TC-TH会议VHF无线麦克风 无线网络会议套装进阶版',
                    cu:'促',
                    price:'8033.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/201411221543040538987.jpg  ',
                    text:'惠威VA4OS音响搭配得胜MS-118麦克风 中型网络会议套装',
                    cu:'促',
                    price:'14836.00',
                    oldprice:'5000',
                },
            ]
            }else if(this.a=='jiating'){
                this.list=[
                {
                    src:'./src/assets/images/201904300912005633679.jpg',
                    text:'JBL Arena 180BK 家庭影院套装',
                    cu:'促',
                    price:'13299.00',
                    oldprice:'14080.00',
                },
                {
                    src:'./src/assets/images/201710261005540968892.jpg',
                    text:'哈曼卡顿HKTS 30BQ 家庭影院套装',
                    cu:'促',
                    price:'9500.00',
                    oldprice:'10081.00',
                },
                {
                    src:'./src/assets/images/201806151854190127430.jpg',
                    text:'惠威Diva5.0 家庭影院 套装',
                    cu:'促',
                    price:'6312.00',
                    oldprice:'5000',
                },
                {
                    src:'./src/assets/images/20180503180144042565.jpg',
                    text:'JBL品牌 家庭影院 套装',
                    cu:'促',
                    price:'16490.00',
                    oldprice:'5000',
                },
            ]
            }
        }
    },
    data(){
        return{
            list:[

            ]
        }
    }
}
</script>

<style scoped>
    .oli{
        width: 49.3%;
        float: left;
        background: #fff;
        margin-bottom: 6px;
    }
    .photo{
        width: 100%;
    }
    .text{
        padding: 3%;
        font-size: 13px;
        line-height: 22px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        height: 42px;
    }
    .price{
        height: 20px;
    }
    .price b{
        display: inline-block;
        color: #fff;
        border-radius: 3px;
        background: #e53238;
        padding: 1px 3px;
        font-size: 12px;
        font-weight: normal;
    }
    span{
        color: #f60;
        font-size: 14px;
    }
    span small{
        font-size: 12px;
    }
    span span{
        color: #f60;
        font-size: 14px;
    }
    .price s{
        color: #999;
    }
    font{
        font-size: 12px;
    }
</style>