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
				businessTitle: '孵化网络',
				businessTitleEng: 'ChuangTouGongChang',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '离岸孵化器',
					productEng: 'LiAnFuHuaQi',
					productContent: '江海天空自有北京、上海、深圳、南通、香港、温哥华和旧金山七个离岸孵化器，将持续增设阿姆斯特丹、巴黎、布鲁塞尔、柏林、以色列、洛杉矶、南京、武汉、广州等海内外孵化空间，进一步布局全球孵化器网络。通过与世界知名高校合作，离岸孵化全球领先项目，落地于中国境内园区，为创投者智能对接并导入创投政策。',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: '本地孵化器/加速器',
					productEng: 'BenDiFuHuaQi/JiaSuQi',
					productContent: '深入对接各地市区县，合作建设及运营本地孵化器、加速器。对接离岸孵化器所培育项目，在本地继续孵化或加速生产。',
				}, {
					imgSrc: '../../../static/images/3.png',
					productTitle: '云孵化',
					productEng: 'YunFuHua',
					productContent: '与各地知名孵化器运营机构联盟，共享孵化器空间及项目资源，开启乘数效应。',
				}, {
					imgSrc: '../../../static/images/4.png',
					productTitle: '财务顾问服务（FA）',
					productEng: 'CaiWuGuWenFuWu(FA)',
					productContent: '针对VP、高管，旨在解决企业快速发展时期，核心高管与创始人思维、执行不同频的顽疾。让高管跟上创始人的成长步伐，成为企业内部的有力支撑，一同推动企业健康、快速的发展。',
				}, {
					imgSrc: '../../../static/images/5.png',
					productTitle: '物理空间运营',
					productEng: 'WuLiKongJianYunYing',
					productContent: '旨在通过合作、长租、自持等形式在各地获取并运营物业，为企业提供孵化器、加速器等物理空间。通过与各地政府及知名开发商进行合作，盘活闲置物业，为企业人才提供配套人才公寓。结合江海人才基金，为高端人才提供优质生活服务。',
				}, {
					imgSrc: '../../../static/images/6.png',
					productTitle: '企业运维服务',
					productEng: 'QiYeYunWeiFuWu',
					productContent: '为创投企业提供注册地址、商标注册、财务、会计外包、审计业务和政府对接等企业运维服务。',
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