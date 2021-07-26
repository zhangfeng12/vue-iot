import { getCache } from "../utils/cache";

//  state为单一状态树，在state中需要定义我们所需要管理的数组、对象、字符串等等，只有在这里定义了，在vue.js的组件中才能获取你定义的这个对象的状态
const state = {
	keepAlive: ['index','login','business'],//页面缓存
	isLogin: getCache('IS_LOGIN') || false,
	userInfo: JSON.parse(getCache('USER_INFO')) || null,
  
};
export default state;
