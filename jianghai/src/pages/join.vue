<template>
	<div class="join-container">
		<towtop></towtop>
		<!-- <div class="box1Top fadeInUp animated">
			<img src="../../static/images/join.png" class="img-responsive">
		</div> -->
		<div class="flexCenter">
			<div class="title fadeInUp animated">
					<h3>{{businessTitle}}</h3>
					<p>{{businessTitleEng}}</p>
			</div>
		</div>
		<p>
			南通江海天空科技创新服务集团有限公司（下简称“江海天空”），UVC控股旗下拟独立IPO平台，是致力于科技双创 与创投基金管理服务，并提供多维创业咨询、独立财经媒体、创新策略咨询、线上线下招商、创业创投服务、项目全 程孵化的综合性科技创新服务集团。业务涵盖天使/VC投资、科技地产、基金三方服务、园区招商、商会咨询、江海学 院等业务。通过北京、上海、深圳、南通、香港、温哥华和硅谷七个自有物理空间，实现项目孵化、招商引资和创投基 金三位一体的业务模式，赋予江海天空多元盈利能力。
		</p>
		<div class="recruit wow fadeInUp animated">
			<h5>招聘信息</h5>
			<ul>
				<li @click="position">
					<div class="joinH4" :class="{ detailBgA:bgA, detailBgB:bgB }">
						<span class="joinName ellipsis">人力资源总监</span>
						<div class="joinBrief">
							<span>工作地点：上海</span>
							<i>|</i>
							<span>招聘人数：1</span>
						</div>
					</div>
					<div class="joinText" v-show="!isShow">
						<p>岗位职责：</p>
						<p>1、向公司高层决策者提供有关人力资源战略、组织建设等方面的建议，并致力于提高公司的综合管理水平；</p>
						<p>2、负责公司整体的人力资源运作规划与人力资源战略的运筹实施，为公司业务发展提供全面、系统的人力资源保障；</p>
						<p>3、指导和管理人力资源招聘、培训、调配以及薪酬、绩效管理、员工关系管理；
						<p>4、协助公司员工进行职业生涯规划设计；</p>
						<p>5、组织和推动企业文化建设，营造务实、创新和积极向上的文化氛围；</p>
						<p>6、负责公司整体培训工作。</p>
						<p>任职要求：</p>
						<p>1、人力资源管理或相关专业统招本科及以上学历；</p>
						<p>2、5年以上行政人事管理经验，3年以上人力资源总监或人力资源部经理工作经验；</p>
						<p>3、了解现代企业人力资源管理模式，对人力资源各个职能模块都有较深入的认识，熟悉国家相关的政策、法律法规；</p>
						<p>4、具有很强的计划性和实施执行的能力；</p>
						<p>5. 具备良好的人际交往能力、组织协调能力、沟通能力以及解决复杂问题的能力。</p>
						<p>薪资水平:</p>
						<p>10-15K</p>
						<br>
						<a href="mailto:wujiaqi@uvcgroup.cn">wujiaqi@uvcgroup.cn</a>
					</div>
				</li>
				<li @click="position1">
					<div class="joinH4" :class="{ detailBgA1:bgA1, detailBgB1:bgB1 }">
						<span class="joinName ellipsis">金融产品经理</span>
						<div class="joinBrief">
							<span>工作地点：上海</span>
							<i>|</i>
							<span>招聘人数：3</span>
						</div>
					</div>
					<div class="joinText" v-show="!isShow1">
						<p>岗位职责：</p>
						<p>1、负责筛选引进市场优质金融产品及产品风险评估工作；</p>
						<p>2、挖掘优质项目，与国内信托公司、券商、银行、投资公司、私募基金等机构开展全面业务合作；</p>
						<p>3、组织研发设计各类金融产品，包括信托、PE基金、阳光私募及另类投资产品等；</p>
						<p>4、新产品发行，与合作发行产品的券商、信托公司、基金公司进行产品对接及后续跟进；</p>
						<p>5、构建并完善公司产品开发业务流程及审批等制度；</p>
						<p>6、指导相关人员进行监管沟通和新产品文字准备；指导相关人员进行 报备材料准备和后续跟踪。</p>
						<p>任职要求：</p>
						<p>1、经济学或者金融类学科本科以上学位，相关金融行业工作经验，有CFA资格者优先；</p>
						<p>2、熟悉私募产品的发行和销售流程，有相关产品设计经历优先；</p>
						<p>3、熟悉金融政策和法律法规，对金融产品的募集、投资和管理有较深了解；</p>
						<p>4、熟悉当地的经济、金融和财富状况，有丰富的融资渠道和业内广泛的人际关系；</p>
						<p>5、敏锐的洞察力，有创新思维，能有效整合资源，善于捕捉市场机会；</p>
						<p>6、具有较强的文字能力；具备相应基金产品的财务及法律知识；</p>
						<p>薪资水平:</p>
						<p>6-12K</p>
						<br>
						<a href="mailto:wujiaqi@uvcgroup.cn">wujiaqi@uvcgroup.cn</a>
					</div>
				</li>
				<li @click="position2">
					<div class="joinH4" :class="{ detailBgA2:bgA2, detailBgB2:bgB2 }">
						<span class="joinName ellipsis">财务出纳</span>
						<div class="joinBrief">
							<span>工作地点：上海</span>
							<i>|</i>
							<span>招聘人数：1</span>
						</div>
					</div>
					<div class="joinText" v-show="!isShow2">
						<p>岗位职责:</p>
						<p>1、负责日常收支的管理和核对；</p>
						<p>2、负责支票、汇票、发票、收据管理；</p>
						<p>3、做好每月凭证的录入（或审核）工作；</p>
						<p>4、负责报销手续及原始单据的合法性、准确性审查；</p>
						<p>5、负责登记现金、银行存款日记账并准确录入系统，按时编制银行存款余额调节表；</p>
						<p>6、完成领导交给的其它临时性工作。</p>
						<p>任职要求：</p>
						<p>1、大专以上学历，会计、财务等相关专业毕业；</p>
						<p>2、两年以上财务工作经验，熟悉公司企业税务操作流程，具有会计上岗证；</p>
						<p>3、熟悉操作财务软件（金蝶）、Excel、Word等办公软件；</p>
						<p>4、记账要求字迹清晰、准确、及时，账目日清月结，报表编制准确、及时；</p>
						<p>5、工作认真，态度端正，耐心细致，为人和善；</p>
						<p>6、了解国家财经政策和会计、税务法规，熟悉银行结算业务。</p>
						<p>薪资水平</p>
						<p>5k</p>
						<br>
						<a href="mailto:wujiaqi@uvcgroup.cn">wujiaqi@uvcgroup.cn</a>
					</div>
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
				businessTitle : '加入我们',
				businessTitleEng :'Join Us',
				headerBg: 'headerBg',
				isShow: true,
				isShow1: true,
				isShow2: true,
				bgA: '',
				bgB: '',
				bgA1: '',
				bgB1: '',
				bgA2: '',
				bgB2: ''
			}
		},
		components: {
			towtop,
			towbottom
		},
		mounted() {},
		methods: {
			position: function() {
				var that = this;
				that.isShow = !that.isShow;
				if(that.isShow == false) {
					that.bgA = false;
					that.bgB = true;
				} else if(that.isShow == true) {
					that.bgA = true;
					that.bgB = false;
				}
			},
			position1: function() {
				var that = this;
				that.isShow1 = !that.isShow1;
				if(that.isShow1 == false) {
					that.bgA1 = false;
					that.bgB1 = true;
				} else if(that.isShow1 == true) {
					that.bgA1 = true;
					that.bgB1 = false;
				}
			},
			position2: function() {
				var that = this;
				that.isShow2 = !that.isShow2;
				if(that.isShow2 == false) {
					that.bgA2 = false;
					that.bgB2 = true;
				} else if(that.isShow2 == true) {
					that.bgA2 = true;
					that.bgB2 = false;
				}
			}
		}
	}
</script>
<style scoped>
	.join-container {
		width: 100%;
		min-height: 500px;
		margin: 0 auto;
	}
	
	.join-container>p {
		width: 60%;
		margin: 0 auto 40px;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		text-indent: 28px;
	}
	
	.box1Top {
		margin-top: 80px;
		padding-bottom: 40px;
	}
	
	.recruit {
		width: 60%;
		margin: 0 auto 80px;
		min-height: 320px;
	}
	
	.recruit h5 {
		font-size: 16px;
		color: #666666;
		letter-spacing: 0.57px;
		background: rgba(5, 70, 180, .1);
		padding: 8px 0px 10px 20px;
		margin-bottom: 15px;
	}
	
	.recruit ul li .joinH4:hover {
		background: #92e7e8;
	}
	
	.detailBgA,
	.detailBgA1,
	.detailBgA2 {
		background: none;
	}
	
	.detailBgB,
	.detailBgB1,
	.detailBgB2 {
		background: #92e7e8;
	}
	
	.recruit .joinText p {
		animation: info .5s linear 0s 1 forwards;
		-webkit-animation: info .5s linear 0s 1 forwards;
	}
	
	@keyframes info {
		from {
			transform: translateY(30px);
			-ms-transform: translateY(30px);
			-webkit-transform: translateY(30px);
		}
		to {
			transform: translateY(0px);
			-ms-transform: translateY(0px);
			-webkit-transform: translateY(0px);
		}
	}
	
	@-moz-keyframes info {
		from {
			transform: translateY(30px);
		}
		to {
			transform: translateY(0px);
		}
	}
	
	@-webkit-keyframes info {
		from {
			transform: translateY(30px);
			-webkit-transform: translateY(30px);
		}
		to {
			transform: translateY(0px);
			-webkit-transform: translateY(0px);
		}
	}
	
	@-o-keyframes info {
		from {
			transform: translateY(30px);
		}
		to {
			transform: translateY(0px);
		}
	}
</style>