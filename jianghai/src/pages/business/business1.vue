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

			<div class="newContent fadeInUp animated">
				<p>{{businessIntroduce}}</p>
			</div>
			<ul class="fenlei list-unstyled text-center list-inline fadeInUp animated">
				<li @click="tab(index,item)" v-for="(item,index) in contentList">
					<a :class="{active : index===curId}" class="m2menu_a">{{item.title}}</a>
				</li>
			</ul>
			<div v-show="index===curId" v-for="(content, index) in contentList">
				<div class="flexCenter">
					<div class="title fadeInUp animated">
						<h3>{{content.title}}</h3>
						<p>{{content.Eng}}</p>
					</div>
				</div>
				<div class="newContent fadeInUp animated">
					<p>{{content.content}}</p>
				</div>
			</div>
			<div class="imgConte" v-show="curId===3">
				<div class="hover">
					<img class="xiaoyou" src="../../../static/images/xiaoyou.png" />
					<img class="xiaoyouHover pulse animated" src="../../../static/images/xiaoyouHover.png" />
				</div>
				<img src="../../../static/images/xiaoyou1.png" />
			</div>
			<a class="serCon3More" @click="skip()">进入{{nextTitle}}</a>
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
				curId: 0,
				businessTitle: "江海学院",
				businessTitleEng: 'UVC XueYuan',
				nextTitle: '行业研究院',
				nextEng: 'HangYeYanjiuYuan',
				nextContent: '链接高校资源，与国内外知名研究院、高校建立战略合作伙伴关系、吸收行业资深从业者，与全国各高校合作成立研究院。覆盖北大科技开发部、浙大、北科大工程研究院、南邮研究院、南理工、东南大学、江苏建科院等。通过前瞻性研究精准研判行业形势，把握行业脉搏，挖掘行业潜能，为科技创新行业提供理论研究依据。为有限合伙人、政府机构、VC/PE投资机构、战略投资者等提供专业的信息、数据、研究以及咨询服务。',
				businessIntroduce: '江海学院分设行业研究院、U系列大奖赛、创投学院和江海英才校友总会四大产品线，适时与各高校研究院、当地政府展开深度合作。致力打造企业家培训、优质项目、创新企业的培育高地。',
				contentList: [{
					title: '行业研究院',
					Eng: 'HangYeYanjiuYuan',
					content: '链接高校资源，与国内外知名研究院、高校建立战略合作伙伴关系、吸收行业资深从业者，与全国各高校合作成立研究院。覆盖北大科技开发部、浙大、北科大工程研究院、南邮研究院、南理工、东南大学、江苏建科院等。通过前瞻性研究精准研判行业形势，把握行业脉搏，挖掘行业潜能，为科技创新行业提供理论研究依据。为有限合伙人、政府机构、VC/PE投资机构、战略投资者等提供专业的信息、数据、研究以及咨询服务。'
				}, {
					title: 'U系列大奖赛',
					Eng: 'UXiLieDaJiangSai',
					content: '以创业大赛和创业交流会的形式开展。创业大赛即为产业投融资选拔对接平台，邀请知名企业家和投资人担任导师和评委，选拔出有潜力的优秀企业，帮助有股权融资需求的成长型企业对接风险投资。创交会即为打造企业级服务成长实验室，为创业企业进行企业服务商甄选，为企业服务商进行产品及服务展示，为各政府园区的创业服务进行线下的了解交流互动对接的大型集会。 U系列大奖赛以“创新驱动”国家战略为方向，以全球化视野为指引，着眼世界前沿科技和高端人才，着力增强科技驱动发展新动力，是提升自主创新能力的国际性创业大赛。大赛聚焦前沿科技领域，关注热点创新主题，深度挖掘人才和项目，为战略新兴产业发展寻找最先进的技术解决方案，为创业者提供项目展示平台、交流平台和持续成长空间。创业交流会汇聚优质企业、政府和服务机构，打造多维交流互动平台，打开多端资源接口，实现资源充分对接。'
				}, {
					title: '创投学院',
					Eng: 'ChuangTouXueYuan',
					content: '创投实战商学院：为成长型企业创始人提供全周期全阶段创业教育培训的专业机构。致力于为有潜力成为中国未来商业领袖的创业者提供学习、融资、推广、合作、咨询等服务，构建创新企业领袖的“黄埔军校”。创投成长营：是成长型企业创始人提供全周期、全阶段创业教育培训的专业机构。致力于为有潜力成为中国未来商业领袖的创业者提供学习、融资、推广、合作、咨询等服务，构建创新企业领袖的“黄埔军校”。创业家私塾（创业家个人）：为处于快速发展阶段（天使-B轮），且拥有创新的技术、产品和商业模式的企业创始人，提供成长孵化培训，加速企业跨周期性成长，打造“创业明星成长孵化器”。高管进阶班（合伙人级别）：以成长期企业创始人、联合创始人为主要目标，帮助创业者解决创业难题、验证商业创意、打造商业IP。产业加速班：对标优中选优的掌握“产业先进性”的垂直产业投资大咖和明星企业家，为产业从业者提供产业升级路径和方法论，致力提升产业升级成功率。主要培训反向包括新零售、企业级服务内容、区块链产业等。全球游学营：组织有拓宽眼界需求的创业者、投资人共赴欧美各国考察，开拓国际视野、引进先进技术、挖掘高端人才、达成商务合作、实现转型升级，深度洞悉全球创投趋势。与明星企业家、产业大家、知名高管等开展深度合作，建立成熟的培训体系，通过提供针对性培训，为创业者到高管培育提供一站式创业培训。'
				}, {
					title: '江海英才校友总会',
					Eng: 'UVC YingCaiXiaoYouZongHui',
					content: '汇聚南通籍优秀学子和，以共性为牵引，齐聚南通籍优质力量，推动家乡发展和城市建设。 近年南通市相继启动实施“江海英才”计划、产业人才发展“321”行动计划、“人才八条新政”，发布《南通市人才发展促进条例》等政策，大力度引进海内外高层次创新创业人才，鼓励和支持就业创业。南通市拥有19所省级示范高中，其中，海门中学、启东中学、南通中学、南通一中全国知名。为充分发挥南通教育之乡的优势，江海英才校友总会聚集南通地地区校友力量，实现校友资源的互利共享，实现横向跨学校、跨领域的校友合作发展。'
				}]
			}

		},
		created() {

		},
		components: {
			towtop,
			towbottom
		},
		methods: {

			tab(index, item) {
				var that = this;
				that.curId = index;
				that.nextTitle = item.title;
				that.nextEng = item.Eng;
				that.nextContent = item.content;
			},
			//跳转
			skip() {
				this.$router.push({
					path: "/product1"
				});
			}
		},

	}
</script>

<style>
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
		position: relative;
	}
	
	.imgConte img:last-child {
		margin-top: 40px;
	}
	
	.xiaoyou {
		width: 800px;
		height: 459px;
	}
	
	.hover .xiaoyouHover {
		position: absolute;
		top: 300px;
		right: 0;
		display: none;
	}
	
	.hover:hover .xiaoyouHover {
		display: block;
	}
</style>