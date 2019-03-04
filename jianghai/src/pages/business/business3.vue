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
				businessTitle: "江海空间",
				businessTitleEng: 'UVC KongJian',
				businessIntroduce: '江海空间下设孵化网络和江海沙龙两大功能条线，实现企业运营发展服务。',
				nextTitle: '孵化网络',
				nextEng: 'FuHuaWangLuo',
				nextContent: '孵化网络：广覆盖的海内外物理空间，深挖掘的本地物理空间，为企业孵化、加速提供地域空间。',
				contentList: [{
					title: '孵化网络',
					Eng: 'FuHuaWangLuo',
					content: '提供研发、生产、经营场地、通讯、网络与办公室等方面的共享设施，系统的培训和咨询，政策、融资、法律和市场推广等方面的支持，降低新创企业的创业风险和创业成本，提高企业的成活率和成功率。提供良好的创业环境和条件，帮助创业者把发明和成果尽快形成商品进入市场，提供综合服务，帮助新兴的小企业迅速壮大形成规模，为社会培养成功的企业。为高新技术成果转化和科技企业创业提供不断优化的孵化氛围，为科技企业发展提供必需的市场化和国际化服务。孵化器内部企业的聚集会产生积极的集聚效应，有助于企业之间的知识交流，促进创新成果的产生。致力于国际高新技术企业孵化事业增墨添彩，着力推动高新技术企业创业向专业化、国际化发展。定位于是国际高新技术产业孵化器，致力于世界前沿的互联网、电力电子、生物科技等科学技术的研发、孵化、以及技术转移，并将其商业化、本土化。孵化器采取合资、合作、技术转移、授权等方式将澳大利亚、新西兰、瑞士等国家先进的技术与项目向中国转移转化，并通过投资与技术入股等方式，为国内的创业团队提供支持，开拓国内外市场。'
				}, {
					title: '江海沙龙',
					Eng: 'UVC ShaLong',
					content: '聚合资源：作为江海天空在全球各地的线下展示及活动平台，以江海天空丰富资源为基础，以各类业务为触角，以合伙人体系为维系，承接线上系统，全面激发江海天空金融平台生态效应，确实落地项目。社群资源包括：各级南通商会、江海英才校友总会、南通总承包商分公司、捷星城市分公司、绿洲健康旗舰店、花信金融科技分公司、优必选分公司等。为企业提供数据管理、工作流管理和项目管理的培训、咨询服务，提高企业运维效能。针对企业合伙人，提供线上产品到线下运营的全套服务。从基金投资、招商引智到创新策略服务、双创培训和消费金融，更有健康管理、销售管理等，为合伙人提供针对性强、实时对接、高效转化的全方位服务。业务包括新能源汽车销售、服务及教育机器人销售、健康管理、消费金融服务、创新策略服务、房地产开发、基金服务、招商引资。'
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
				this.curId = index;
				that.nextTitle = item.title;
				that.nextEng = item.Eng;
				that.nextContent = item.content;
			},
			//跳转
			skip() {
				if(this.curId == 0) {
					this.$router.push({
						path: "/product5"
					})
				}else {
					this.$router.push({
						path: "/product10"
					})
				}
			}
		},

	}
</script>

<style>

</style>