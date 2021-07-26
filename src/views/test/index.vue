<template>
	<div class="transition-position">
		<nav-bar-one :mainTitle="'测试页面'"> </nav-bar-one>
		<nut-button @click="linkTo">我是测试页面按钮</nut-button>
	</div>
</template>

<script>
	
	import NavBarOne from "@/components/nav-bar/index.vue";
	
	export default {
		name:"test",
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
					path: "/home",
				});
			}
		},
		
	}
	
</script>

<style>
</style>
