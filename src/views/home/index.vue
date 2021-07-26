<template>
	<div class="transition-position">
		<nav-bar-one :mainTitle="'首页'" :leftShow="false" :rightShow="false"></nav-bar-one>
		<nut-button @click="linkTo">我是首页按钮</nut-button>
		<span class="iconfont icon-iot"></span> 
	</div>
	
	
</template>

<script>
	
	import NavBarOne from '@/components/nav-bar/index.vue';
	
	export default {
		name:"home",
		components:{
			NavBarOne
		},
		data() {
			return {
				
			}
		},
		methods:{
			linkTo(){
				this.$router.push({
					path: "/test",
				});
			}
		},
		
	}
</script>

<style style="less" scoped>
	.iconfont.icon-iot {
		font-size: 40px;
	}
</style>
