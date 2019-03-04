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
				businessTitle: '基金星空',
				businessTitleEng: 'ChuangTouGongChang',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '基金运维服务',
					productEng: 'JiJinYunWeiFuWu',
					productContent: '向其他基金公司输出成熟的基金运维管理服务。提供适应私募基金管理公司的运营系统和OA系统，为其在管基金保驾护航',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: '基金投资',
					productEng: 'JiJinTouZi',
					productContent: '专注天使基金、创投基金（VC）、PE基金和并购基金。以专业的团队和基金管理经验，为创业项目前期、发展到成熟提供全系列基金投资服务。',
				}, {
					imgSrc: '../../../static/images/3.png',
					productTitle: '产业升级',
					productEng: 'ChanYeShengJi',
					productContent: '提供产业现状剖析、生态产业规划、升级方案实施和升级效果监测的全流程服务。通过发现问题和分析问题，为企业寻求并确认升级路径。通过并购、招商等手段，实现升级目标。通过对已完成的产业升级效果进行跟踪评测，及时调整，达成升级目标。',
				}, {
					imgSrc: '../../../static/images/4.png',
					productTitle: '产业基金',
					productEng: 'ChanYeJiJin',
					productContent: '针对高速发展期的企业，匹配产业基金，以满足扩增产能的需求，使企业发展与产能良好适配、协同增长。',
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