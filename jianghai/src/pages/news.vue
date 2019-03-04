<template>
	<div>
		<towtop></towtop>
		<div class="mainBg" style="min-height: 10px;">
			<div class="serviceBox">
				<div class="container">
					<!-- <div class="box1Top fadeInUp animated" >
						<img src="../../static/images/news.png" class="img-responsive">
					</div> -->
					<div class="flexCenter">
						<div class="title fadeInUp animated">
								<h3>{{businessTitle}}</h3>
								<p>{{businessTitleEng}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="onepageBox">
					<ul class="artlist list-unstyled" >
						<li class="fadeInUp animated hoverBg" v-for="item in items">
							<a href="javascript:;" target="_blank">
								<h3 class="arTit">{{item.title}}</h3>
								<span class="arTime">{{item.time}}</span>
								<span class="line"><i></i></span>
								<div class="arBrief">
									<p>{{item.content}}</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
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
				businessTitle: "新闻动态",
        businessTitleEng: 'News',
				headerBg: 'headerBg',
				items:[{title:'南通市委组织部、南通市人才工作办公室主办、江海天空承办的“江海天空科技创新座谈会”',time:'2019-01-29',content:'南通市委组织部、南通市人才工作办公室主办、江海天空承办的“江海天空科技创新座谈会”，十余名高校、科研院所、科技企业、科技孵化园区、众创空间、行业协会及联盟、科技创业团队和专业服务机构等科技创新要素汇聚江海天空。围绕科技创新、科技创业，深入研讨“双创”升级、科技成果转化、产业结构调整、人才引智，汇聚智慧和前沿科技展示，各路英才，共襄盛举，打造了一场创新盛宴。'},{title:'江海天空的控股母公司UVC控股集团牵头发起成立的北京南通企业商会正式获批成立',time:'2019-01-16',content:'江海天空的控股母公司UVC控股集团牵头发起成立的北京南通企业商会正式获批成立，作为北京南通企业商会的发起单位和会长单位，将携手各会员打造“通商在京资源对接平台”，为大型企业集团提供互助、协作、发展的优质平台。'},{title:'经过3年的积累、磨炼、发展，为进一步实现江海天空创业团队的理念',time:'2018-11-14',content:'至此，经过3年的积累、磨炼、发展，为进一步实现江海天空创业团队的理念，明确业务板块，谋求IPO上市。江海天空创业团队，将上海天外望、并购基金管理平台的业务与子公司进行全新梳理，正式注册成立南通江海天空科技创业有限公司（下称“江海天空”）。在原基础架构上优化升级控股集团——江苏天外望控股集团有限公司（简称“UVC控股”），同时围绕“两级平台、三个主体”的战略布局，下设以江海天空为主导的一级平台，以及由天望江海、产业控股并购平台组成的二级平台，形成以上海和温哥华为管理双总部，以北京、深圳、南通、香港、旧金山为区域运营中心的管理架构，侧重于战略新兴产业的“投行+投资”、“孵化+基金”的业务模式，力争成为全球一流综合产业金融服务集团。江海天空将致力于科技双创与创投基金管理服务，同步提供多维创业咨询、独立财经媒体、创新策略咨询、线上线下招商、创业创投服务、项目全程孵化的综合性科技创新服务集团。业务涵盖天使/VC投资、科技地产、基金三方服务、园区招商、商会咨询、江海学院等业务。通过北京、上海、深圳、南通、香港、温哥华和旧金山七个自有物理空间，同步增设全球化、网络化物理空间，最终实现项目孵化、招商引资和创投基金三位一体的业务模式，构建江海天空多元盈利能力。'},{title:'上海天外望与南京南邮信息产业技术研究院管理团队达成合作',time:'2018-10',content:'上海天外望与南京南邮信息产业技术研究院管理团队达成合作，共同设立南邮科创产业股权投资基金，由上海天外望作为基金管理人，南邮研究院、南京市科创基金共同出资。基金将重点布局5G一万亿市场，投资天使及VC阶段优质项目，进一步推动南京新兴信息领域的产业化建设，共同探索信息产业的未来发展。上海天外望与南邮信息产业技术研究院的此次成功合作，开启了上海天外望与高校研究合作新篇章，成功推动江海天空创业团队的理念飞跃式发展。'},{title:'并购基金管理平台子公司南通现代建筑投资管理有限公司（下称“南通现代建筑”）成立',time:'2018-03-20',content:'并购基金管理平台子公司南通现代建筑投资管理有限公司（下称“南通现代建筑”）成立。南通现代建筑借鉴各种“民投”的抱团取暖模式，聚合南通建筑地产业龙头企业，打造深度联合模式，发扬共享经济理念，致力于打造一个嫁接产业资本与金融资本深度融合的建筑地产业基金管理平台。'},{title:'由上海天外望联合国内主流产业领域知名上市公司发起成立并购基金管理平台',time:'2018-03-01',content:'由上海天外望联合国内主流产业领域知名上市公司、具备系统性挖掘新兴产业并购标的的业界精英以及拥有雄厚股权投资资金储备的财团和商会等共同发起成立并购基金管理平台。并购基金管理平台注册资本10亿元，首期实缴3亿元，立志于并购整合10-20个产业链的产融结合型基金管理平台。'},{title:'江海天空创投团队天使轮投资的优必选项目',time:'2018-02-16',content:'江海天空创投团队天使轮投资的优必选项目，于2018年初完成了8.2亿美元的C轮融资，估值达到50亿美元，成为全球估值最高的AI创业公司。成为江海天空的创投之路稳健的一大跨步。'},{title:'经历2年发展历程，上海天外望已初具规模，实缴金额达3亿元人民币',time:'2017-10-09',content:'经历2年发展历程，上海天外望已初具规模，实缴金额达3亿元人民币。以此为机，上海天外望作为基金管理人，于南通天外望投资中心（有限合伙）下设立子基金海门天外望创业投资基金合伙企业（有限合伙）。海门天外望创业投资基金合伙企业（有限合伙）专注早期创投项目，重点关注新能源、新材料、新服务、新IT(含通信网络)、新环保、新农业、新制造（有科技含量或营销创新）和新体智（医疗医药健康及文化）等新兴领域，开启上海天外望创投新方向。2018年初——江海天空创投团队天使轮投资的优必选项目，于2018年初完成了8.2亿美元的C轮融资，估值达到50亿美元，成为全球估值最高的AI创业公司。成为江海天空的创投之路稳健的一大跨步。'},{title:'江海天空创业团队初步规划商会生态群模式',time:'2017-09-19',content:'江海天空创业团队初步规划商会生态群模式，并设立上海天外望全资子公司北京天外望管理咨询有限公司（下称“北京天外望”）。北京天外望作为商会生态群企业管理咨询类业务平台，选址首都北京，为打通在京资源构建基础。'},{title:'上海天外望收购深圳河石资本管理有限公司（下称“河石资本”）',time:'2017-09-14',content:'上海天外望收购深圳河石资本管理有限公司（下称“河石资本”）。河石资本实收资本6200万，在管基金规模超25亿。专注于UVC资本二级市场证券类业务的开展，包括上市公司定增、量化投资、智能投顾、上市公司咨询服务等。河石资本以其在一级半、二级市场的布局及实力，助力上海天外望金融平台的升级打造。'},{title:'上海天外望全资子公司南通天外望信息科技有限公司（下称“天外望信息科技”）成立',time:'2017-07-12',content:'上海天外望全资子公司南通天外望信息科技有限公司（下称“天外望信息科技”）成立。天外望信息科技以人工智能技术为核心，以公司内外部合伙人为支柱，打造开放式的合作关系和投资、运营的运作模式。通过与战略合作方共享资源，撬动项目和资金优势，拓展新兴技术领域的资源，推动公司的进一步发展。'},{title:'上海天外望为创投基金的发展组建项目池',time:'2017-05-04',content:'上海天外望战略性参股昂若（深圳）资本管理有限公司，以其在TMT领域的投研实力，打通优质项目源头，为创投基金的发展组建项目池。'},{title:'上海天外望牵头设立母基金南通天外望投资中心（有限合伙）扩大企业运作实力',time:'2017-02-21',content:'上海天外望牵头设立母基金南通天外望投资中心（有限合伙），重点关注第一代信息技术产业、新材料、新能源、高端先进制造、节能环保、生物医药、医疗器械及安全装备产业等领域。聚合企业资源优势，投资高成长性项目，实现资产增值，扩大企业运作实力。'},{title:'江海天空成立上海天外望投资管理有限公司',time:'2015-06-11',content:'江海天空创业团队胸怀“举头天外望，无我这般人”的气魄，抱着对行业的热情和期许，以擅长的领域作为切入口，成立上海天外望投资管理有限公司（下称“上海天外望”）。上海天外望注册资本5000万元，专注于国内外各战略新兴产业方向创新项目，聚焦海内外PE、并购基金、二级市场投资及配套投行服务。'}]
			}
			
		},
		created() {

		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			
		},

	}
</script>

<style scoped>
	.artlist {padding: 0;}
	.artlist li a{padding: 30px;color: #333;}
	.artlist li a:hover .arTit{ color:#0546B4;}
	/*.artlist li a:after {top: 46%;right: -10px;width: 20px;height: 20px;background: #0546B4;}*/
	.artlist li a:before{top: 44%;box-shadow: 0 3px 7px 0 rgba(51,51,51,0.50);}
	.arTit{color: #333;margin-bottom: 16px;}
	.onepageBox{width: 1000px;margin: 0 auto;}
	.serviceBox .box2Tit{padding: 80px 0 50px;}
	.artlist li{min-height: 225px;}
	.artlist:after{width: 2px;background:#ccc}
	.arBrief{color: #666;}
	.line{display: flex;justify-content: flex-end;}
	.line i {width: 95px;height: 4px;background: #ccc;margin: 10px 0;}
	.artlist li a:hover .line i {background: #0546B4;}
	.arTime {font-style: normal;font-size: 18px;color: #333;}
	.artlist li a:hover:before{ height:70px;background: #0546B4;}
	.hoverBg:hover{background: #F4F7FD;}
	.artlist li:nth-child(2n) .arTime{justify-content:flex-start}
	.artlist li:nth-child(2n) .line{justify-content: flex-start;}
	.artlist li:nth-child(2n):hover{background: #B6D1F7;}
	.artlist li:nth-child(2n):hover .arTit{color: #0546B4;}
	.artlist li:nth-child(2n):hover .arBrief p {color: #0546B4;}
	.artlist li:nth-child(2n) a:hover .line i{background: #3FACF8;}
	.artlist li:nth-child(2n) a:hover:before{background: #3FACF8;}
	
	.arBrief p {text-align: left;text-indent: 2em;}
</style>