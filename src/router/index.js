import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import TestPage from '@/pages/TestPage'
import TestPage2 from '@/pages/Test2'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexPage
        },
        {
            path: '/test',
            name: 'test',
            component: TestPage
        },
        {
            path: '/test2',
            name: 'test2',
            component: TestPage2
        }
    ]
})
