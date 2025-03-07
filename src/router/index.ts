
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/referrals',
            name: 'referrals',
            component: () => import('@/views/ReferralsView.vue'),
        },
        {
            path: '/wallet-add',
            name: 'wallet-add',
            component: () => import('@/views/WalletAddView.vue'),
        },
        {
            path: '/wallet-out',
            name: 'wallet-out',
            component: () => import('@/views/WalletOutView.vue'),
        },
        {
            path: '/help',
            name: 'help',
            component: () => import('@/views/HelpView.vue'),
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('@/views/FaqView.vue'),
        },
        {
            path: '/support',
            name: 'support',
            component: () => import('@/views/SupportView.vue'),
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: () => import('@/views/CalculatorView.vue'),
        },
    ],
})

export default router
