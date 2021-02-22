import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from "../view/home";
import Login from "../view/Login";
let router =new VueRouter({
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'/home',
            component:home
        },
        {
            path:'/Login',
            component:Login
        },

    ]
})
export default router