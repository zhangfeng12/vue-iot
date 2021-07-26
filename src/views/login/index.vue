<template>
	<div class="login">
		<nav-bar-one :mainTitle="'登入'" :leftShow="false" :rightShow="false"></nav-bar-one>
		
		<div class="logo">
			<img src="@/assets/logo.jpeg" />
		</div>
		
		<div class="query_box">
			<nut-textinput
				class="input_box"
				v-model="inputval"
				placeholder="接入号/ICCID号/手机号"
				:clearBtn="true"
			></nut-textinput>
			<nut-button
				block 
				shape="circle"
				type="primary"
				class="queryBtn"
				@click="clickHandler"
			>查询</nut-button>
		</div>
		
	</div>
</template>

<script>
	
	import NavBarOne from '@/components/nav-bar/index.vue';
	
	export default {
		name:"login",
		components:{
			NavBarOne
		},
		data() {
			return {
				inputval:''
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
	
	.login .logo {
		text-align: center;
	}
	
	.login .logo img {
		width: 300px;
		padding: 80px 0;
	}
	
	.login .query_box {
		width: 80%;
		margin: 0 auto;
	}
	
	.login .query_box .input_box {
		margin-bottom: 30px;
	}
	
	.login .query_box .queryBtn {
		border-radius: 8px;
	}
	
</style>
