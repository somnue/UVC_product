<template>
	<div class="newsList">
		<towtop></towtop>
		<div class="container">
			<div class="flexCenter">
				<div class="title fadeInUp animated">
					<h3>{{businessTitle}}</h3>
					<p>{{businessTitleEng}}</p>
				</div>
			</div>
			<ul class="productList clearfix">
				<li v-for="item in productList" @click="skip(item)">
					<img :src="item.imgSrc" alt="">
					<div class="productTitle">{{item.productTitle}}</div>
					<div class="productContent">{{item.productContent}}</div>
				</li>

			</ul>

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
				businessTitle: '创投大家',
				businessTitleEng: 'ChuangTouDaJia',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '创投基金募集平台',
					productEng: 'ChuangTouJiJinMuJiPingTai',
					productContent: '以符合基金业协会对私募基金的合规性约定为前提，通过线上APP，对线下接洽认定的合格投资者进行创投基金的推介和募集。充分发挥线上应用程序的便捷性和时效性，更好地披露信息，及时地推介优质基金。',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: '创投云课堂',
					productEng: 'ChuangTouYunKeTang',
					productContent: '与江海学院联动，以投资人为受众，提供“移动”的投资课堂。对于创投投资形式、内核、各产业特点等进行剖析，不受空间和时间的限制，在线即可学投资。',
				}, ]
			}

		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			//跳转
			skip(item) {
				var that = this;
				that.nextTitle = item.productTitle;
				that.nextEng = item.productEng;
				that.nextContent = item.productContent;

				this.$router.push({
					path: "/productDetil",
					query: {
						detailsTitle: this.nextTitle,
						detailsContent: this.nextContent,
						detailsEng: this.nextEng
					}
				});
			}
		}
	}
</script>
<style >
</style>