<template>
	<div class="nav-bar-one-box">
		<nut-navbar
			class="nav-bar-one"
		    @on-click-back="leftClick" 
		    @on-click-more="rightClick"
			:leftShow="leftShow"
			:rightShow="rightShow"
		>
		{{mainTitle}}
			<div slot="more-icon">
		        <slot name="right-icon">
					<span class="iconfont icon-font-more" v-text="rightText"></span>
		        </slot>
			</div>
			<div slot="back-icon">
		        <slot name="left-icon">
					<span class="iconfont icon-font-left"></span>
		        </slot>
			</div>
		</nut-navbar>
	</div>
	
</template>

<script>
	
	export default {
		name: "nav-bar-one",
		props: {
			leftHandle: {
				type: Function,
				default: null,
			},
			rigthHandle: {
				type: Function,
				default: null,
			},
			leftShow: {
				type: Boolean,
				default: true,
			},
			rightShow: {
				type: Boolean,
				default: false,
			},
			rightText: {
				type: String,
				default: "",
			},
			mainTitle: {
				type: String,
				default: "请传入标题",
			},
		},
		data() {
			return {
				
			}
		},
		methods:{
			leftClick(){
				if (this.leftHandle) {
					this.leftHandle();
					return;
				}
				this.$toPage(-1);
			},
			rightClick(){
				if (this.rigthHandle) {
					this.rigthHandle();
					return;
				}
			}
		}
	}
	
</script>

<style style="less" scoped>
	.nav-bar-one-box {
		width: 100vw;
		height: 92px;
		background: #f5f5f5;
	}
	
	.nav-bar-one {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 9999;
		height: 92px !important;
		line-height: 92px !important;
		background: #f5f5f5 !important;
	}
	
	.icon-font-left {
		font-size: 48px;
		font-weight: 600;
		color: #191c23;
	}
	
	.icon-font-more {
		font-size: 48px;
		font-weight: 400;
		color: #191c23;
	}
	
</style>
