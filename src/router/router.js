import  Vue    from 'vue';
import  VueRouter    from   'vue-router';


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:() => import('../view/IndexView'),

    },
    {
        path: '/Editor',
        component: () => import('../components/MdEditor')
    },
    {
        path: '/Article',
        component: () => import('../view/PassageView')
    }
]

const router= new VueRouter({
    mode:'hash',
    routes
})


export default router