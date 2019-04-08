import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import Search from './views/Search'
import Channel from './views/Channel'

Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'search',
        path: '/search',
        component: Search,
    },
    {
        name: 'channel',
        path: '/channels/:id',
        component: Channel,
        props: true,
    },
]

export default new VueRouter({
    mode: 'hash',
    routes
});
