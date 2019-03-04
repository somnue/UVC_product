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
				businessTitle: '江海星空',
				businessTitleEng: 'ChuangTouGongChang',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '智慧园区托管',
					productEng: '',
					productContent: '为各地提供特色小镇、园区的托管运营服务。基于物联网和智能设施的运营体系，提高园区安全及运营效率。',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: '联合办公',
					productEng: '',
					productContent: '运用各地合作商会、上市公司和特级建筑总承包等企业空闲物理空间，打造联合办公场所，充分利用闲置资源，引入初创阶段企业。',
				}, {
					imgSrc: '../../../static/images/3.png',
					productTitle: '双创服务',
					productEng: 'ShuangChuangFuWu',
					productContent: '为园区内企业提供国家、省、市各级创新创业认定及相关优惠政策的申请服务。',
				}, {
					imgSrc: '../../../static/images/4.png',
					productTitle: '产业服务',
					productEng: 'ChanYeFuWu',
					productContent: '对于具有一定产业聚合能力的园区，通过合理设计，选优引入，形成良性产业链，避免因盲目聚集与扩张，造成产能过剩和配套不全的双重影响。',
				}, {
					imgSrc: '../../../static/images/5.png',
					productTitle: '智慧地产',
					productEng: 'ZhiHuiDiChan',
					productContent: '围绕建筑产业布局，将人工智能、智能制造和物联网等高科技领域，融入地产规划中。通过科技为产业赋能，构建建筑技术新内核，引领建筑技术的革命之路。',
				}, {
					imgSrc: '../../../static/images/6.png',
					productTitle: '产业地产',
					productEng: 'ChanYeDiChan',
					productContent: '盘活当地存量工业地产 ，结合孵化器、加速器建设，为当地政府实现产业换挡升级。',
				}, {
					imgSrc: '../../../static/images/7.png',
					productTitle: '特色小镇、科技园建设',
					productEng: 'TeSeXiaoZhen、KeJiYuanJianShe',
					productContent: '背靠南通建设集团、南通28家特级总承包企业以及万科、碧桂园等大型房地产开发企业，以“开发建设+运营维护”的模式，建设特色小镇及科技园。',
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