<template>
    <div class="gpz_body_bd">
        <div v-for="(item,index ) in gpz" class="bars">
            <ul>
                <li v-for="(it,ind) in item"> 
                    <div class="img" v-for="(i,d) in it">
                        <img :src="i.img" alt="" v-if="i.img" class="adv_img">
                        <div class="pro_name" v-if="i.pro_name">{{i.pro_name}}</div>
                        <div class="pro_price" v-if="i.pro_price"><span>￥</span><b>{{i.pro_price}}</b></div>
                        <p v-if="i.con" class="tag">{{i.con}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['dt'],
    watch:{
        dt(){
            if(this.dt=='K歌'){
                this.gpz={
                    // 广告图
                    three_adv:[
                        [
                            {
                                img:'./src/assets/images/three_adv_01.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_02.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_03.jpg'
                            }
                        ]
                    ],
                    // 产品栏1
                    pro1_01:[
                        [
                            {
                                img:'./src/assets/images/pro01_01.jpg',
                                pro_name:'得胜 MX1 便捷式声卡',
                                pro_price:'750.00'
                            },
                            {
                                img:'./src/assets/images/pro01_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro01_03.jpg',
                                pro_name:'客所思 KX6 究极版电脑K歌外置声卡手机直播声卡 抖音快手唱吧全民K歌主播直播声卡',
                                pro_price:'1088.00'
                            },
                            {
                                img:'./src/assets/images/pro01_04.jpg',
                                pro_name:'艾肯 MOBILE·U VST 出色声卡',
                                pro_price:'1388.00'
                            },
                            {
                                img:'./src/assets/images/pro01_05.jpg',
                                pro_name:'ICKB SO8 第四代无损数字手机直播K歌声卡抖音快手全民k歌户外主播直播声卡设备',
                                pro_price:'988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_06.jpg',
                                pro_name:'IXI MEGA M4 专业录音外置声卡 电脑手机主播直播K歌喊麦声卡设备',
                                pro_price:'2988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_07.jpg',
                                pro_name:'得胜 MX1 mini 便捷式手机直播声卡 抖音快手网红直播网络k歌户外直播主播声卡',
                                pro_price:'350.00'
                            },
                            {
                                img:'./src/assets/images/pro01_08.jpg',
                                pro_name:'莱维特 STREAM 4x5 网络K歌录音外置声卡 (黑色)',
                                pro_price:'2299.00'
                            },
                            {
                                img:'./src/assets/images/pro01_09.jpg',
                                pro_name:'森然 播吧二代电音版手机直播声卡 抖音快手唱吧全民K歌主播直播声卡(红色)',
                                pro_price:'588.00'
                            },
                            {
                                img:'./src/assets/images/pro01_10.jpg',
                                pro_name:'艾肯 MOBILE·R VST 电脑网络K歌录音外置USB声卡 主播直播唱歌声卡',
                                pro_price:'999.00'
                            }
                        ]
                    ],
                    // 产品栏2
                    pro2_01:[
                        [
                            {
                                img:'./src/assets/images/pro02_01.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_03.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_04.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_05.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_06.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_07.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_08.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_09.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_10.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            }
                        ]
                    ],
                    //底部标签栏
                    tab_01:[
                        [
                            {
                                con:'网络K歌套装'
                            },
                            {
                                con:'手机直播套装'
                            },
                            {
                                con:'手机麦克风'
                            },
                            {
                                con:'电容麦克风'
                            },
                            {
                                con:'网络K歌声卡'
                            },
                            {
                                con:'监听耳机'
                            },
                            {
                                con:'摄像头'
                            },
                            {
                                con:'麦克风支架'
                            },
                            {
                                con:'手机转换器'
                            },
                            {
                                con:'麦克风线材'
                            },
                            {
                                con:'防喷网'
                            },
                            {
                                con:'专业话放'
                            },
                            {
                                con:'专业耳放'
                            }
                        ]
                    ]
                }
            }else if(this.dt=='录音'){
                this.gpz={
                    // 广告图
                    three_adv:[
                        [
                            {
                                img:'./src/assets/images/three_adv_04.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_05.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_06.jpg'
                            }
                        ]
                    ],
                    // 产品栏1
                    pro1_01:[
                        [
                            {
                                img:'./src/assets/images/pro03_01.jpg',
                                pro_name:'得胜 MX1 便捷式声卡',
                                pro_price:'750.00'
                            },
                            {
                                img:'./src/assets/images/pro03_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro03_03.jpg',
                                pro_name:'客所思 KX6 究极版电脑K歌外置声卡手机直播声卡 抖音快手唱吧全民K歌主播直播声卡',
                                pro_price:'1088.00'
                            },
                            {
                                img:'./src/assets/images/pro03_04.jpg',
                                pro_name:'艾肯 MOBILE·U VST 出色声卡',
                                pro_price:'1388.00'
                            },
                            {
                                img:'./src/assets/images/pro03_05.jpg',
                                pro_name:'ICKB SO8 第四代无损数字手机直播K歌声卡抖音快手全民k歌户外主播直播声卡设备',
                                pro_price:'988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_06.jpg',
                                pro_name:'IXI MEGA M4 专业录音外置声卡 电脑手机主播直播K歌喊麦声卡设备',
                                pro_price:'2988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_07.jpg',
                                pro_name:'得胜 MX1 mini 便捷式手机直播声卡 抖音快手网红直播网络k歌户外直播主播声卡',
                                pro_price:'350.00'
                            },
                            {
                                img:'./src/assets/images/pro01_08.jpg',
                                pro_name:'莱维特 STREAM 4x5 网络K歌录音外置声卡 (黑色)',
                                pro_price:'2299.00'
                            },
                            {
                                img:'./src/assets/images/pro01_09.jpg',
                                pro_name:'森然 播吧二代电音版手机直播声卡 抖音快手唱吧全民K歌主播直播声卡(红色)',
                                pro_price:'588.00'
                            },
                            {
                                img:'./src/assets/images/pro01_10.jpg',
                                pro_name:'艾肯 MOBILE·R VST 电脑网络K歌录音外置USB声卡 主播直播唱歌声卡',
                                pro_price:'999.00'
                            }
                        ]
                    ],
                    // 产品栏2
                    pro2_01:[
                        [
                            {
                                img:'./src/assets/images/pro02_01.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_03.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_04.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_05.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_06.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_07.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_08.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_09.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_10.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            }
                        ]
                    ],
                    //底部标签栏
                    tab_01:[
                        [
                            {
                                con:'网络K歌套装'
                            },
                            {
                                con:'手机直播套装'
                            },
                            {
                                con:'手机麦克风'
                            },
                            {
                                con:'电容麦克风'
                            },
                            {
                                con:'网络K歌声卡'
                            },
                            {
                                con:'监听耳机'
                            },
                            {
                                con:'摄像头'
                            },
                            {
                                con:'麦克风支架'
                            },
                            {
                                con:'手机转换器'
                            },
                            {
                                con:'麦克风线材'
                            },
                            {
                                con:'防喷网'
                            },
                            {
                                con:'专业话放'
                            },
                            {
                                con:'专业耳放'
                            }
                        ]
                    ]
                }
            }else if(this.dt=='家庭'){
                this.gpz={
                    // 广告图
                    three_adv:[
                        [
                            {
                                img:'./src/assets/images/three_adv_07.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_08.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_09.jpg'
                            }
                        ]
                    ],
                    // 产品栏1
                    pro1_01:[
                        [
                            {
                                img:'./src/assets/images/pro03_01.jpg',
                                pro_name:'得胜 MX1 便捷式声卡',
                                pro_price:'750.00'
                            },
                            {
                                img:'./src/assets/images/pro03_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro03_03.jpg',
                                pro_name:'客所思 KX6 究极版电脑K歌外置声卡手机直播声卡 抖音快手唱吧全民K歌主播直播声卡',
                                pro_price:'1088.00'
                            },
                            {
                                img:'./src/assets/images/pro03_04.jpg',
                                pro_name:'艾肯 MOBILE·U VST 出色声卡',
                                pro_price:'1388.00'
                            },
                            {
                                img:'./src/assets/images/pro03_05.jpg',
                                pro_name:'ICKB SO8 第四代无损数字手机直播K歌声卡抖音快手全民k歌户外主播直播声卡设备',
                                pro_price:'988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_06.jpg',
                                pro_name:'IXI MEGA M4 专业录音外置声卡 电脑手机主播直播K歌喊麦声卡设备',
                                pro_price:'2988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_07.jpg',
                                pro_name:'得胜 MX1 mini 便捷式手机直播声卡 抖音快手网红直播网络k歌户外直播主播声卡',
                                pro_price:'350.00'
                            },
                            {
                                img:'./src/assets/images/pro01_08.jpg',
                                pro_name:'莱维特 STREAM 4x5 网络K歌录音外置声卡 (黑色)',
                                pro_price:'2299.00'
                            },
                            {
                                img:'./src/assets/images/pro01_09.jpg',
                                pro_name:'森然 播吧二代电音版手机直播声卡 抖音快手唱吧全民K歌主播直播声卡(红色)',
                                pro_price:'588.00'
                            },
                            {
                                img:'./src/assets/images/pro01_10.jpg',
                                pro_name:'艾肯 MOBILE·R VST 电脑网络K歌录音外置USB声卡 主播直播唱歌声卡',
                                pro_price:'999.00'
                            }
                        ]
                    ],
                    // 产品栏2
                    pro2_01:[
                        [
                            {
                                img:'./src/assets/images/pro02_01.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_03.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_04.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_05.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_06.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_07.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_08.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_09.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_10.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            }
                        ]
                    ],
                    //底部标签栏
                    tab_01:[
                        [
                            {
                                con:'网络K歌套装'
                            },
                            {
                                con:'手机直播套装'
                            },
                            {
                                con:'手机麦克风'
                            },
                            {
                                con:'电容麦克风'
                            },
                            {
                                con:'网络K歌声卡'
                            },
                            {
                                con:'监听耳机'
                            },
                            {
                                con:'摄像头'
                            },
                            {
                                con:'麦克风支架'
                            },
                            {
                                con:'手机转换器'
                            },
                            {
                                con:'麦克风线材'
                            },
                            {
                                con:'防喷网'
                            },
                            {
                                con:'专业话放'
                            },
                            {
                                con:'专业耳放'
                            }
                        ]
                    ]
                }
            }else if(this.dt=='演出'){
                this.gpz={
                    // 广告图
                    three_adv:[
                        [
                            {
                                img:'./src/assets/images/three_adv_4-1.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_4-2.jpg'
                            }
                        ]
                    ],
                    // 产品栏1
                    pro1_01:[
                        [
                            {
                                img:'./src/assets/images/pro01_01.jpg',
                                pro_name:'得胜 MX1 便捷式声卡',
                                pro_price:'750.00'
                            },
                            {
                                img:'./src/assets/images/pro02_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro01_03.jpg',
                                pro_name:'客所思 KX6 究极版电脑K歌外置声卡手机直播声卡 抖音快手唱吧全民K歌主播直播声卡',
                                pro_price:'1088.00'
                            },
                            {
                                img:'./src/assets/images/pro02_04.jpg',
                                pro_name:'艾肯 MOBILE·U VST 出色声卡',
                                pro_price:'1388.00'
                            },
                            {
                                img:'./src/assets/images/pro03_05.jpg',
                                pro_name:'ICKB SO8 第四代无损数字手机直播K歌声卡抖音快手全民k歌户外主播直播声卡设备',
                                pro_price:'988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_06.jpg',
                                pro_name:'IXI MEGA M4 专业录音外置声卡 电脑手机主播直播K歌喊麦声卡设备',
                                pro_price:'2988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_07.jpg',
                                pro_name:'得胜 MX1 mini 便捷式手机直播声卡 抖音快手网红直播网络k歌户外直播主播声卡',
                                pro_price:'350.00'
                            },
                            {
                                img:'./src/assets/images/pro01_08.jpg',
                                pro_name:'莱维特 STREAM 4x5 网络K歌录音外置声卡 (黑色)',
                                pro_price:'2299.00'
                            },
                            {
                                img:'./src/assets/images/pro01_09.jpg',
                                pro_name:'森然 播吧二代电音版手机直播声卡 抖音快手唱吧全民K歌主播直播声卡(红色)',
                                pro_price:'588.00'
                            },
                            {
                                img:'./src/assets/images/pro01_10.jpg',
                                pro_name:'艾肯 MOBILE·R VST 电脑网络K歌录音外置USB声卡 主播直播唱歌声卡',
                                pro_price:'999.00'
                            }
                        ]
                    ],
                    // 产品栏2
                    pro2_01:[
                        [
                            {
                                img:'./src/assets/images/pro02_01.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_03.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_04.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_05.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_06.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_07.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_08.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_09.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_10.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            }
                        ]
                    ],
                    //底部标签栏
                    tab_01:[
                        [
                            {
                                con:'网络K歌套装'
                            },
                            {
                                con:'手机直播套装'
                            },
                            {
                                con:'手机麦克风'
                            },
                            {
                                con:'电容麦克风'
                            },
                            {
                                con:'网络K歌声卡'
                            },
                            {
                                con:'监听耳机'
                            },
                            {
                                con:'摄像头'
                            },
                            {
                                con:'麦克风支架'
                            },
                            {
                                con:'手机转换器'
                            },
                            {
                                con:'麦克风线材'
                            },
                            {
                                con:'防喷网'
                            },
                            {
                                con:'专业话放'
                            },
                            {
                                con:'专业耳放'
                            }
                        ]
                    ]
                }
            }else if(this.dt=='设备'){
                this.gpz={
                    // 广告图
                    three_adv:[
                        [
                            {
                                img:'./src/assets/images/three_adv_10.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_11.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_12.jpg'
                            }
                        ]
                    ],
                    // 产品栏1
                    pro1_01:[
                        [
                            {
                                img:'./src/assets/images/pro03_01.jpg',
                                pro_name:'得胜 MX1 便捷式声卡',
                                pro_price:'750.00'
                            },
                            {
                                img:'./src/assets/images/pro01_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_03.jpg',
                                pro_name:'客所思 KX6 究极版电脑K歌外置声卡手机直播声卡 抖音快手唱吧全民K歌主播直播声卡',
                                pro_price:'1088.00'
                            },
                            {
                                img:'./src/assets/images/pro03_04.jpg',
                                pro_name:'艾肯 MOBILE·U VST 出色声卡',
                                pro_price:'1388.00'
                            },
                            {
                                img:'./src/assets/images/pro02_05.jpg',
                                pro_name:'ICKB SO8 第四代无损数字手机直播K歌声卡抖音快手全民k歌户外主播直播声卡设备',
                                pro_price:'988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_06.jpg',
                                pro_name:'IXI MEGA M4 专业录音外置声卡 电脑手机主播直播K歌喊麦声卡设备',
                                pro_price:'2988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_07.jpg',
                                pro_name:'得胜 MX1 mini 便捷式手机直播声卡 抖音快手网红直播网络k歌户外直播主播声卡',
                                pro_price:'350.00'
                            },
                            {
                                img:'./src/assets/images/pro01_08.jpg',
                                pro_name:'莱维特 STREAM 4x5 网络K歌录音外置声卡 (黑色)',
                                pro_price:'2299.00'
                            },
                            {
                                img:'./src/assets/images/pro01_09.jpg',
                                pro_name:'森然 播吧二代电音版手机直播声卡 抖音快手唱吧全民K歌主播直播声卡(红色)',
                                pro_price:'588.00'
                            },
                            {
                                img:'./src/assets/images/pro01_10.jpg',
                                pro_name:'艾肯 MOBILE·R VST 电脑网络K歌录音外置USB声卡 主播直播唱歌声卡',
                                pro_price:'999.00'
                            }
                        ]
                    ],
                    // 产品栏2
                    pro2_01:[
                        [
                            {
                                img:'./src/assets/images/pro02_01.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_03.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_04.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_05.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_06.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_07.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_08.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_09.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_10.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            }
                        ]
                    ],
                    //底部标签栏
                    tab_01:[
                        [
                            {
                                con:'网络K歌套装'
                            },
                            {
                                con:'手机直播套装'
                            },
                            {
                                con:'手机麦克风'
                            },
                            {
                                con:'电容麦克风'
                            },
                            {
                                con:'网络K歌声卡'
                            },
                            {
                                con:'监听耳机'
                            },
                            {
                                con:'摄像头'
                            },
                            {
                                con:'麦克风支架'
                            },
                            {
                                con:'手机转换器'
                            },
                            {
                                con:'麦克风线材'
                            },
                            {
                                con:'防喷网'
                            },
                            {
                                con:'专业话放'
                            },
                            {
                                con:'专业耳放'
                            }
                        ]
                    ]
                }
            }
        }
    },
    data(){
        return{
            gpz:
                //ul层(整块，包括广告图和商品内容和底部tab栏)
                {
                    // li层
                    // 广告图
                    three_adv:[
                        [
                            {
                                img:'./src/assets/images/three_adv_01.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_02.jpg'
                            },
                            {
                                img:'./src/assets/images/three_adv_03.jpg'
                            }
                        ]
                    ],
                    // 产品栏1
                    pro1_01:[
                        [
                            {
                                img:'./src/assets/images/pro01_01.jpg',
                                pro_name:'得胜 MX1 便捷式声卡',
                                pro_price:'750.00'
                            },
                            {
                                img:'./src/assets/images/pro01_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro01_03.jpg',
                                pro_name:'客所思 KX6 究极版电脑K歌外置声卡手机直播声卡 抖音快手唱吧全民K歌主播直播声卡',
                                pro_price:'1088.00'
                            },
                            {
                                img:'./src/assets/images/pro01_04.jpg',
                                pro_name:'艾肯 MOBILE·U VST 出色声卡',
                                pro_price:'1388.00'
                            },
                            {
                                img:'./src/assets/images/pro01_05.jpg',
                                pro_name:'ICKB SO8 第四代无损数字手机直播K歌声卡抖音快手全民k歌户外主播直播声卡设备',
                                pro_price:'988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_06.jpg',
                                pro_name:'IXI MEGA M4 专业录音外置声卡 电脑手机主播直播K歌喊麦声卡设备',
                                pro_price:'2988.00'
                            },
                            {
                                img:'./src/assets/images/pro01_07.jpg',
                                pro_name:'得胜 MX1 mini 便捷式手机直播声卡 抖音快手网红直播网络k歌户外直播主播声卡',
                                pro_price:'350.00'
                            },
                            {
                                img:'./src/assets/images/pro01_08.jpg',
                                pro_name:'莱维特 STREAM 4x5 网络K歌录音外置声卡 (黑色)',
                                pro_price:'2299.00'
                            },
                            {
                                img:'./src/assets/images/pro01_09.jpg',
                                pro_name:'森然 播吧二代电音版手机直播声卡 抖音快手唱吧全民K歌主播直播声卡(红色)',
                                pro_price:'588.00'
                            },
                            {
                                img:'./src/assets/images/pro01_10.jpg',
                                pro_name:'艾肯 MOBILE·R VST 电脑网络K歌录音外置USB声卡 主播直播唱歌声卡',
                                pro_price:'999.00'
                            }
                        ]
                    ],
                    // 产品栏2
                    pro2_01:[
                        [
                            {
                                img:'./src/assets/images/pro02_01.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_02.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_03.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_04.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_05.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_06.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_07.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_08.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_09.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            },
                            {
                                img:'./src/assets/images/pro02_10.jpg',
                                pro_name:'美奇 ProFX6v3 6通道调音台带效果 电脑手机录音网络K歌主播直播外置声卡',
                                pro_price:'1399.00'
                            }
                        ]
                    ],
                    //底部标签栏
                    tab_01:[
                        [
                            {
                                con:'网络K歌套装'
                            },
                            {
                                con:'手机直播套装'
                            },
                            {
                                con:'手机麦克风'
                            },
                            {
                                con:'电容麦克风'
                            },
                            {
                                con:'网络K歌声卡'
                            },
                            {
                                con:'监听耳机'
                            },
                            {
                                con:'摄像头'
                            },
                            {
                                con:'麦克风支架'
                            },
                            {
                                con:'手机转换器'
                            },
                            {
                                con:'麦克风线材'
                            },
                            {
                                con:'防喷网'
                            },
                            {
                                con:'专业话放'
                            },
                            {
                                con:'专业耳放'
                            }
                        ]
                    ]
                }
        }
    }
}
</script>
<style scoped>
    .gpz_body_bd{
        width:100%;
    }
/* 三张广告图 */
    .gpz_body_bd .bars{
        width:94%;
        margin:0px auto;
        overflow: hidden;
    }
    .bars .img .adv_img{
        float:left;
        width:33.333%
    }
    .gpz_body_bd .bars img{
        width:100%
    }
/* 第一个商品滑动栏 */
    .gpz_body_bd .bars:nth-of-type(2){
        width:100%;
        overflow:auto;
        background:#f5f5f5;
    }
    .gpz_body_bd .bars:nth-of-type(2) ul{
        width:400%;
        overflow: hidden;
        min-height: 0;
        background: #f5f5f5;
        padding-left: 2%;
        padding-top: 8px;
    }
    .bars:nth-of-type(2) .img{
        width:144px;
        float:left;
        background:#fff;
        white-space: initial;
        margin-right:4px;
    }
    .gpz_body_bd .bars:nth-of-type(2) img{
        vertical-align: middle;
        padding: 5%;
        width: 90%;
    }
    .gpz_body_bd .bars:nth-of-type(2) .pro_name{
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 18px;
        height: 36px;
        padding: 0 5%;
        color: #666666;
    }
    .gpz_body_bd .bars:nth-of-type(2) .pro_price{
        color: #ff2c6d;
        font-size: 15px;
        padding: 2% 5% 5% 5%;
    }
    .bars:nth-of-type(2) .pro_price span{
        font-size:12px;
    }
    .bars:nth-of-type(2) .pro_price b{
        font-weight: normal;
    }
/* 第二个商品滑动栏 */
    .gpz_body_bd .bars:nth-of-type(3){
        width:100%;
        overflow:auto;
        background:#f5f5f5;
    }
    .gpz_body_bd .bars:nth-of-type(3) ul{
        width:400%;
        overflow: hidden;
        min-height: 0;
        background: #f5f5f5;
        padding-left: 2%;
        padding-top: 8px;
    }
    .bars:nth-of-type(3) .img{
        width:144px;
        float:left;
        background:#fff;
        white-space: initial;
        margin-right:4px;
    }
    .gpz_body_bd .bars:nth-of-type(3) img{
        vertical-align: middle;
        padding: 5%;
        width: 90%;
    }
    .gpz_body_bd .bars:nth-of-type(3) .pro_name{
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 18px;
        height: 36px;
        padding: 0 5%;
        color: #666666;
    }
    .gpz_body_bd .bars:nth-of-type(3) .pro_price{
        color: #ff2c6d;
        font-size: 15px;
        padding: 2% 5% 5% 5%;
    }
    .bars:nth-of-type(3) .pro_price span{
        font-size:12px;
    }
    .bars:nth-of-type(3) .pro_price b{
        font-weight: normal;
    }
/* 标签栏 */
    .gpz_body_bd .bars:nth-of-type(4){
        width:100%;
        overflow:auto;
        border-top: 8px solid #f5f5f5;
        padding: 3% 0;
        white-space: nowrap;
    }
    .gpz_body_bd .bars:nth-of-type(4) ul{
        width:300%;
        overflow: hidden;
    }
    .bars:nth-of-type(4) .img {
        float:left;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 12px;
        background: #efefff;
        color: #666666;
        white-space: initial;
        margin-left: 1%;
        margin-right: -3px;
        text-align:center;
    }
    .bars:nth-of-type(4) .img:nth-of-type(2n){
        background: #f2ece1;
    } 
</style>