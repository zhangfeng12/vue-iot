import * as types from "../store/mutations";
import { delCache, putCache, getCache } from "../utils/cache";

let Global = {};
Global.install = function(Vue){
	// eslint-disable-next-line
	//去指定页面或者返回
	Vue.prototype.$toPage = function(name) {
		if (name == -1) {
			this.$router.go(-1);
		} else {
			this.$router.push({
				name: name,
			});
		}
	};
}
export default Global;