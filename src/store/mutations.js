import { putCache, delCache } from "../utils/cache";
//更改store中state状态的唯一方法就是提交mutation,就很类似事件.每个mutation都有一个字符串类型的事件类型和一个回调函数，
// 我们需要改变state的值就要在回调函数中改变。我们要执行这个回调函数，那么我们需要执行一个相应的调用方法：store.commit

// 上传信息
export const UPLOAD_INFO = 'UPLOAD_INFO';
// 登录状态
export const LOGIN_STATUS = 'LOGIN_STATUS';
// 用户信息
export const USER_INFO = 'USER_INFO';
// 是否登陆
export const IS_LOGIN = 'IS_LOGIN';

const mutations = {
  
	[UPLOAD_INFO](state, info){
		state.uploadInfo = info;
	},
	
	[LOGIN_STATUS](state, info){
		state.loginStatus = info;
	},
	
	[USER_INFO](state, info){
		putCache('USER_INFO', JSON.stringify(info));
		state.userInfo = info;
	},
	
};

export default mutations;
