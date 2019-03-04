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
				businessTitle: '智能招商',
				businessTitleEng: 'ChuangTouGongChang',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '全国招商政策研究',
					productEng: 'QuanGuoZhaoShangZhengCeYanJiu',
					productContent: '调取宏观要素分析库数据，触达全国、乃至全球的创新政策数据平台，链接全国各地方经济、政策数据库，智能生成全国招商政策报告。',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: '招商政策建议',
					productEng: 'ZhaoShangZhengCeJianYi',
					productContent: '根据全国招商政策报告，快速响应区域、地方政策变动，调整项目落地引导策略。',
				}, {
					imgSrc: '../../../static/images/3.png',
					productTitle: '政策-项目要素匹配',
					productEng: 'XiangMuYaoSuPiPei',
					productContent: '调取创新项目生成库项目资源，通过项目标签与地方招商政策智能匹配，生成优先招商项目清单，提高政策与项目的匹配效率与精准度。',
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