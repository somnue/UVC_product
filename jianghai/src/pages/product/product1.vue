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
				<li v-for="(item,index) in productList" @click="skip(item,index)">
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
				businessTitle: '江海学院',
				businessTitleEng: 'UVC XueYuan',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '创投实战商学院',
					productEng: 'ChuangTouShiZhanShangXueYuan',
					productContent: '是成长型企业创始人提供全周期、全阶段创业教育培训的专业机构。致力于为有潜力成为中国未来商业领袖的创业者提供学习、融资、推广、合作、咨询等服务，构建创新企业领袖的“黄埔军校”。',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: '创投成长营',
					productEng: 'ChuangTouChengZhangYing',
					productContent: '为处于快速发展阶段（天使-B轮），且拥有创新的技术、产品和商业模式的企业创始人，提供成长孵化培训，加速企业跨周期性成长，打造“创业明星成长孵化器”。',
				}, {
					imgSrc: '../../../static/images/3.png',
					productTitle: '创业家私塾(创业家个人)',
					productEng: 'ChuangYeJiaSiSHU',
					productContent: '以成长期企业创始人、联合创始人为主要目标，帮助创业者解决创业难题、验证商业创意、打造商业IP。',
				}, {
					imgSrc: '../../../static/images/4.png',
					productTitle: '上市冲刺班',
					productEng: 'ShangShiChongCiBan',
					productContent: '针对VP、高管，旨在解决企业快速发展时期，核心高管与创始人思维、执行不同频的顽疾。让高管跟上创始人的成长步伐，成为企业内部的有力支撑，一同推动企业健康、快速的发展。',
				}, {
					imgSrc: '../../../static/images/5.png',
					productTitle: '高管进阶班(合伙人级别)',
					productEng: 'GaoGuanJinJieBan',
					productContent: '以独角兽、准上市企业和新上市企业创始人为培训对象。以聚合创新产业力量，培育新生行业领袖为使命。',
				}, {
					imgSrc: '../../../static/images/6.png',
					productTitle: '产业加速班',
					productEng: 'ChanYeJiaSuBan',
					productContent: '对标优中选优的掌握“产业先进性”的垂直产业投资大咖和明星企业家，为产业从业者提供产业升级路径和方法论，致力提升产业升级成功率。主要培训反向包括新零售、企业级服务内容、区块链产业等。',
				}, {
					imgSrc: '../../../static/images/7.png',
					productTitle: '全球游学营',
					productEng: 'QuanQiuLvXueYing',
					productContent: '组织有拓宽眼界需求的创业者、投资人共赴欧美各国考察，开拓国际视野、引进先进技术、挖掘高端人才、达成商务合作、实现转型升级，深度洞悉全球创投趋势。',
				}, {
					imgSrc: '../../../static/images/8.png',
					productTitle: '行业研究院',
					productEng: 'HangYeYanJiuYuan',
					productContent: '链接高校资源，与各高校合作建设研究院。包括北大科技开发部、浙大、北科大工程研究院、南邮研究院、南理工、东南大学、江苏建科院等。研究方向覆盖8大业务模块，提供全方位行研资源与成果。',
				}, {
					imgSrc: '../../../static/images/9.png',
					productTitle: 'U系列大奖赛',
					productEng: 'U XiLieDaJiangSai',
					productContent: 'U系列大奖赛包括创业大赛和创交会。其中，创业大赛邀请知名企业家和投资人担任导师和评委，选拔出有潜力的优秀企业，帮助有股权融资需求的成长型企业对接风险投资，打造产业投融资选拔对接平台。创交会为创业企业进行企业服务商甄选，为企业服务商进行产品及服务展示，为各政府园区的创业服务进行线下的了解交流互动对接的大型集会，打造企业级服务成长实验室。',
				}, {
					imgSrc: '../../../static/images/10.png',
					productTitle: '江海英才校友总会',
					productEng: 'UVC YingCaiXiaoYouZongHui',
					productContent: '近年南通市相继启动实施“江海英才”计划、产业人才发展“321”行动计划、“人才八条新政”，发布《南通市人才发展促进条例》等政策，大力度引进海内外高层次创新创业人才，鼓励和支持就业创业。南通市拥有19所省级示范高中，其中，海门中学、启东中学、南通中学、南通一中全国知名。为充分发挥南通教育之乡的优势，江海英才校友总会聚集南通地地区校友力量，实现校友资源的互利共享，实现横向跨学校、跨领域的校友合作发展。',
				}, {
					imgSrc: '../../../static/images/11.png',
					productTitle: '江海英才荟',
					productEng: 'UVC YingCaiHui',
					productContent: '汇聚优质成熟企业接班人，为中国新一代企业家提供交流平台。',
				}]
			}
		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			//跳转
			skip(item, index) {
				var that = this;
				that.curId = index
				that.nextTitle = item.productTitle;
				that.nextEng = item.productEng;
				that.nextContent = item.productContent;
				if(that.curId == 9) {
					this.$router.push({
						path: "/visualBusinessDetil"
					})
				} else {
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
		},
	}
</script>
<style scoped>
	.productContent {
		display: -webkit-box;
		/*! autoprefixer: off */
		-webkit-box-orient: vertical;
		/* autoprefixer: on */
		-webkit-line-clamp: 3;
		overflow: hidden;
		font-size: 14px;
	}
</style>