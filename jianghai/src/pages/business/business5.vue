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
				businessTitle: "基金星空",
				businessTitleEng: 'JiJinXingKong',
				nextTitle: '基金星空',
				nextEng: 'JiJinXingKong',
				nextContent: '基金星空：基于江海天空的专业的基金操作经验，为创业者和投资人提供产业基金、基金运维与投资服务，辅助企业资本化之路。',
				businessIntroduce: '基金星空下设基金星空、创投工场创投大家和AI投研四大功能条线，提供全方位的基金第三方服务。基金星空提供基金运维服务、基金投资、产业升级和产业基金四方面生成的项目信息库，基于江海天空的专业的基金操作经验，为创业者和投资人提供产业基金、基金运维与投资服务，辅助企业资本化之路。创投工场通过创业自荐、投资雷达、路演推介、在线估值等多方面功能，形成从推介、展示到评估的一站式服务，以网络为平台，以数据为导向，为创业者和投资者提供信息交换平台。创投大家通过创投基金募集平台和创投云课堂，为投资人提供线上“项目库+智能库”的优质创投基金推介平台。以学为本，以质为基，以效为先，以线上移动方式，即时即效的匹配投资人诉求。AI投研具备全球创投信息抓取、AI项目筛选、AI投研报告等三方面功能。利用线上科学技术手段，实现信息、项目资源的自动抓取、筛选和分析，打造全球资源智能信息库，为投资者提供全方位科学分析体系。',
				contentList: [{
					title: '基金星空',
					Eng: 'JiJinXingKong',
					content: '基金运维服务：利用自身平台的基金运行管理经验，输出基金运维管理能力，提供成熟的运维服务。如提供适应私募基金管理公司的运营系统和OA系统，为其在管基金保驾护航。基金投资：依托平台生成的项目信息库，运用大数据与AI技术寻找优质项目，匹配投资需求。专注于天使基金、创投基金（VC）、PE基金、并购基金。以专业的团队和基金管理经验，为创业项目前期、发展到成熟提供全系列基金投资服务。产业升级：充分利用高校合作资源与AI投研报告，针对产业进行现状剖析、生态规划、方案提出与实施、效果动态监测的一系列产业升级计划。产业基金：对于高速发展期的企业，为解决其扩大产能的需求，通过设立产业基金获取资金与资源，助力企业快速、协同成长。'
				}, {
					title: '创投大家',
					Eng: 'ChuangTouDaJia',
					content: '创投基金募集平台：在符合基金业协会对私募基金的合规性约定前提下，对于线下接洽认定的合格投资者进行创投基金的推介和募集。充分发挥APP的便捷性和及时性，更好的进行信息披露，及时推介优质基金。创投云课堂：与江海学院联动，以投资人为受众，为其提供移动的投资课堂。对创投投资形式、内核、各产业特点、政策导向、时事热点等分专题进行剖析，不受空间和时间的限制，在线即可学投资。'
				}, {
					title: '创投工场',
					Eng: 'ChuangTouGongChang',
					content: '创业自荐：打造为线上FA平台，用于创业者发布创业项目及募资需求，形成线下FA点对点推介的模式升级为线上多对多的信息对接平台。同步设计成立项目信息库，归类所有注册申请的项目分类归入项目库，利用AI和大数据技术与政府平台对接，实时监测两方的供需匹配情况。投资雷达：投资人通过创业工场自定义式地筛选和对接创投机构，摆脱原有线下低效的信息获取方式，为投资装上“雷达”，便于投资者快速捕捉投资机会。同步成立的投资者资料库，为项目推介与资源整合奠定基础。路演推介：通过平台中的项目库与投资者资料库的对接，协助开展线下项目推介交流会，让投资者深入了解项目，挖掘价值。同时通过线上直播录播系统，提供线下项目推介会的路演视频，乘坐线上可视化传播“快车”，突破地域、打破时间的限制，为创业者与投资人构建起更为紧密高效的对接通道。在线估值：基于大数据与AI技术的估值体系，为创投工场平台上的企业及项目提供第三方估值服务。旨在发掘企业价值，维护投资人权益。在线估值体系，以科技为底层逻辑，为投资人提供价值判断参考，缩小投资风险。'
				}, {
					title: 'AI投研',
					Eng: 'AI TouYan',
					content: '全球创投信息抓取系统：为投资者和创投机构呈现“每日全球最火创业项目列表”——包括每个项目所在地、公司产品定位或方向、融资状况、联系方式及其他public available数据。不仅通过可视化地图显示每一天全球每个地区最热、最火的创投项目及创投话题，还可在全球创投项目中搜索任意话题，并以点带面挖局参与此话题的人、事件、公司等多面信息。AI项目筛选：在平台已有项目库的基础上，通过语义学分析进行数据整理、项目分类归纳、项目自动初筛。支持的模糊筛选+人工复核模式，通过该反馈深度学习，自我升级筛选准确度。AI投研报告：针对各类项目，通过数据清理及语义学分析，抽取项目要素并形成项目要素表。调取行业数据信息库及项目信息库数据，进行行业及对标企业智能比对分析，形成初步投研报告。同时定向追踪企业动态，自动更新投研报告，并标识变化单位。'
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
				if(this.curId == 0) {
					this.$router.push({
						path: "/product6"
					})
				} else if(this.curId == 1)  {
					this.$router.push({
						path: "/product2"
					});
				}else if(this.curId == 2)  {
					this.$router.push({
						path: "/product4"
					});
				}else {
					this.$router.push({
						path: "/product7"
					});
				}
			}
		},

	}
</script>

<style>

</style>