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
				businessTitle: 'AI投研',
				businessTitleEng: 'AI投研',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '全球创投信息抓取',
					productEng: 'QuanQiuChuangTouXinXiZhuanQu',
					productContent: '全球创投信息抓取系统通过可视化地图显示每天全球各个地区最热点的创投项目及创投话题 。信息涵盖相关项目的图片、视频及联系方式。系统可构建全球最火创业项目列表，包括每个项目所在地、融资状况、公司产品定位或方向、联系方式及其他public available数据。与此同时，通过全球创投项目搜索任意话题，将能同步追溯到参与次话题的人、事件和公司。',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: 'AI项目筛选',
					productEng: 'AI XiangMuShaiXuan',
					productContent: 'AI项目筛选利用AI技术，实现数据清理、自动项目筛选和准确度设计功能。通过语义学分析实现数据清理。对应目标项目类型，系统可自动初筛项目。同时，系统支持模糊筛选plus人工复核模式，通过结果反馈进行深度学习，进而实现筛选准确度的自我升级。',
				}, {
					imgSrc: '../../../static/images/3.png',
					productTitle: 'AI投研报告',
					productEng: 'AI TouYanBaoGao',
					productContent: 'AI项目数据清理后，进一步通过语义学分析，抽取项目要素，形成项目要素表。抽取行业数据信息库及项目信息库数据，进行行业及对标企业智能比对分析，形成初步投研报告。定向追踪企业动态，自动更新投研报告，标识变化单位。',
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