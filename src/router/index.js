import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Router from "vue-router";
Vue.use(VueRouter)
Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home',//默认重定向至home首页，避免空白页面
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            index: 1
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/Cart.vue'),
        meta: {
            index: 1
        }
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/User.vue'),
        meta: {
            index: 1
        }
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('@/views/Category.vue'),
        meta: {
            index: 1
        }
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: {
            index: 2
        }
    },
    {
        path: '/product-list',
        name: 'product-list',
        component: () => import('@/views/ProductList.vue'),
        meta: {
            index: 2
        }
    },
    {
        path: '/product/:id',
        name: 'product',
        component: () => import('@/views/ProductDetail.vue'),
        meta: {
            index: 3
        }
    },
    {
        path: '/create-order',
        name: 'create-order',
        component: () => import('@/views/CreateOrder.vue'),
        meta: {
            index: 2
        }

    },
    {
        path: '/address',
        name: 'address',
        component: () => import('@/views/Address.vue'),
        meta: {
            index: 2
        }
    }, {
        path: '/address-edit',
        name: 'address-edit',
        component: () => import('@/views/AddressEdit.vue'),
        meta: {
            index: 3
        }
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('@/views/Order.vue'),
        meta: {
            index: 2
        }
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/Setting.vue'),
        meta: {
            index: 2
        }
    },
    {
        path: '/order-detail',
        name: 'order-detail',
        meta: {
            index: 3
        },
        component: () => import(/* webpackChunkName: "order-detail" */ '@/views/OrderDetail.vue'),
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}


export default router



