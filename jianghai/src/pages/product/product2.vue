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
				businessTitle: '创投工场',
				businessTitleEng: 'ChuangTouGongChang',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '投资雷达（寻找项目）',
					productEng: 'TouZiLeiDa',
					productContent: '通过创业工场的系统筛选、创投机构对接，创业项目加工为标签化、系统化的筛选标的。创业工厂为投资方配置的筛选“雷达”，取代线下低效的信息获取方式，抓取更为准确的潜在匹配项目，提高信息获取效率。',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: '视频路演',
					productEng: 'ShiPinLuYan',
					productContent: '通过线上直播录播系统，创业项目的视频路演乘坐上线上可视化传播“快车”。突破地域、打破时间的限制，创业者与投资人构建起更为紧密高效的对接通道。',
				}, {
					imgSrc: '../../../static/images/3.png',
					productTitle: '在线估值',
					productEng: 'ZaiXianGuZhi',
					productContent: '为充分发掘企业价值，维护投资人权益。基于大数据与AI技术的估值体系，为创投工场平台上企业提供第三方估值服务。在线估值体系，以科技为底层逻辑，为投资人提供价值判断参考，缩小投资风险。',
				}]
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
<style>

</style>