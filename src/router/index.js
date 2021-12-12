import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [ //配置路由规则
        {
            path:'/',
            redirect:'/home'
        },
        {
            path: '/home',
            name: 'Home',
            component:()=>import('../components/tabbar/Home.vue')
        },
        {
            path: '/member',
            name: 'Member',
            component:()=>import('../components/tabbar/Member.vue')
        },
        {
            path: '/shopping',
            name: 'Shopping',
            component:()=>import('../components/tabbar/Shopping.vue')
        },
        {
            path: '/search',
            name: 'Search',
            component:()=>import('../components/tabbar/Search.vue')
        },
    ],
    linkActiveClass: 'mui-active' //覆盖默认路由高亮的类
});

export default router;