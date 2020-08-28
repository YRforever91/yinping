<template>
    <main>
        <div class="secu-banner">
            <img src="../assets/images/genuine_01.jpg" alt="">
        </div>
        <div class="secu-banner">
            <img src="../assets/images/genuine_02.jpg" alt="">
            <img src="../assets/images/genuine_03.jpg" alt="">
        </div>
        <div class="part-yellow">
            <div class="secu-banner">
                <img src="../assets/images/genuine_04-1.0.0.jpg" alt="">
            </div>
            <div class="secu-brand">
                <div class="secu-row" v-for="(item,index) in list">
                    <ul class="bordereee">
                        <li v-for="(it,ind) in item">
                            <div class="border-right">
                                <img :src="it.src" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="secu-banner">
                <img src="../assets/images/genuine_06.jpg" alt="">
            </div>
            <div class="secu-banner" id="ba">
                <img src="../assets/images/genuine_08.jpg" alt="">
            </div>
        </div>
        <div class="part-red">
            <div class="secu-banner">
                <img src="../assets/images/genuine_10.jpg" alt="">
            </div>
            <div class="secu-banner">
                <img src="../assets/images/genuine_12.jpg" alt="">
            </div>
        </div>
        <div class="part-huangse">
            <div class="secu-banner">
                <img src="../assets/images/genuine_14.jpg" alt="">
            </div>
        </div>
        <div class="part-red">
            <div class="secu-banner">
                <img src="../assets/images/genuine_16.jpg" alt="">
            </div>
            <div class="secu-banner" id="ban">
                <img src="../assets/images/genuine_18.jpg" alt="">
            </div>
        </div>
        <div class="part-huangse">
            <div class="secu-banner">
                <img src="../assets/images/genuine_20.jpg" alt="">
                <img src="../assets/images/genuine_22.jpg" alt="">
            </div>
        </div>
        <div class="part-coffee">
            <div class="secu-banner">
                <img src="../assets/images/genuine_24.jpg" alt="">
                <img src="../assets/images/genuine_25.jpg" alt="">
            </div>
        </div>
        <div class="part-red">
            <div class="secu-banner">
                <img src="../assets/images/genuine_27.jpg" alt="">
            </div>
            <div class="secu-brand">
                <div class="secu-row" v-for="(item,index) in list2">
                    <ul class="two">
                        <li v-for="(it,ind) in item">
                            <div class="zhuanchang">
                                <img :src="it.src" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="part-huangse">
            <div class="secu-banner">
                <img src="../assets/images/genuine_55.jpg" alt="">
            </div>
            <div class="secu-banner" id="hs">
                <img src="../assets/images/genuine_56.jpg" alt="">
            </div>
        </div>

        <div class="part-red">
            <div class="secu-banner">
                <img src="../assets/images/genuine_58.jpg" alt="">
            </div>
        </div>
        <div class="part-hs">
            <div class="secu-banner">
                <img src="../assets/images/genuine_60.jpg" alt="">
            </div>
            <div class="secu-banner">
                <img src="../assets/images/genuine_61.jpg" alt="">
            </div>
        </div>
        <div class="secu-banner">
            <img src="../assets/images/genuine_63.jpg" alt="">
        </div>
        <div class="secu-banner">
            <img src="../assets/images/genuine_64.jpg" alt="">
        </div>

        <div class="part-huangse">
            <div class="secu-contact">
                <div class="secu-contact-width70">
                    <div class="secu-contact-slogan">
                        <img src="../assets/images/genuine_65-1.0.0.jpg" alt="">
                    </div>
                    <div class="secu-contact-go">
                        <img src="../assets/images/genuine_78.jpg" alt="">
                    </div>
                </div>
                <div class="secu-contact-width30">
                    <div class="secu-contact-social">
                        <img src="../assets/images/genuine_68.jpg" alt="">
                    </div>
                    <div class="secu-contact-social">
                        <img src="../assets/images/genuine_71.jpg" alt="">
                    </div>
                    <div class="secu-contact-social">
                        <img src="../assets/images/genuine_74.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </main>
    
</template>
<script>
    export default {
        data(){
            return{
                list:[
                    [
                        {
                            src:'./src/assets/images/brand_ds.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_se.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_tsj.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_shse.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_akj.jpg'
                        }
                    ],
                    [
                        {
                            src:'./src/assets/images/brand_rem.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_bl.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_icon.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_ya.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_ro.jpg'
                        }
                    ],
                    [
                        {
                            src:'./src/assets/images/brand_adam.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_gene.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_ubl.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_lk.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_bm.jpg'
                        }
                    ],
                    [
                        {
                            src:'./src/assets/images/brand_xx.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_fb.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_rode.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_blx.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_focus.jpg'
                        }
                    ],
                    [
                        {
                            src:'./src/assets/images/brand_ko.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_ib.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_ta.jpg'
                        },
                        {
                            src:'./src/assets/images/brand_mon.jpg'
                        },
                        {
                            src:'./src/assets/images/brandmore.jpg'
                        }
                    ],
                ],
                list2:[
                    [
                        {
                            src:'./src/assets/images/genuine_30.jpg'
                        },
                        {
                            src:'./src/assets/images/genuine_32.jpg'
                        },
                        {
                            src:'./src/assets/images/genuine_34.jpg'
                        },
                        {
                            src:'./src/assets/images/genuine_36.jpg'
                        },
                        {
                            src:'./src/assets/images/genuine_38.jpg'
                        }
                    ],
                    [
                        {
                            src:'./src/assets/images/genuine_45.jpg'
                        },
                        {
                            src:'./src/assets/images/genuine_46.jpg'
                        },
                        {
                            src:'./src/assets/images/genuine_47.jpg'
                        },
                        {
                            src:'./src/assets/images/genuine_48.jpg'
                        },
                        {
                            src:'./src/assets/images/genuine_49.jpg'
                        }
                    ]
                ]
            }
        }
    }
</script>
<style>
    .secu-banner img {
        width: 100%;
        vertical-align: middle;
        border:none;
    }
    .secu-row{
        width:100%;
        overflow: hidden;
    }
    .secu-row .bordereee{
        width:100%;
        border-left: 1px solid #eee;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .secu-row .bordereee li{
        width:20%;
        float:left;
    }
    .bordereee li img{
        width:100%;
        border: none;
        vertical-align: middle;
    }
    .secu-brand{
        margin: 20px 10px 20px 10px;
    }
    .part-yellow{
        background-color: #fdf2de;
    }
    .border-right {
        border-right: 1px solid #eee;
    }
    #ba{
        margin-top: 30px;
        padding-bottom: 30px;
    }
    .part-red {
        background-color: #990000;
        padding: 30px 0;
    }
    .part-red .secu-banner:nth-of-type(2){
        margin-top:30px;
    }
    .part-huangse {
        background-color: #fdf2de;
        padding: 30px 0;
        overflow:hidden;
    }
    #ban{
        margin-top:5px;
    }
    .part-coffee {
        background-color: #59493f;
        padding: 30px 0 30px 0;
    }
    .secu-row .two li{
        width:20%;
        float:left;
    }
    .two li img{
        width:100%;
        border: none;
        vertical-align: middle;
    }
    .zhuanchang {
        margin: 2px;
    }
    #hs{
        margin-top:5px;
    }
    .part-hs {
        background-color: #d1c0a5;
        padding: 30px 0;
    }
    .secu-contact {
        width: 100%;
    }
    .secu-contact .secu-contact-width70 {
        width: 70%;
        float: left;
    }
    .secu-contact-slogan {
        margin-right: 15px;
    }
    .secu-contact-go {
        margin: 30px 80px 0px 15px;
    }
    .secu-contact .secu-contact-width30 {
        width: 30%;
        float: left;
    }
    .secu-contact-social {
        margin: 10px 10px 15px 0;
    }
    .secu-contact img{
        width:100%;
    }
</style>