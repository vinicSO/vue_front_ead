import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/home/HomeView.vue";
import MySupports from "@/views/supports/MySupports.vue";
import ModulesAndLessons from "@/views/modules/ModulesAndLessons.vue";
import Auth from "@/views/auth/Auth.vue";
import ForgotPassword from "@/views/auth/ForgotPassword.vue";
import ResetPassword from "@/views/auth/ResetPassword.vue";
import { TOKEN_NAME } from '@/config';
import store from '@/store';

const routes = [
    {
        path: '/',
        name: 'auth',
        component: Auth
    },
    {
        path: '/recuperar-senha',
        name: 'forgot.password',
        component: ForgotPassword
    },
    {
        path: '/reset/:token',
        name: 'reset.password',
        component: ResetPassword,
        props: true,
    },
    {
        path: '/campus',
        component: () => import('@/layouts/DefaultTemplate.vue'),
        children: [
            {
                path: 'modulos',
                name: 'campus.modules',
                component: ModulesAndLessons
            },
            {
                path: 'minhas-duvidas',
                name: 'campus.my.supports',
                component: MySupports
            },
            {
                path: '',
                name: 'campus.home',
                component: HomeView
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async (to, _, next) => {
    const loggedIn = store.state.users.loggedIn

    if (to.name != 'reset.password' && !loggedIn) {

        const token = await localStorage.getItem(TOKEN_NAME)

        if (!token && to.name != 'auth' && to.name != 'forgot.password') {
            return router.push({name: 'auth'})
        }

        await store.dispatch('getUserAuth')
            .catch(() => {
                if (to.name != 'auth') return router.push({name: 'auth'})
            })
    }

    next()
})

export default router
