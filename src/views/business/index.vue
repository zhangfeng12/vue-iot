<template>
	
	<div class="business-wrap transition-position">
		<nav-bar-one :mainTitle="'业务中心'" :leftShow="true" :rightShow="false"></nav-bar-one>
		
		<div class="business-content">
			<div class="business-content-top" :style="{background:'url('+options.businessBG+') no-repeat'}">
				<div class="userInfo">
					<div class="wechatAvatar">
						<img :src="options.wechatAvatar" />
					</div>
					<div class="othersMsg">
						<div class="wechatName">{{options.wechatName}}</div>
						<div class="cardNum">{{options.cardNum}}</div>
						<div class="manufacturer">{{options.manufacturer}}</div>
					</div>
					<div class="refresh">
						<span>
							<i class="iconfont icon-gengxin" :class="{'loading':isLoading}"></i>
							更新
						</span>
					</div>
				</div>
				<div class="flowInfo">
					<div class="flowInfo-top">
						<nut-circleprogress
							:progress="options.progress" 
							:is-auto="true"
							:progress-option="{
								strokeOutWidth: 5,
								progressColor: '#fff',
								backColor:'rgba(255,255,255,.3)',
							}"
							:stroke-inner-width	="5"
						>
							<p>{{options.flowSurplusText}}</p>
							<p>{{options.flowSurplus}}</p>
						</nut-circleprogress>
					</div>
					<div class="flowInfo-bottom">
						<div class="totle">
							<span>{{options.flowTotleText}}</span> 
							<span>{{options.flowTotle}}</span>
						</div>
						<div class="used">
							<span>{{options.flowUsedText}}</span>
							<span>{{options.flowUsed}}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="business-content-mid"></div>
			<div class="business-content-bottom"></div>
		</div>
	</div>
	
</template>

<script>
	
	import NavBarOne from '@/components/nav-bar/index.vue';
	
	export default {
		name:"business",
		components:{
			NavBarOne
		},
		data() {
			return {
				options:{
					businessBG:require("@/assets/business.jpeg"),
					wechatName:'KKong',
					wechatAvatar:require('@/assets/WechatAvatar.jpeg'),
					cardNum:"8986112120508844521",
					manufacturer:"DCP电信 - T1通道",
					progress:'50',
					flowTotleText:"总流量/GB",
					flowTotle:"60",
					flowUsedText:"已使用/GB",
					flowUsed:"34.39",
					flowSurplusText:"剩余流量",
					flowSurplus:"25.61G"
				},
				isLoading:false
			}
		},
		methods:{
			clickHandler(){
				// 调用接口
				if(this.inputval && this.inputval.length > 10){
					this.$router.push({
						path: "/business",
					});
				}else{
					this.$dialog({
						content: "未查到相关信息，请重新输入。",
						closeBtn:false,  //显式右上角关闭按钮
						onOkBtn(event) {  //确定按钮点击事件
						  this.close(); //关闭对话框
						},
						onCancelBtn(event) {  //取消按钮点击事件，默认行为关闭对话框
						  this.close(); //关闭对话框
						  //return false;  //阻止默认“关闭对话框”的行为
						}
					});
				}
			}
		},
		
	}
	
</script>

<style lang="less" scoped="scoped">
	
	.business-content {
		position: relative;
		height: calc(100%-92px);
		color: #fff;
	}
	
	.business-content-top {
		position: relative;
		height: 55%;
		// background: linear-gradient(to bottom right, rgb(55,178,186),rgb(47,168,176),rgb(67,191,201));
	}
	
	.business-content-top .userInfo {
		position: relative;
		height: 200px;
		display: flex;
		align-items: center;
	}
	
	.business-content-top .userInfo .wechatAvatar {
		overflow: hidden;
		float: left;
		padding: 0 40px;
	}
	
	.business-content-top .userInfo .wechatAvatar img {
		width: 120px;
		border-radius: 50%;
	}
	
	.business-content-top .userInfo .othersMsg {
		position: relative;
		width: 54%;
	}
	
	.business-content-top .userInfo .othersMsg > div {
		padding: 4px 0;
	}
	
	.business-content-top .userInfo .refresh {
		position: absolute;
		top: 40px;
		right: 20px;
	}
	
</style>
