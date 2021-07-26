import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/404.vue";
import { business_routers } from "./views/business/index.js";

if (!window.VueRouter) Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
		path: "/",
		name: "index",
		component: (resolve) => require(["./views/index.vue"], resolve),
		redirect: "/login",
		children: [
			{
				name: "login",
				path: "/login", //登入页
				meta: {
					keepAlive: true,
					scrollTop: 0,
					index: 10,
					cacheArray: [],
					ignoreAuth: true,
					tracking: {
						name: "登入页",
						eleLv: 1,
					},
				},
				component: (resolve) => require(["./views/login/index.vue"], resolve)
			}
	    ]
    },
    {
		path: "/business",
		name: "business",
		meta: {
			keepAlive: false,
			scrollTop: 0,
			cacheArray: [],
			index: 100,
			tracking: {
				name: "业务中心",
				eleLv: 2,
			},
		},
		component: (resolve) => require(["./views/business/index.vue"], resolve)
    },
	...business_routers,
	{
		path:"*",
		name:"404",
		meta: {
			keepAlive: false,
			scrollTop: 0,
			cacheArray: [],
			index: 100000,
			tracking: {
				name: "404",
				eleLv: 5,
			},
		},
		component:NotFound
	},
  ]
});
