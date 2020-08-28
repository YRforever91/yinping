<template>
    <main class="bigb">
        <div class="box">
            <div class="apptop">
                <img src="https://img.ingping.com/images/activity/template/345/app_download_01.jpg" alt="">
            </div>
            <div class="appcenter">
                <img src="https://img.ingping.com/images/activity/template/345/app_download_02.jpg" alt="">
            </div>
            <div class="appbotton">
                <img src="https://img.ingping.com/images/activity/template/345/app_download_03.jpg" alt="">
            </div>
            <div class="appbk">
                <router-link to="/index/"> 
                    <p>前往音平商城</p>
                </router-link>       
            </div>
        </div>
    </main>
</template>

<style scoped>
    .bigb{
        background: #eee;
        width:100%;
    }
    .box{
        width:100%;
    }
    .apptop{
        width: 200%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        margin-bottom:20px;
    }
    .apptop img{
        width: 100%;
    }
    .appcenter{
        width: 200%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .appcenter img{
        width: 100%;
    }
    .appbotton{
        width: 100%;
        vertical-align: middle;
    }
    .appbk p{
        font-size: 16px;
        display: block;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        position: fixed;
        bottom: 72px;
        line-height: 45px;
        background: #ff005a;
        color: #fff;
        border-radius: 30px;
        width: 240px;
        text-align: center;
        margin: auto;
        left: 50%;
        margin-left: -120px;
        letter-spacing: .5px;
    }
    .appbk{
        width: 200%;
        height: 200px;
        background: #eee;
    }
</style>