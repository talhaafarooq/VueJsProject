import {createRouter, createWebHashHistory} from 'vue-router';

const routes=[
    {
        name:'Home',
        path:'/',
        component:()=>import('@/components/Home.vue'),
    },
    {
        name:'AboutUs',
        path:'/about',
        component:()=>import('@/components/About.vue'),
    },
    {
        name:'ContactUs',
        path:'/contactus',
        component:()=>import('@/components/Contact.vue'),
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;