<template>
	<div class="newsList">
		<towtop></towtop>
		<div class="container">
			<div class="flexCenter">
				<div class="title fadeInUp animated">
					<h3>媒体中心</h3>
					<p>Media Center</p>
				</div>
			</div>
			<div class="video-content">
				<div class="video-list" v-for="item in videoList">
					<img :src="item.image"/>
					<p>{{item.name}}</p>
					<img src="../../static/images/play.png"/>
				</div>
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
				headerBg: 'headerBg',
				videoList:[{image:'../../static/images/v1.png',name:'创投实战商学院开学典礼'},{image:'../../static/images/v2.png',name:'江海天空2019战略发布会'},{image:'../../static/images/v3.png',name:'江海天空2019年会直播'},{image:'../../static/images/v1.png',name:'创投实战商学院开学典礼'},{image:'../../static/images/v2.png',name:'江海天空2019战略发布会'},{image:'../../static/images/v3.png',name:'江海天空2019年会直播'}]
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
	.video-content{display: flex;margin-top: 30px;flex-wrap: wrap;justify-content: space-between;}
	.video-list {width: 29%;display: flex;align-items:center;flex-direction: column;margin-bottom: 30px;box-sizing: border-box;position: relative;}
	.video-list img:first-child {width: 300px;height: 214px;margin-bottom: 10px;border: 1px solid #f9f9f9;padding: 5px;box-shadow: 0 0 10px #0546b4;}
	.video-list img:last-child {position: absolute;top: 32%;}
	.video-list p{font-size: 22px;color: #0546B4;text-align: center;}
</style>