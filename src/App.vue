<template>
  <div id="app">
	<transition :name="transitionName">
	  <keep-alive :include="keepAlive">
		<router-view />
	  </keep-alive>
	</transition>
  </div>
</template>

<script>
	
	import * as types from "./store/mutations";
	
	export default {
		data() {
			return {
				transitionName:'',
				animationDisplay: false
			}
		},
		computed:{
			keepAlive(){
				return this.$store.state.keepAlive;
			}
		},
		created(){
			// eslint-disable-next-line
			if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
				this.animationDisplay =true;
			}else if(this.get_android_version() > 7){
				this.animationDisplay =true;
			}
		},
		methods:{
			get_android_version() {
			  var ua = navigator.userAgent.toLowerCase();
			  var version = null;
			  if (ua.indexOf("android") > 0) {
			      var reg = /android [\d._]+/gi;
			      var v_info = ua.match(reg);
			      version = (v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, "."); //得到版本号4.2.2
			      version = parseInt(version.split('.')[0]);// 得到版本号第一位
			  }
			  return version;
			}
		},
		watch: {
			$route(to, from) {
				if(!to.meta.index || !from.meta.index || !this.animationDisplay) {
					this.transitionName = "";
					return null;
				}
				//如果to索引大于from索引,判断为前进状态,反之则为后退状态
				if (to.meta.index > from.meta.index) {
					this.transitionName = "fold-left";
				} else {
					this.transitionName = "fold-right";
				}
			},
		},
	}
	
</script>

<style lang="less">
	
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: systemgrayscale;
		color: #2c3e50;
		user-select: none;
		background-color: #f5f5f5;
		box-sizing: border-box;
		min-height: 100vh;
		font-size: 28px;
		position: relative;
	}
	
	.transition-position {
		width: 100vw;
		height: 100vh;
		position: absolute;
		background-color: #fff;
		top: 0;
		left: 0;
	}
	
	.fold-left-enter-active {
		animation-name: fold-left-in;
		animation-duration: 0.5s;
	}
	
	.fold-left-leave-active {
		animation-name: fold-left-out;
		animation-duration: 0.5s;
	}
	
	@keyframes fold-left-in {
		0% {
			-webkit-transform: translate3d(100%, 0, 0);
			-moz-transform: translate3d(100%, 0, 0);
			-ms-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0);
		}
		100% {
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}
	
	@keyframes fold-left-out {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		100% {
			-webkit-transform: translate3d(-100%, 0, 0);
			-moz-transform: translate3d(-100%, 0, 0);
			-ms-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0);
		}
	}
	
	.fold-right-enter-active {
		animation-name: fold-right-in;
		animation-duration: 0.4s;
	}
	
	.fold-right-leave-active {
		animation-name: fold-right-out;
		animation-duration: 0.4s;
	}
	
	@keyframes fold-right-in{
		0% {
			width: 100%;
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0);
		}
		100% {
			width: 100%;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}
	
	@keyframes fold-right-out  {
		0% {
			width: 100%;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		100% {
			width: 100%;
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0);
		}
	}
	
</style>
