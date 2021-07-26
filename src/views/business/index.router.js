export const business_routers = [
	{
	  path: "/activate", //激活当前卡
	  name: "activate",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "激活卡片",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/activate.vue"], resolve),
	},
	{
	  path: "/announcement", //公示公告
	  name: "announcement",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "公示公告",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/announcement.vue"], resolve),
	},
	{
	  path: "/diagnosis", //智能诊断
	  name: "diagnosis",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "智能诊断",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/diagnosis.vue"], resolve),
	},
	{
	  path: "/feedback", //问题反馈
	  name: "feedback",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "问题反馈",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/feedback.vue"], resolve),
	},
	{
	  path: "/onlineBuy", //在线够买
	  name: "onlineBuy",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "在线够买",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/onlineBuy.vue"], resolve),
	},
	{
	  path: "/order", //套餐订购
	  name: "order",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "套餐订购",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/order.vue"], resolve),
	},
	{
	  path: "/recharge", //余额充值
	  name: "recharge",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "余额充值",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/recharge.vue"], resolve),
	},
	{
	  path: "/record", //充值记录
	  name: "record",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "充值记录",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/record.vue"], resolve),
	},
	{
	  path: "/registration", //实名登记
	  name: "registration",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "实名登记",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/registration.vue"], resolve),
	},
	{
	  path: "/telecomQuery", //电信实名查询
	  name: "telecomQuery",
	  meta: {
	    keepAlive: false,
	    scrollTop: 0,
	    cacheArray: [],
	    ignoreAuth: true,
	    index: 1000,
	    tracking: {
	      name: "电信实名查询",
	      eleLv: 3,
	    },
	  },
	  component: (resolve) => require(["./views/telecomQuery.vue"], resolve),
	}
];