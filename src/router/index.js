import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/Index',
    },
    {
        path: '/Index',
        component: () =>
            import ("../views/Index.vue"),
        meta: {title: "首页"},
        children: [
            {
                path: 'Devices',
                component: () =>
                    import ("../views/Devices.vue"),
                meta: {title: "设备中心"}
            },
            {
                path: 'AndroidRemote/:deviceId(\\d+)',
                component: () =>
                    import ("../views/AndroidRemote.vue"),
                meta: {title: "远程控制"}
            },
        ]
    },
    {
        path: '/Home/:projectId(\\d+)',
        component: () =>
            import ("../views/Home.vue"),
        redirect: {name: 'Test'},
        children: [
            {
                path: 'Devices',
                component: () =>
                    import ("../views/Devices.vue"),
                meta: {title: "设备中心"}
            },
            {
                path: 'AndroidRemote/:deviceId(\\d+)',
                component: () =>
                    import ("../views/AndroidRemote.vue"),
                meta: {title: "远程控制"}
            },
            {
                path: 'Test',
                name: 'Test',
                component: () =>
                    import ("../components/Test.vue"),
                meta: {title: "设备中心"}
            },
            {
                path: 'AndroidTestCase',
                name: 'AndroidTestCase',
                component: () =>
                    import ("../views/AndroidTestCase.vue"),
                meta: {title: "安卓测试用例"}
            }
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})