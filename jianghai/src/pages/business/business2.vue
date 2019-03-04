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
			<a class="serCon3More " @click="skip()">进入{{nextTitle}}</a>
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
				businessTitle: "江海星空",
				businessTitleEng: 'UVC XingKong',
				nextTitle: '江海星空',
				nextEng: 'UVC XingKong',
				nextContent: '定制化的园区托管运营服务，包括招商托管、招商策划、团队组建、政策解读、人才引进、产业标准制定、孵化器/加速器建设服务、产业基金组建及投资、产业定位、园区开发策划、园区物业托管、园区服务平台搭建、企业服务、投融资、定向行业企业对接服务、园区开发投资、园区配套投资等，实现园区的科学、合理、高效运营。智慧园区托管运营：为各地方提供特色小镇、园区的托管运营服务。基于物联网和智能设施的运营体系，提高园区安全及运营效率。双创服务：为园区内企业提供国家、省、市各级创新创业认定及相关优惠政策的申请服务。产业服务：对于具有一定产业聚合能力的园区，通过合理设计，选优引入，形成良性产业链，避免盲目聚集+扩张造成产能过剩和配套不全的双重影响。联合办公：运用各地合作商会、上市公司、特级建筑总承包等企业空闲物理空间，打造联合办公场所，充分利用闲置资源，引入初创阶段企业。智慧地产：围绕建筑产业布局，将人工智能、智能制造、物联网等高科技领域，融入地产规划中。通过科技为产业赋能，构建建筑技术新内核，引领建筑技术的革命之路。特色小镇、科技园建设：背靠南通建设集团及南通23家特级总承包企业，以及万科、碧桂园等大型房地产开发企业，以开发建设+运营维护的模式建设特色小镇及科技园。',
				businessIntroduce: '江海星空包括江海星空、孵化网络、智能招商、创投工厂、Universe Media、AI投研、创投大家七大大功能条线。旨在为创新企业提供创新项目落地一站式服务。',
				contentList: [{
					title: '江海星空',
					Eng: 'UVC XingKong',
					content: '定制化的园区托管运营服务，包括招商托管、招商策划、团队组建、政策解读、人才引进、产业标准制定、孵化器/加速器建设服务、产业基金组建及投资、产业定位、园区开发策划、园区物业托管、园区服务平台搭建、企业服务、投融资、定向行业企业对接服务、园区开发投资、园区配套投资等，实现园区的科学、合理、高效运营。智慧园区托管运营：为各地方提供特色小镇、园区的托管运营服务。基于物联网和智能设施的运营体系，提高园区安全及运营效率。双创服务：为园区内企业提供国家、省、市各级创新创业认定及相关优惠政策的申请服务。产业服务：对于具有一定产业聚合能力的园区，通过合理设计，选优引入，形成良性产业链，避免盲目聚集+扩张造成产能过剩和配套不全的双重影响。联合办公：运用各地合作商会、上市公司、特级建筑总承包等企业空闲物理空间，打造联合办公场所，充分利用闲置资源，引入初创阶段企业。智慧地产：围绕建筑产业布局，将人工智能、智能制造、物联网等高科技领域，融入地产规划中。通过科技为产业赋能，构建建筑技术新内核，引领建筑技术的革命之路。特色小镇、科技园建设：背靠南通建设集团及南通23家特级总承包企业，以及万科、碧桂园等大型房地产开发企业，以开发建设+运营维护的模式建设特色小镇及科技园。',
				}, {
					title: '孵化网络',
					Eng: 'FuHuaWangLuo',
					content: '提供研发、生产、经营场地、通讯、网络与办公室等方面的共享设施，系统的培训和咨询，政策、融资、法律和市场推广等方面的支持，降低新创企业的创业风险和创业成本，提高企业的成活率和成功率。提供良好的创业环境和条件，帮助创业者把发明和成果尽快形成商品进入市场，提供综合服务，帮助新兴的小企业迅速壮大形成规模，为社会培养成功的企业。为高新技术成果转化和科技企业创业提供不断优化的孵化氛围，为科技企业发展提供必需的市场化和国际化服务。孵化器内部企业的聚集会产生积极的集聚效应，有助于企业之间的知识交流，促进创新成果的产生。致力于国际高新技术企业孵化事业增墨添彩，着力推动高新技术企业创业向专业化、国际化发展。定位于是国际高新技术产业孵化器，致力于世界前沿的互联网、电力电子、生物科技等科学技术的研发、孵化、以及技术转移，并将其商业化、本土化。孵化器采取合资、合作、技术转移、授权等方式将澳大利亚、新西兰、瑞士等国家先进的技术与项目向中国转移转化，并通过投资与技术入股等方式，为国内的创业团队提供支持，开拓国内外市场。'
				}, {
					title: '智能招商',
					Eng: 'ZhiNengZhaoShang',
					content: '调取宏观要素分析库数据，利用AI技术触达全球（国）创新政策数据平台，链接全国各地方经济、政策数据库，智能生成全国招商政策报告并进行专题推送，令创业者和投资者能获取招商政策最新动态。根据全国招商政策报告，快速响应区域、地方政策变动，调整项目落地引导策略；建立动态跟踪系统，实时调整策略，避免企业进入政策盲区和误区。调取创新项目生成库项目资源，通过项目标签与地方招商政策智能匹配，生成优先招商项目清单，提高政策与项目的匹配效率与精准度。'
				},
				//  {
				// 	title: '创投工场',
				// 	Eng: 'ChuangTouGongChang',
				// 	content: '创投工场:打造项目在线搜寻与匹配系统，为创业者与投资者提供互通媒介，实现项目的高效挖掘与展示。'
				// }, 
				{
					title: 'Universe Media',
					Eng: '',
					content: '人物访谈：对企业家和金融家进行人物专访，文字和视频同步更新作为专题推出。访谈对象包括：各行业有影响力企业和杰出人物；拥有自主品牌、商标、专利的企业；中华老字号、驰名商标、500强企业；有独特创业经历或商业模式的新锐企业、知名投资人等。访谈将全方位展现企业家精神，创业历程，财富梦想；声色并茂展现企业家风采，透析企业家的智慧与经营理念，管理精髓；解读投资理念和要素，为创业者树立奋斗标杆，注入内核力量。主题论坛：就时下热点定期举办主题论坛，构造属于大脑的风暴盛宴。邀请企业家、金融家、经济学者等畅所欲言，各抒己见。主题方向包括当代经济形势、企业品牌化优势等。论坛包容汇通，鼓励具有启发性、独特性和全局性的观点。旨在开拓思维、独特新颖，进一步引导企业创新、创造。企业纪录片：用电视、电影的表现手法对企业各个层面有重点、有针对、有秩序地进行策划、拍摄、录音、剪辑、配音、配乐、合成、输出和播出；凸显企业独特的风格面貌，从而提高企业美誉度、信任度和企业品牌公信力，打造品牌的力量。政府招商宣传片：以纪录片手法，突破传统宣传片时间限制，以创投视角独特解剖当地文化、风土、人情、政策，使政府招商更为可读、可解和可塑。有深度：深度调研、剖析热点创投行业、企业和技术等，形成具有独到见解的深度解析报告，为投资者和创业者过滤信息噪音，提供深加工的信息参考。Usee：通过AI智能筛选市场财经资讯，生成侧重于创业圈、创投圈、招商圈的资讯集合，每日推送。'
				},
				//  {
				// 	title: 'AI投研',
				// 	Eng: 'AITouYan',
				// 	content: 'AI投研采用线上科技手段，实现信息、项目资源的自动抓取、筛选和分析，打造全球资源信息库。'
				// }, {
				// 	title: '创投大家',
				// 	Eng: 'ChuangTouDaJia',
				// 	content: '创投大家:为投资人提供线上优质创投基金推介平台，智能匹配投资人需求。'
				// }
				]
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
				this.curId = index;
				that.nextTitle = item.title;
				that.nextEng = item.Eng;
				that.nextContent = item.content;
			},
			//跳转
			skip() {
				if(this.curId == 0) {
					this.$router.push({
						path: "/product8"
					})
				}else if(this.curId == 1) {
					this.$router.push({
						path: "/product5"
					})
				}else if(this.curId == 2) {
					this.$router.push({
						path: "/product9"
					})
				}else if(this.curId == 3) {
					this.$router.push({
						path: "/product2"
					})
				}else if(this.curId == 4) {
					this.$router.push({
						path: "/product3"
					})
				}else if(this.curId == 5) {
					this.$router.push({
						path: "/product4"
					})
				}else {
					this.$router.push({
						path: "/product7"
					})
				}
			}
		},

	}
</script>

<style>

</style>