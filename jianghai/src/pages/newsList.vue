<template>
	<div class="newsList">
		<towtop></towtop>
		<div class="container">
			<div class="title fadeInUp animated">
				<h3>江海学院</h3>
				<p>UVC XUEYUAN</p>
			</div>
			<div class="newContent">
				<p>江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院</p>
				<p>江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院江海学院</p>
			</div>
		</div>
		<towbottom></towbottom>
	</div>
	
</template>

<script>
	import towtop from '@/components/testTop'
	import towbottom from '@/components/testBottom'
	export default {
		data() {
			return {
				
			}
			
		},
		created() {

		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			
		},

	}
</script>

<style>
	/*.container {margin-bottom: 30px;}*/
	.newsList{margin-top: 160px;width: 100%;}
	.title{font-size: 16px;position: relative;width: 175px;height: 80px;margin: 0 auto;box-sizing: border-box;padding-top: 15px;text-align: center;margin-bottom: 30px;}
	.title h3 {font-size: 28px;padding-bottom: 5px;}
	.title h3:before{display: block;content: "";width: 50%;height: 50%;border-top:3px solid #ccc;border-left:3px solid #ccc;position: absolute;left: 0;top: 0;}
	.title h3:after{display: block;content: "";width: 50%;height: 50%;border-right:3px solid #ccc;border-bottom:3px solid #ccc;position: absolute;right: 0;bottom: 0;}
	.title p {color: #999;}
	.newContent {text-indent: 2em;line-height: 22px;}
</style>