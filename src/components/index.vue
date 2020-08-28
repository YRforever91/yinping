<template>
    <main>
<!-- header -->
        <div class="big_box">
            <div class="box_bg">
                <div class="header">
    <!-- 左边菜单按钮 -->
                    <router-link :to="'/left_nav'">
                        <div class="icon_left">
                            <span></span>
                        </div>
                    </router-link>
    <!-- logo图片 -->
                    <router-link :to="'/index'">
                        <div class="header_logo">
                            <img src="../assets/images/header_logo.png" alt="">
                        </div>
                    </router-link>
    <!-- 我的 -->
                    <router-link :to="'/my'">
                        <div class="my">
                            <i></i>
                            <p>我的</p>
                        </div>
                    </router-link>
    <!-- 客服 -->
                    <router-link :to="'/ctm_service'">
                        <div class="ctm_service">
                            <i></i>
                            <p>客服</p>
                        </div>
                    </router-link>
                    
                </div>
    <!-- 搜索框 -->
                <router-link :to="'/search'">
                    <div class="search">
                        <i></i>
                        <input type="text" placeholder="搜索商品">
                    </div>
                </router-link>
            </div>
    <!-- 轮播图 -->
            <div class="swiper">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item,index) in list_swiper1">
                        <img :src=item.src alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
    <!-- 广告栏 -->
        <div class="index_adv">
            <img src="../assets/images/index_03.jpg" alt="">
            <div class="index_adv_a">
                <ul>
                    <li v-for="(item,index) in list_adv">
                        <router-link :to="item.path">
                            <span></span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
<!-- 菜单栏 -->
        <div class="menu">
            <!-- 我的频道  -->
            <div class="title">
                <p class="t_left">我的<b>频道</b></p>
                <p class="t_right">更多 ></p>
            </div>
            <!-- 菜单项 -->
            <ul>
                <li v-for="(item,index) in list_menu">
                    <router-link :to="item.path">
                        <span class="menu_icon">
                            <img :src=item.src alt="">
                        </span>
                        <p class="menu_item_dec">{{item.con}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    <!-- 红包大图 -->
        <img src="../assets/images/home_dl_img01.png" alt="" class="home_dl_img">
<!-- 精选 -->
    <!-- 热卖精选 -->
        <div class="selected ">
            <!-- 大标题 -->
            <div class="sel_title">
                <div class="sel_tit_left">
                    <i class="i1"></i>
                    <i class="i2"></i>
                </div>
                <span>购<b>精选</b></span>
                <div class="sel_tit_right">
                    <i class="i1"></i>
                    <i class="i2"></i> 
                </div>
            </div>
            <!--  -->
            <div class="sel_products">
                <!-- 小标题 -->
                <div class="pro_title">
                    <span>热卖精选</span>
                    <b>热卖精选 达人都在用的设备</b>
                </div>
                <!-- 轮播图 -->
                <div class="pro_swiper">
                    <mt-swipe :auto="4000   ">
                        <mt-swipe-item v-for="(it,ind) in swiper3">
                            <ul class="pro_item">
                                <li v-for="(item,index) in it">
                                    <img :src=item.src alt="" class="img">
                                    <div class="price">
                                        <i>￥</i>{{item.price}}
                                    </div>
                                    <div class="pro_name">{{item.pro_name}}</div>
                                    <div class="describe">{{item.describe}}</div>
                                </li>
                            </ul>
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>
    <!-- 长图取消自动轮播 -->
        <div class="bigbox">
            <div class="bar">
                <mt-swipe :auto="0" :show-indicators="false">
                    <mt-swipe-item v-for="(item,index) in swiper2">
                        <img :src=item.src alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            
        </div>
<!-- 速选 -->
        <div class="speak_sel">
            <!-- 速选标题 -->
            <div class="sp_title">
                <span>装备速选</span>
                <b>大牌好货 承包你的音频设备</b>
                <div class="sp_tit_right">更多 ></div>
            </div>
            <!-- 轮播图4 -->
            <div class="sp_swiper">
                <mt-swipe :auto="4000" :continuous='false'>
                    <mt-swipe-item v-for="(it,ind) in swiper4">
                        <ul class="sp_item">
                            <li v-for="(item,index) in it" class="list">
                                <img :src=item.src alt="" >
                            </li>
                        </ul>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
<!-- 购品质 -->
        <div class="gpz">
            <!-- 大标题 -->
            <div class="sel_title">
                <div class="sel_tit_left">
                    <i class="i1"></i>
                    <i class="i2"></i>
                </div>
                <span>购<b>品质</b></span>
                <div class="sel_tit_right">
                    <i class="i1"></i>
                    <i class="i2"></i> 
                </div>
            </div>
            <div class="gpz_body">
                <div class="gpz_body_top">
                    <ul>
                        <li v-for="(item,index) in list_gpz" @click="cli(item,index)" :class="{on:num==index}">
                            <span><img :src=item.src alt="" ></span>
                            <p>{{item.con}}</p>
                        </li>
                    </ul>
                </div>
                <!-- 占位符 -->
                <v-purchase :dt='fdt'></v-purchase>
            </div>
        </div>
<!-- 购好货 -->
        <div class="ghh">
            <div class="sel_title">
                <div class="sel_tit_left">
                    <i class="i1"></i>
                    <i class="i2"></i>
                </div>
                <span>购<b>好货</b></span>
                <div class="sel_tit_right">
                    <i class="i1"></i>
                    <i class="i2"></i> 
                </div>
            </div>
            <!-- 音平TV -->
            <div class="haohuo">
                <div class="sp_title">
                    <span>音平TV</span>
                    <b>边看边买 干货提升选购技能</b>
                    <div class="sp_tit_right">更多 ></div>
                </div>
                <ul class="TV">
                    <li><img src="../assets/images/haohuo01.jpg" alt=""></li>
                    <li><img src="../assets/images/haohuo02.jpg" alt=""></li>
                </ul>
            </div>
        </div>
        <!-- 排行榜 -->
        <div class="paihangbang">
            <div class="sp_title">
                <span>排行榜</span>
                <b>精选推荐 治愈你的选择困难症</b>
                <div class="sp_tit_right">更多 ></div>
            </div>
            <div class="bg">
                <img src="../assets/images/phb_bg.jpg" alt="">
                <div class="ph">
                    <div class="ph_left">
                        <h2>热卖排行榜</h2>
                        <p>TOP</p>
                        <div class="indicators">
                            <mt-swipe :auto="4000">
                                <mt-swipe-item><div></div></mt-swipe-item>
                                <mt-swipe-item><div></div></mt-swipe-item>
                                <mt-swipe-item><div></div></mt-swipe-item>
                            </mt-swipe>
                        </div>
                    </div>
                    <div class="ph_right">
                        <mt-swipe :auto="4000" :show-indicators="false">
                            <mt-swipe-item v-for="(item,index) in swiper5">
                                <div class="ph_swiper">
                                    <ul>
                                        <li v-for="(it,ind) in item">
                                            <!-- 图片上的小图标 -->
                                            <div class="num">
                                                <img :src="it.num" alt="">
                                            </div>
                                            <!-- 图片 -->
                                            <div class="imgwrap">
                                                <img :src="it.src" alt="">
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="phb_tit" v-for="(it,ind) in item" v-if="it.title">{{it.title}}</div>
                                </div>
                            </mt-swipe-item>
                        </mt-swipe>
                    </div>
                </div>
            </div>
        </div>
        <!-- 音透社 -->
        <div class="yts">
            <div class="sp_title">
                <span>音透社</span>
                <b>好货攻略 快速购买决策指南</b>
                <div class="sp_tit_right">更多 ></div>
            </div>
            <ul>
                <li>
                    <div class="l_img">
                        <img src="../assets/images/l_img01.jpg" alt="">
                    </div>
                    <div  class="r_txt">
                        <h2>监听耳机推荐，录音棚都在用的热门型号</h2>
                        <p>希望大家在留言区，多多提交其他型号的监听耳机。</p>
                    </div>
                </li>
                <li>
                    <div class="l_img">
                        <img src="../assets/images/l_img02.jpg" alt="">
                    </div>
                    <div  class="r_txt">
                        <h2>超详细主播直播设备推荐，含电容麦克风，声卡、监听耳机等</h2>
                        <p>以上推荐直播设备是小编工作室帮新员工配置的直播清单，供大家参考</p>
                    </div>
                </li>
            </ul>
        </div>
<!-- 为你推荐 -->
        <div class="recommend">
            <!-- 大标题 -->
            <div class="sel_title">
                <div class="sel_tit_left">
                    <i class="i1"></i>
                    <i class="i2"></i>
                </div>
                <span>为你<b>推荐</b></span>
                <div class="sel_tit_right">
                    <i class="i1"></i>
                    <i class="i2"></i> 
                </div>
            </div>
            <ul>
                <li v-for="(item,index) in recommend">
                    <img :src="item.src" alt="">
                    <div class="dec">{{item.dec}}</div>
                    <div class="price">
                        <span>￥</span>
                        <b>{{item.price}}</b>
                    </div>
                </li>
            </ul>
        </div>
        <v-bottom></v-bottom>
    </main>
</template>

<script>
import purchase_qlt from './purchase_qlt.vue' //购品质
import bottom from './bottom.vue'  //底部样式
export default {
    components:{
        'v-purchase':purchase_qlt,
        'v-bottom':bottom
    },
    data(){
        return{
            num:0,
            fdt:'K歌',
            list_adv:[
                {
                    // 正品保障
                    path:'/quality_ass' 
                },
                {
                    //闪电发货
                    path:'/#'
                },
                {
                    //七天退换
                    path:'/s_day_return'
                },
                {
                    //售后无忧
                    path:'/aftersale'
                }
            ],
            list_menu:[
                {
                    // 商品分类
                    src:"./src/assets/images/menu_item01.jpg",
                    con:'商品分类',
                    path:'/classify' 
                },
                {
                    //套装方案
                    src:"./src/assets/images/menu_item02.jpg",
                    con:'套装方案',
                    path:'/suit'
                },
                {
                    //专题活动
                    src:"./src/assets/images/menu_item03.jpg",
                    con:'专题活动',
                    path:'/activity'
                },
                {
                    //预约调试
                    src:"./src/assets/images/menu_item04.jpg",
                    con:'预约调试',
                    path:'/aftersale'
                },
                {
                    //企业采购
                    src:"./src/assets/images/menu_item05.jpg",
                    con:'企业采购',
                    path:'/activity'
                },
                {
                    //直播K歌
                    src:"./src/assets/images/menu_item06.jpg",
                    con:'直播K歌',
                    path:'/#'
                },
                {
                    //录音编曲
                    src:"./src/assets/images/menu_item07.jpg",
                    con:'录音编曲',
                    path:'/#'
                },
                {
                    //家庭影K
                    src:"./src/assets/images/menu_item08.jpg",
                    con:'家庭影K',
                    path:'/#'
                },
                {
                    //演出会议
                    src:"./src/assets/images/menu_item09.jpg",
                    con:'演出会议',
                    path:'/#'
                },
                {
                    //乐器设备
                    src:"./src/assets/images/menu_item10.jpg",
                    con:'乐器设备',
                    path:'/#'
                }
            ],
            list_swiper1:[
                {
                    src:'./src/assets/images/swiper01.jpg'
                },
                {
                    src:'./src/assets/images/swiper02.jpg'
                },
                {
                    src:'./src/assets/images/swiper03.jpg'
                },
                {
                    src:'./src/assets/images/swiper04.jpg'
                },
                {
                    src:'./src/assets/images/swiper05.jpg'
                }
            ],
            swiper3:[
                [
                    {
                        src:'./src/assets/images/select_pro01.jpg',
                        price:'1719.00',
                        pro_name:'雅马哈UR22C声卡',
                        describe:'个人录音推荐'
                    },
                    {
                        src:'./src/assets/images/select_pro02.jpg',
                        price:'750.00',
                        pro_name:'得胜MX1声卡',
                        describe:'48V供电 直播神器'
                    },
                    {
                        src:'./src/assets/images/select_pro03.jpg',
                        price:'1999.00',
                        pro_name:'亚当T5V监听音箱',
                        describe:'品牌保障 5年质保'
                    },
                    {
                        src:'./src/assets/images/select_pro04.jpg',
                        price:'1988.00',
                        pro_name:'莱维特LCT240pro',
                        describe:'来自奥地利录音神器'
                    },
                    {
                        src:'./src/assets/images/select_pro05.jpg',
                        price:'669.00',
                        pro_name:'得胜PC-K600麦克风',
                        describe:'高通滤波 -10db衰减'
                    },
                    {
                        src:'./src/assets/images/select_pro06.jpg',
                        price:'1680.00',
                        pro_name:'舒尔PGA27麦克风',
                        describe:'灵敏度高 声音纯净'
                    }
                ],
                [
                    {
                        src:'./src/assets/images/select_pro07.jpg',
                        price:'1388.00',
                        pro_name:'艾肯MOBILEUVST声卡',
                        describe:'出色红卡 丰富音效'
                    },
                    {
                        src:'./src/assets/images/select_pro08.jpg',
                        price:'8999.00',
                        pro_name:'RMEFireface UC',
                        describe:'专业录音 德国进口'
                    },
                    {
                        src:'./src/assets/images/select_pro09.jpg',
                        price:'1088.00',
                        pro_name:'客所思KX6究极版',
                        describe:'全硬件声卡 操作简单'
                    },
                    {
                        src:'./src/assets/images/select_pro10.jpg',
                        price:'2588.00',
                        pro_name:'森海塞尔MK4麦克风',
                        describe:'录音威望获奖产品'
                    },
                    {
                        src:'./src/assets/images/select_pro11.jpg',
                        price:'22999.00',
                        pro_name:'纽曼U87Ai麦克风',
                        describe:'传奇话筒'
                    },
                    {
                        src:'./src/assets/images/select_pro12.jpg',
                        price:'678.00',
                        pro_name:'舒尔SM58s',
                        describe:'传奇人声话筒'
                    },
                ],
                [
                    {
                        src:'./src/assets/images/select_pro13.jpg',
                        price:'1399.00',
                        pro_name:'美奇ProFX6v3',
                        describe:'带声卡调音台'
                    },
                    {
                        src:'./src/assets/images/select_pro14.jpg',
                        price:'1399.00',
                        pro_name:'铁三角AT2035',
                        describe:'大型振膜 高通滤波'
                    },
                    {
                        src:'./src/assets/images/select_pro15.jpg',
                        price:'9500.00',
                        pro_name:'纽曼TLM103（小u87）',
                        describe:'德国原装进口'
                    },
                    {
                        src:'./src/assets/images/select_pro16.jpg',
                        price:'1209.00',
                        pro_name:'富克斯特2i2声卡',
                        describe:'2019全新升级'
                    },
                    {
                        src:'./src/assets/images/select_pro17.jpg',
                        price:'2299.00',
                        pro_name:'莱维特stream4x5',
                        describe:'2年质保 品质声卡'
                    },
                    {
                        src:'./src/assets/images/select_pro18.jpg',
                        price:'3488.00',
                        pro_name:'雅马哈UR RT2 声卡',
                        describe:'内置尼夫话放'
                    },
                ]
            ],
            swiper2:[
                {
                    src:'./src/assets/images/adv_swiper01.jpg',
                },
                {
                    src:'./src/assets/images/adv_swiper02.jpg',
                },
                {
                    src:'./src/assets/images/adv_swiper03.jpg',
                },
                {
                    src:'./src/assets/images/adv_swiper04.jpg',
                }
            ],
            swiper4:[
                [
                    {
                        src:'./src/assets/images/sp_sel01.jpg'
                    },
                    {
                        src:'./src/assets/images/sp_sel02.jpg'
                    },
                    {
                        src:'./src/assets/images/sp_sel03.jpg'
                    },
                    {
                        src:'./src/assets/images/sp_sel04.jpg'
                    },
                    {
                        src:'./src/assets/images/sp_sel05.jpg'
                    },
                    {
                        src:'./src/assets/images/sp_sel06.jpg'
                    },
                    {
                        src:'./src/assets/images/sp_sel07.jpg'
                    },
                    {
                        src:'./src/assets/images/sp_sel08.jpg'
                    }
                ],
                [
                    {
                        src:'./src/assets/images/brand_01.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_02.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_03.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_04.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_05.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_06.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_07.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_08.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_09.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_10.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_11.jpg'
                    },
                    {
                        src:'./src/assets/images/brand_12.jpg'
                    }
                ]
            ],
            list_gpz:[
                {
                    //直播K歌
                    src:"./src/assets/images/pz_icon01.png",
                    con:'直播K歌',
                    id:'K歌'
                },
                {
                    //录音编曲
                    src:"./src/assets/images/pz_icon02.png",
                    con:'录音编曲',
                    id:'录音'
                },
                {
                    //家庭影K
                    src:"./src/assets/images/pz_icon03.png",
                    con:'家庭影K',
                    id:'家庭'
                },
                {
                    //演出会议
                    src:"./src/assets/images/pz_icon04.png",
                    con:'演出会议',
                    id:'演出'
                },
                {
                    //乐器设备
                    src:"./src/assets/images/pz_icon05.png",
                    con:'乐器设备',
                    id:'设备'
                }
            ],
            swiper5:[
                [
                    
                    {
                        title:'个人录音常用的十款声卡',
                        num:'./src/assets/images/num1.png',
                        src:'./src/assets/images/imgwrap_01.jpg'
                    },
                    {
                        // title:'个人录音常用的十款声卡',
                        num:'./src/assets/images/num2.png',
                        src:'./src/assets/images/imgwrap_02.jpg'
                    },
                    {
                        // title:'个人录音常用的十款声卡',
                        num:'./src/assets/images/num3.png',
                        src:'./src/assets/images/imgwrap_03.jpg'
                    }
                ],
                [
                    {
                        title:'10款热门手机K歌直播声卡',
                        num:'./src/assets/images/num1.png',
                        src:'./src/assets/images/imgwrap_04.jpg'
                    },
                    {
                        // title:'10款热门手机K歌直播声卡',
                        num:'./src/assets/images/num2.png',
                        src:'./src/assets/images/imgwrap_05.jpg'
                    },
                    {
                        // title:'10款热门手机K歌直播声卡',
                        num:'./src/assets/images/num3.png',
                        src:'./src/assets/images/imgwrap_06.jpg'
                    }
                ],
                [
                    {
                        title:'淘宝直播带货设备套装推荐',
                        num:'./src/assets/images/num1.png',
                        src:'./src/assets/images/imgwrap_07.jpg'
                    },
                    {
                        // title:'淘宝直播带货设备套装推荐',
                        num:'./src/assets/images/num2.png',
                        src:'./src/assets/images/imgwrap_08.jpg'
                    },
                    {
                        // title:'淘宝直播带货设备套装推荐',
                        num:'./src/assets/images/num3.png',
                        src:'./src/assets/images/imgwrap_09.jpg'
                    }
                ]
            ],
            recommend:[
                {
                    src:'./src/assets/images/rcm_01.jpg',
                    dec:'Scarlett Solo USB声卡二代 专业录音声卡 升级版（已停产，替换型号：3代Solo）',
                    price:'749.00'
                },
                {
                    src:'./src/assets/images/rcm_02.jpg',
                    dec:'Studio 6 | 8 6进6出USB2.0音频接口',
                    price:'1999.00'
                },
                {
                    src:'./src/assets/images/rcm_03.jpg',
                    dec:'Scarlett 2i4二代 专业录音 USB外置声卡 音频接口升级版',
                    price:'1388.00'
                },
                {
                    src:'./src/assets/images/rcm_04.jpg',
                    dec:'steinberg UR22 MK II 二代 专业录音外置USB声卡（已停产，替换型号：UR22C）',
                    price:'1168.00'
                },
                {
                    src:'./src/assets/images/rcm_05.jpg',
                    dec:'steinberg UR242 USB专业录音网络K歌声卡（已停产，替换型号：2019新版UR24C）',
                    price:'1628.00'
                },
                {
                    src:'./src/assets/images/rcm_06.jpg',
                    dec:'Scarlett 2i2二代 专业录音 USB外置声卡 音频接口升级版（已停产，替换型号：3代2i2）',
                    price:'1088.00'
                },
                {
                    src:'./src/assets/images/rcm_07.jpg',
                    dec:'Babyface Pro 电脑录音网络K歌USB声卡 娃娃脸声卡专业录音主播直播（购买请选新版，新版为Bab',
                    price:'5599.00'
                },
                {
                    src:'./src/assets/images/rcm_08.jpg',
                    dec:'【预售】MK4 专业录音电容麦克风 工作室/录音获奖产品 主播直播K歌麦克风话筒【德国进口',
                    price:'2588.00'
                },
                {
                    src:'./src/assets/images/rcm_09.jpg',
                    dec:'德国进口 Fireface UCX 电脑专业录音K歌声卡',
                    price:'10299.00'
                },
                {
                    src:'./src/assets/images/rcm_10.jpg',
                    dec:'Rubix 24 USB专业录音声卡 2进4出带双话放',
                    price:'1649.00'
                },
                {
                    src:'./src/assets/images/rcm_11.jpg',
                    dec:'steinberg UR12 专业录音外置USB声卡（已停产，替换型号：2019新版UR12C）',
                    price:'979.00'
                },
                {
                    src:'./src/assets/images/rcm_12.jpg',
                    dec:'MOBILE·U VST 红卡 网络K歌翻唱录音主播直播外置声卡 网红直播声卡',
                    price:'1388.00'
                },
                {
                    src:'./src/assets/images/rcm_13.jpg',
                    dec:'steinberg UR RT2 4进2出USB音频接口电脑外置录音声卡 内置尼夫话放',
                    price:'3488.00'
                },
                {
                    src:'./src/assets/images/rcm_14.jpg',
                    dec:'steinberg UR44 专业录音外置USB声卡 6进4出',
                    price:'2599.00'
                },
                {
                    src:'./src/assets/images/rcm_15.jpg',
                    dec:'Rubix 22 USB专业录音声卡 2进2出带双话放',
                    price:'1288.00'
                },
                {
                    src:'./src/assets/images/rcm_16.jpg',
                    dec:'Scarlett 2i2 Studio 三代 专业录音编曲麦克风声卡套装',
                    price:'2379.00'
                }
            ]
        }
    },
    methods:{
        cli(a,b){
            this.num=b;
            this.fdt=a.id;
        }
    }
}
</script>
<style>
/* 轮播图1 */
    .swiper{
        width:94%;
        overflow: hidden;
        text-align: center;
        margin:0px auto;
        border-radius:20px;
    }
    .swiper .mint-swipe-items-wrap{
        padding-bottom:45%;
    }
    .swiper img{
        width:100%;
    }
    .swiper .mint-swipe-indicators{
        bottom:2px;
    }
    .swiper .mint-swipe-indicator{
        width: 9px;
        height: 9px;
        background: #efd8fc;
        opacity: 1;
        margin: 0 3px;
    }
    .swiper .is-active{   
        background: #ff6600;
    } 
/* 轮播图2 */
    .sel_products{
        width:100%;
        background:#fff;
        border-radius:16px;
        padding-bottom: 6px;
        margin-top: 3%;
        min-height: 0;
        overflow: hidden;
    }
    .pro_swiper{
        width:100%;
        overflow:hidden;
        text-align:center;
        position:relative;
    }
    .pro_swiper .mint-swipe-items-wrap{
        width:100%;
        height:332px;
        margin-bottom:14px;
    }
    .pro_swiper .pro_item li{
        width:33.333%;
        float:left;
    }
    .pro_swiper .pro_item .img{
        width:100%;
    }
    .pro_swiper .mint-swipe-indicator{
        width: 9px;
        height: 9px;
        background: #efd8fc;
        opacity: 1;
        margin: 0 3px;
        
    }
    .pro_swiper .mint-swipe-indicators{
        bottom:-2px;
    }
    .pro_swiper .mint-swipe-indicators .is-active{
        background: #ff6600;
        width: 30px;
        border-radius: 30px;
    }
    .pro_swiper .pro_item .price{
        color: #ff2c6d;
        cursor: pointer;
        font-size:14px;
    }
    .pro_item .price i{
        font-size:12px;
        font-style:normal
    }
    .pro_swiper .pro_item .pro_name{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333333;
        margin-bottom: 2px;
        font-size:12px;
    }
    .pro_swiper .pro_item .describe{
        color: #999999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 17px;
        font-size: 12px;
    }
/* 轮播图3 */
    .bigbox{
        width:94%;
        margin:5% auto;
        overflow: hidden;
    }
    .bigbox .bar{
        width:100%;
    }
    .bigbox .mint-swipe-items-wrap{
        height:94px;
        width: 90%;
        overflow: hidden;
    }
    .bigbox .bar .mint-swipe{
        margin: 0 auto;
        overflow: hidden;
    }
    .bigbox .mint-swipe-items-wrap img{
        width:100%;
        border-radius: 5px;
    }
/* 轮播图4 */
    .sp_title{
        font-size: 14px;
        color: #666666;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 4%;
        min-height: 0;
        overflow: hidden;
        width: 92%;
    }
    .sp_title span{
        font-size: 17px;
        padding-right: 5px;
        font-weight: bold;
        background: -webkit-gradient(linear,left top,right top,from(#f312c3),to(#fe7112));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        overflow: hidden;
    }
    .sp_title b{
        overflow: hidden;
        padding-left: 5px;
        font-weight: normal;
        display: inline-block;
        border-left: 1px solid #d1d1d1;
        height: 15px;
        line-height: 15px;
    }
    .sp_title .sp_tit_right{
        font-size: 13px;
        padding: 3px 10px;
        float: right;
        background: linear-gradient(to right,#ffc900,#ffaf00);
        color: #fff;
        border-radius: 30px;
    }
    .speak_sel{
        width:94%;
        background:#fff;
        border-radius:16px;
        margin: 3% auto 0;
        min-height: 0;
        overflow: hidden;
    }
    .sp_swiper{
        width:100%;
        overflow:hidden;
        text-align:center;
        position:relative;
    }
    .sp_swiper .mint-swipe-items-wrap{
        overflow: hidden;
        height:280px;
        width:100%;
    }
    .sp_swiper .sp_item .list{
        overflow: hidden;
        width:25%;
        float:left;
        margin: 0 auto;
    }
    .sp_swiper .list img{
        width:93%;
    }
    .sp_swiper .mint-swipe-indicator{
        width: 9px;
        height: 9px;
        background: #efd8fc;
        opacity: 1;
        margin: 0 3px;
    }
    .sp_swiper .mint-swipe-indicators .is-active{
        background: #ff6600;
        width: 30px;
        border-radius: 30px;
    }
/* 轮播图5 */
    .indicators{
        width:100%;
        position: relative;
    }
    .indicators .mint-swipe-items-wrap{
        overflow: hidden;
        height:50px;
        width:100%;
    }
    .indicators .mint-swipe-indicators{
        width: 100%;
        text-align: center;
        bottom:26px;
    }
    .indicators .mint-swipe-indicator{
        width: 9px;
        height: 9px;
        background: #fff;
        opacity: 1;
        margin: 0 3px;
    }
    .indicators .mint-swipe-indicators .is-active{
        width: 30px;
        border-radius: 30px;
    }
    .ph_right{
        width: 71%;
        float: right;
        margin-top: 4%;
    }
    .ph_right .ph_swiper{
        width:100%;
    }
    .ph_right .mint-swipe-items-wrap{
        overflow: hidden;
        height:107.5px;
        width:100%;
    }
    .ph_right ul{
        width: 100%;
        overflow:hidden;
    }
    .ph_right ul li{
        width:31%;
        float:left;
        margin-right: 2%;
        padding-bottom: 3%;
        position:relative;
    }
    .ph_right .num{
        width:22px;
        position: absolute;
        top: -1px;
        left: 5px;
    }
    .ph_right li img{
        width:100%;
    }
    .phb_tit {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    }
</style>

<style scoped>  
/* 头部 */
    .big_box{
        background-color:#fff;
    }
    .box_bg{
        height: 200px;
        background-color: #ff0048;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: left bottom;
        margin-bottom: -97px;
        border-radius: 0 0 15px 15px;
    }
    .header{
        overflow:hidden;
        padding:3% 3% 1% 3%;
    }
    .icon_left{
        float:left;
        width:25px;
        text-align:center;
    }
    .icon_left span {
        display: block;
        width: 20px;
        height: 20px;
        background: url(../assets/images/header_icon.png) no-repeat;
        background-size: 100%;
    }
    .header_logo{
        float: left;
    }
    .header_logo img{
        height:35px;
    }
    .ctm_service{
        float:right;
        margin-right: 4%;
        text-align: center;
    }
    .ctm_service i{
        display: block;
        width: 20px;
        height: 20px;
        background: url(../assets/images/ctm_service.png) no-repeat;
        background-size: 20px auto;
        margin-left:2px;
    }
    .ctm_service p{
        font-size:10px;
        color:white;
        line-height:15px;
    }
    .my{
        float:right;
        text-align: center;
    }
    .my i{
        display: block;
        width: 20px;
        height: 20px;
        margin:0 auto;
        background: url(../assets/images/header_my.png) no-repeat;
        background-size: 20px auto;
        margin-left:2px;
    }
    .my p{
        font-size:10px;
        color:white;
        line-height:15px;
    }
/* 搜索框 */
    .search {
        height: 32px;
        background: #fff;
        width: 94%;
        margin-left: 3%;
        border-radius: 50px;
        margin-top: 2px;
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


    
/* 广告条 */
    .index_adv{
        position:relative;
    }
    .index_adv img{
        width:100%;
        vertical-align: middle;
    }
    .index_adv_a{
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
    }
    .index_adv_a ul{
        width:100%;
        height:100%;
    }
    .index_adv_a li{
        width:25%;
        height:100%;
        float:left;
    }
    .index_adv_a li span{
        display:block;
        text-align:center;
        width:100%;
        height:100%;
    }
/* 菜单栏 */
    /* 我的频道 */
    .menu {
        width: 94%;
        margin: 0 auto;
        min-height: 0;
        overflow: hidden;
        background: #fff;
        border-radius: 16px;
        margin-top: 4%;
    }
    .menu .title{
        width: 92%;
        padding: 4%;
        min-height: 0;
        overflow: hidden;
    }
    .t_left{
        float:left;
        font-weight: bold;
        color: #333;
        font-size: 17px;
    }
    .t_left b{
        color:#ff0066;
        font-weight:normal;
    }
    .t_right{
        float:right;
        background: linear-gradient(to right,#ffc900,#ffaf00);
        font-size: 13px;
        color: #fff;
        padding: 3px 10px;
        border-radius: 30px;
    }
    /* 菜单项 */
    .menu{
        overflow: hidden;
        min-height:0;
        padding:0 1%;
    }
    .menu ul>li{
        float:left;
        width:20%;
        text-align:center;
        padding-bottom:4%;
        padding:0px 0px 20px;
    }
    .menu .menu_icon{
        display: block;
        width:64%;
        margin:0 auto;
    }
    .menu .menu_icon img{
        width:100%;
        vertical-align:center;
    }
    .menu_item_dec{
        color:#666666;
        margin-top:2px;
        font-size:12px;
    }

/* 红包大图 */
    .home_dl_img{
        width:100%;
        vertical-align: middle;
        border:none;
    }
/* 精选 */
    /* 大标题 */
    .selected{
        width:94%;
        margin:0 auto;
    }
    .sel_title span b{
        color:#ff0066;
        font-weight:bold;
    }
    .sel_title{
        text-align: center;
        font-size: 22px;
        color: #333;
        font-weight: bold;
    }
    .sel_tit_left{
        display: inline-block;
        width: 36px;
        text-align: right;
        position: relative;
        top: -3px;
        right: 8px;
    }
    .sel_title .sel_tit_left i.i1 {
        display: inline-block;
        height: 1px;
        width: 36px;
        background: #cdcdcd;
        margin-bottom: -21px;
    }
    .sel_title .sel_tit_left i.i2 {
        display: inline-block;
        height: 1px;
        width: 18px;
        background: #cdcdcd;
    }
    .sel_tit_right{
        display: inline-block;
        width: 36px;
        text-align: left;
        position: relative;
        top: -3px;
        left: 8px;
    }
    .sel_title .sel_tit_right i.i1 {
        display: inline-block;
        height: 1px;
        width: 18px;
        background: #cdcdcd;
        margin-bottom: -21px;
    }
    .sel_title .sel_tit_right i.i2 {
        display: inline-block;
        height: 1px;
        width: 36px;
        background: #cdcdcd;
    }
    /* 小标题 */
    .pro_title{
        font-size: 14px;
        color: #666666;
        padding: 4% 0 4% 4%;
        min-height: 0;
        overflow: hidden;
        width: 92%;
    }
    .pro_title span{
        font-size:17px;
        padding-right:5px;
        font-weight: bold;
        /* 背景颜色渐变 */
        background: -webkit-gradient(linear,left top,right top,from(#f312c3),to(#fe7112));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .pro_title b{
        font-size:12px;
        padding-left:5px;
        font-weight: normal;
        display: inline-block;
        border-left: 1px solid #d1d1d1;
        height: 15px;
        line-height: 15px;
    }
/* 购品质 */
    .gpz{
        width:100%;
        margin:0 auto;
    }
    .gpz_body{
        background:#fff;
        margin-top:3%;
    }
    .gpz_body_top{
        min-height: 0;
        overflow: hidden;
        padding-top: 2%;
    }
    .gpz_body_top li{
        width: 20%;
        float: left;
        text-align: center;
    }
    .gpz_body_top li span{
        width: 50px;
        height: 50px;
        display: block;
        border-radius: 50%;
        margin: auto;
        overflow: hidden;
    }
    .gpz_body_top span img{
        width:100%;
    }
    .gpz_body_top .on img{
        margin-top:-50px;
    }
    .gpz_body_top li p{
        font-size:11px;
        line-height: 25px;
    }
    .gpz_body_top .on p{
        color: #ff0066;
        text-align: center;
    }
/* 购好货 */
    .haohuo{
        background:#fff;
        width:94%;
        margin:2% auto;
        border-radius:20px;
        padding:2%;
    }
    .haohuo .TV {
        overflow: hidden;
    }
    .haohuo .TV li{
        float:left;
        width:48%;
        margin:1%;
    }
    .TV li img{
        width:100%;
    }
/* 排行榜 */
    .paihangbang{
        background:#fff;
        width:94%;
        margin:2% auto;
        border-radius:20px;
        padding:2%;
    }
    .bg{
        width:100%;
        position:relative;
    }
    .ph{
        width:100%;
        position:absolute;
        top:0;
    }
    .ph_left{
        width: 23%;
        height: 100%;
        position: absolute;
        color: #fff;
        text-align: center;
    }
    .ph_left h2{
        font-size: 14px;
        font-weight: bold;
        margin-top: 68%;
        padding-bottom: 5%;
    }
    .ph_left p{
        font-size: 16px;
        font-weight: bold;
    }
    .bg>img{
        width:100%;
    }
    
/* 音透社 */
    .yts{
        background:#fff;
        width:94%;
        margin:0 auto;
        border-radius:16px;
    }
    .yts ul{
        overflow:hidden;
        width:100%;
    }
    .yts ul li{
        overflow:hidden;
        margin:0 3% 10px 3%;
    }
    .yts li .l_img{
        width: 33%;
        float: left;
        margin-right: 3%;
    }
    .l_img img{
        width:100%;
        border-radius:5px;
    }
    .r_txt h2{
        font-size: 14px;
        font-weight: normal;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 3px;
        white-space: inherit;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }
    .r_txt p{
        color: #888888;
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        line-height: 17px;
    }
/* 为你推荐 */
    .recommend ul{
        width:94%;
        margin:2% auto;
    }
    .recommend ul li{
        width:49%;
        float:left;
        background:#fff;
        border-radius:5px;
        margin-bottom:2%;
    }
    .recommend ul li:nth-of-type(2n){
        float:right;
    }
    .recommend li img{
        width:90%;
        padding:5%;
    }
    .recommend .dec{
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 18px;
        padding: 0 5%;
        color: #666666;
    }
    .recommend .price{
        color: #ff2c6d;
        font-size: 15px;
        padding: 2% 5% 5% 5%;
    }
    .recommend .price span{
        font-size:12px;
    }
    .recommend .price b{
        font-weight:normal;
    }
/*  */
</style>
