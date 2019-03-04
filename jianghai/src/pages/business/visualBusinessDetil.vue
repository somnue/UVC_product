<template>
	<div class="businessDetil">
		<towtop></towtop>
		<div class="container" style="min-height: 500px;">
			<div class="flexCenter">
				<div class="title fadeInUp animated">
					<h3>江海英才校友总会</h3>
					<p>UVC YingCaiXiaoYouZongHui</p>
				</div>
			</div>
			<div class="newContent fadeInUp animated">
				<p>汇聚南通籍优秀学子和，以共性为牵引，齐聚南通籍优质力量，推动家乡发展和城市建设。</p>
				<p>近年南通市相继启动实施“江海英才”计划、产业人才发展“321”行动计划、“人才八条新政”，发布《南通市人才发展促进条例》等政策，大力度引进海内外高层次创新创业人才，鼓励和支持就业创业。南通市拥有19所省级示范高中，其中，海门中学、启东中学、南通中学、南通一中全国知名。为充分发挥南通教育之乡的优势，江海英才校友总会聚集南通地地区校友力量，实现校友资源的互利共享，实现横向跨学校、跨领域的校友合作发展。</p>
				<div class="imgConte">
					<div class="hover">
						<img class="xiaoyou" src="../../../static/images/xiaoyou.png" />
						<img @mouseenter="onMouseOver" @mouseleave="onMouseLeave" class="smallImg" src="../../../static/images/small.png"/>
						<img v-show="seen" class="xiaoyouHover pulse animated" src="../../../static/images/xiaoyouHover.png" />
					</div>
					<img src="../../../static/images/xiaoyou1.png" />
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
				seen: false,
			}

		},
		created() {

		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			onMouseOver: function() {
				var that = this;
				that.seen = true;
			},
			onMouseLeave: function() {
				var that = this;
				that.seen = false;
			},
		},

	}
</script>

<style scoped>
	.businessDetil {
		margin-top: 60px;
	}
	
	.imgConte {
		display: flex;
		margin-top: 40px;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		flex-flow: column;
	}
	
	.imgConte img:last-child {
		margin-top: 40px;
	}
	
	.xiaoyou {
		width: 800px;
		height: 459px;
	}
	.hover {
		position: relative;
	}
	.hover .xiaoyouHover {
		position: absolute;
		top: 300px;
		right: 0;
	}
	.smallImg {
		position: absolute;
		right: 139px;
		bottom: 204px;
	}
</style>