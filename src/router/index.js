import { createRouter, createWebHistory } from 'vue-router'
import TravelPrepView from "../views/TravelPrepView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (savedPosition) {
                    resolve(savedPosition)
                } else {
                    resolve({ top: 0 })
                }
            }, 400) // Small delay to ensure content is loaded
        })
    },
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: TravelPrepView,
            // props: (route) => ({ page: parseInt(route.query.page) || 1 }),
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView,
            // props: (route) => ({ page: parseInt(route.query.page) || 1 }),
        },

    ],
})

export default router
