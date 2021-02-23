import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from "../view/home";
import Login from "../view/Login";
import Register from "../view/Register";
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
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },

    ]
})
export default router