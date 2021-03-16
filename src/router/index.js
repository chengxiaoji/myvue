import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router =new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import("@/view/home.vue")
        },
        {
            path:'/home',
            component:()=>import("@/view/home.vue")
        },
        {
            path:'/login',
            component:()=>import("@/view/Login.vue")
        },
        {
            path:'/register',
            component:()=>import("@/view/Register.vue")
        },
        {
            path:'/userinfo/:id',
            component:()=>import("@/view/userInfo.vue")
        },

    ]
})
export default router