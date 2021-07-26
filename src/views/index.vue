<template>
	
	<div class="transition-position">
		<keep-alive :include="keepAlive">
			<router-view />
		</keep-alive>
	</div>
	
</template>

<script>
	
	export default {
		name:'index',
		data() {
			return {
				
			}
		},
		computed:{
			keepAlive(){
				return this.$store.state.keepAlive;
			}
		}
	}
	
</script>

<style>
</style>
