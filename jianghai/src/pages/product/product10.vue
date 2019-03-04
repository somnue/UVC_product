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
				businessTitle: '江海沙龙',
				businessTitleEng: 'JiangHaiShaLong',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '聚合资源',
					productEng: 'JuHeZiYuan',
					productContent: '汇聚各级南通商会、江海英才校友总会、南通总承包商分公司、捷星城市分公司、绿洲健康旗舰店、花信金融科技分公司和优必选分公司等社群资源。开展新能源汽车销售、服务及教育机器人销售、健康管理、消费金融服务、创新策略服务、房地产开发、基金服务、招商引资等业务。',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: '管理系统',
					productEng: 'GuanLiXiTong',
					productContent: '为企业提供数据管理、工作流管理和项目管理的培训、咨询服务，提高企业运维效能。',
				}, {
					imgSrc: '../../../static/images/3.png',
					productTitle: '功能模块',
					productEng: 'GongNengMoKuai',
					productContent: '针对企业合伙人，提供线上产品到线下运营的全套服务。从基金投资、招商引智到创新策略服务、双创培训和消费金融，更有健康管理、销售管理等，为合伙人提供针对性强、实时对接、高效转化的全方位服务。',
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
<style scoped>

</style>