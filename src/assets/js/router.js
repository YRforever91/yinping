//引入包
import VueRouter from 'vue-router'
//导入Vue
import footer from '../../components/footer.vue' //底部导航栏
import index from '../../components/index.vue'    //首页
import ctm_service from '../../components/ctm_service.vue'  //客服
import classify from '../../components/classify.vue'    //分类
import suit from '../../components/suit.vue'           //套装
import activity from '../../components/activity.vue'    //活动
import shoppingcar from '../../components/shoppingcar.vue'  //购物车

import left_nav from '../../components/left_nav.vue'  //左侧菜单
import my from '../../components/my.vue'  //个人信息
import search from '../../components/search.vue'  //查找

import quality_ass from '../../components/quality_ass.vue'  //正平保障
import l_delivery from '../../components/l_delivery.vue'  //闪电发货
import s_day_return from '../../components/s_day_return.vue'  //七天退换
import aftersale from '../../components/aftersale.vue'  //售后无忧

import purchase_qlt from '../../components/purchase_qlt.vue' //购品质

import bottom from '../../components/bottom.vue'  //底部样式
import heater from '../../components/heater.vue'  //底部样式
import shoping from '../../components/shoping.vue' //商品布局
import goods from '../../components/goods.vue' //商品单价
import moreact from '../../components/moreact.vue' //更多活动
import classification from '../../components/classification.vue'//商品分类
import details from '../../components/details.vue'//商品详情

import ypApp from '../../components/ypApp.vue'//app
import login from '../../components/login.vue'//登录


//注册路由
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: footer,
            children: [
                {
                    // 首页
                    path: '/index',
                    component: index
                },
                {
                    //分类
                    path: '/classify',
                    component: classify
                },
                {
                    //活动
                    path: '/activity',
                    component: activity
                },
                {
                    //套装
                    path: '/suit',
                    component: suit
                }
            ],
            redirect: '/index'
        },
        {
            //客服
            path: '/ctm_service',
            component: ctm_service
        },
        {
            //购物车
            path: '/shoppingcar',
            component: shoppingcar
        },
        {
            //质量保障
            path: '/quality_ass',
            component: quality_ass
        },
        {
            //闪电发货
            path: '/l_delivery',
            component: l_delivery
        },
        {
            //七天退换
            path: '/s_day_return',
            component: s_day_return
        },
        {
            //售后无忧
            path: '/aftersale',
            component: aftersale
        },
        {
            //查找
            path: '/search',
            component: search
        },
        {
            //左侧导航
            path: '/left_nav',
            component: left_nav
        },
        {
            //我的详情
            path:'/my',
            component: my
        },
        {
            //购品质
            path: '/purchase_qlt',
            component: purchase_qlt
        },
        {
            path:'/shoping/:sh',
            component:shoping
        },
        {
            path:'/goods',
            component:goods,
        },
        {
            path:'/moreact',
            component:moreact,
        },
        {
            path:'/classification',
            component:classification
        },
        {
            path:'/details',
            component:details
        },
        {
            path:'/ypApp',
            component:ypApp
        },
        {
            path:'/login',
            component:login
        },
        //
        {
            path: '/*',
            redirect: '/index'
        }
    ]
})