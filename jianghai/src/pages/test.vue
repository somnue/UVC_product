/* eslint-disable */
<template>
	<div>
		<towtop :headerBg="headerBg" :imgUrl="imgUrl"></towtop>
		<div class="clearfix"></div>
		<div class="banner">
			<div class="bannerContent">
				<img src="../../static/images/bannerText.png" />
			</div>
			<img src="../../static/images/down.png" />
			<div class="starsContent">
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>
			</div>
		</div>
		<div class="kbox1Bg">
			<div class="container">
				<div class="box1Top wow fadeInUp animated first-recognize" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
					<img src="../../static/images/about.png" />
					<p>江海天空是致力于科技双创与创投基金管理服务的综合性科技创新服务集团。涵盖天使/VC投资、科技地产、基金三方服务、商会咨询、多维创业咨询、独立财经媒体、创新策略咨询、线上线下招商、创业创投服务、项目全程孵化等全方位、综合性科技创新业务。下设北京、上海、深圳、南通、香港、温哥华和硅谷七个自有物理空间，持续增设阿姆斯特丹、巴黎、布鲁塞尔、柏林、以色列、洛杉矶、南京、武汉、广州等海内外孵化空间。通过项目孵化、招商引资和创投基金三位一体的业务模式，用技术提高创新要素配置效率，用技术提高资产管理匹配效率，点燃科技创新动能，助力科技创新腾飞。 目前，江海天空参控股深圳市浙信资本管理有限公司（P1063947）、昂若（深圳）资本管理有限公司（P1024202）、北京天外望管理咨询有限公司、深圳河石管理咨询有限公司和南通天外望信息科技有限公司和南通天外望教育科技有限公司。汇聚在多领域有卓越贡献及影响力的杰出合伙人五十余名。江海天空将始终坚守为科技创新保驾护航的信念，为智慧的星火倾注光与热。
					</p>
				</div>
			</div>
		</div>
		<div class="kbox2Bg">
			<div class="container">
				<div class=" wow fadeInUp animated" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
				<!-- <div class="box1Top wow fadeInUp animated" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;"> -->
					<!-- <img src="../../static/images/media.png"> -->
					<div class="flexCenter">
            <div class="title fadeInUp animated" style="margin:60px 0">
                <h3>{{mediaTitle}}</h3>
                <p>{{mediaTitleEng}}</p>
            </div>
        	</div>
       
				</div>
			</div>
		</div>
		<div class="kbox3Bg">
			<div class="container">
				<div class="box1Top wow fadeInUp animated" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
					<img src="../../static/images/player.png" />
					<!-- <video src="../../static/video/01.mp4" width='1200' height="300" autoplay='autoplay' loop='loop' controls='controls'></video> -->
				</div>
				<p>江海天空，正青春</p>
				<router-link to="/video">
					<p style="font-size: 16px;color: #1160e6;text-decoration: underline;">更多媒体视频>></p>
				</router-link>
			</div>
		</div>
		<!-- 江海业务 -->
		<div class="business">
			<!-- <div class="box1Top">
				<img src="../../static/images/business.png" class="img-responsive">
			</div> -->
			<div class="flexCenter">
				<div class="title fadeInUp animated" style="margin:60px 0">
						<h3>{{bussinessTitle}}</h3>
						<p>{{bussinessTitleEng}}</p>
				</div>
			</div>
			<div class="business-container">
				<ul>
					<router-link to="/business1">
						<li @mouseenter="onMouseOver" @mouseleave="onMouseLeave">
							<div v-show="seen" class="businessIcon">
								<img src="../../static/images/businessIcon1.png" alt="">
								<p>江海学院</p>
							</div>
							<div v-show="!seen" class="businessIconHover">
								<img src="../../static/images/businessHover1.png" alt="">
								<p>江海学院</p>
								<div>智慧深耕：构建项目培育、创业咨询载体，打造独角兽企业之源。</div>
							</div>
						</li>
					</router-link>
					<router-link to="/business2">
						<li @mouseenter="onMouseOver1" @mouseleave="onMouseLeave1" style="background-color: #B3D4FF;">
							<div v-show="seen1" class="businessIcon">
								<img src="../../static/images/businessIcon2.png" alt="">
								<p>江海星空</p>
							</div>
							<div v-show="!seen1" class="businessIconHover">
								<img src="../../static/images/businessHover2.png" alt="">
								<p>江海星空</p>
								<div>生根落地：打造创业育成孵化器、加速器，协助创新企业成长。</div>
							</div>
						</li>
					</router-link>
					<router-link to="/business3">
						<li @mouseenter="onMouseOver3" @mouseleave="onMouseLeave3">
							<div v-show="seen3" class="businessIcon">
								<img src="../../static/images/businessIcon4.png" alt="">
								<p>江海空间</p>
							</div>
							<div v-show="!seen3" class="businessIconHover">
								<img src="../../static/images/businessHover4.png" alt="">
								<p>江海空间</p>
								<div>恒维发展：关注企业维稳运行，为企业恒久发展提供全生命周期服务。</div>
							</div>
						</li>
					</router-link>
					<router-link to="/business4">
						<li @mouseenter="onMouseOver2" @mouseleave="onMouseLeave2" style="background-color: #B3D4FF;">
							<div v-show="seen2" class="businessIcon">
								<img src="../../static/images/businessIcon3.png" alt="">
								<p>天望江海</p>
							</div>
							<div v-show="!seen2" class="businessIconHover">
								<img src="../../static/images/businessHover3.png" alt="">
								<p>天望江海</p>
								<div>指数增长：提供企业发展指数增长空间，以资本之手拖护企业发展。</div>
							</div>
						</li>
					</router-link>
					<router-link to="/business5">
						<li @mouseenter="onMouseOver4" @mouseleave="onMouseLeave4">
							<div v-show="seen4" class="businessIcon">
								<img src="../../static/images/businessIcon5.png" alt="">
								<p>基金星空</p>
							</div>
							<div v-show="!seen4" class="businessIconHover">
								<img src="../../static/images/businessHover5.png" alt="">
								<p>基金星空</p>
								<div>多元裂变：提供全系列基金运维服务，搭建基金汇聚平台，激发创投生态活力。</div>
							</div>
						</li>
					</router-link>
				</ul>
			</div>
		</div>
		<!-- 江海产品 -->
		<div class="box3Bg">
			<!-- <div class="box1Top">
				<img src="../../static/images/product.png" class="img-responsive">
			</div> -->
			<div class="flexCenter">
				<div class="title fadeInUp animated" style="margin:60px 0">
						<h3>{{productTitle}}</h3>
						<p>{{productTitleEng}}</p>
				</div>
			</div>
			<div class="box3OverLay">
				<div class="container">
					<div class="box3Item wow fadeInUp">
						<div class="box3Bg-container">
							<ul class="box3Bg-top">
								<li @click="product1">
									<p>江海学院</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon1.png">
								</li>
								<li @click="product2">
									<p>创投工场</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon2.png">
								</li>
								<li @click="product3">
									<p>Universe Media</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon3.png">
								</li>
								<li @click="product4">
									<p>AI投研</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon4.png">
								</li>
								<li @click="product5">
									<p>孵化网络</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon5.png">
								</li>
							</ul>
							<ul class="box3Bg-bottom">
								<li @click="product6">
									<p>基金星空</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon6.png">
								</li>
								<li @click="product7">
									<p>创投大家</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon7.png">
								</li>
								<li @click="product8">
									<p>江海星空</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon8.png">
								</li>
								<li @click="product9">
									<p>智能招商</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon9.png">
								</li>
								<li @click="product10">
									<p>江海沙龙</p>
									<div class="border"></div>
									<img src="../../static/images/productIcon10.png">
								</li>
							</ul>
						</div>
					</div>
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
				seen: true,
				seen1: true,
				seen2: true,
				seen3: true,
				seen4: true,
				headerBg: 'newHeaderBg',
				imgUrl: '../../static/images/Wlogo.png',
				mediaTitle: "媒体中心",
				mediaTitleEng: 'Media Center',
				bussinessTitle : '江海业务',
				bussinessTitleEng : 'UVC Business',
				productTitle : '江海产品',
				productTitleEng : 'UVC Products',
			}
		},
		created() {

		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			//改变菜单栏样式
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(scrollTop > 600) {
					this.headerBg = 'headerBg'
					this.imgUrl = '../../static/images/logo.png'
				} else {
					this.headerBg = 'newHeaderBg'
					this.imgUrl = '../../static/images/Wlogo.png'
				}
			},
			onMouseOver: function() {
				var that = this;
				that.seen = false;
			},
			onMouseLeave: function() {
				var that = this;
				that.seen = true;
			},
			onMouseOver1: function() {
				var that = this;
				that.seen1 = false;
			},
			onMouseLeave1: function() {
				var that = this;
				that.seen1 = true;
			},
			onMouseOver2: function() {
				var that = this;
				that.seen2 = false;
			},
			onMouseLeave2: function() {
				var that = this;
				that.seen2 = true;
			},
			onMouseOver3: function() {
				var that = this;
				that.seen3 = false;
			},
			onMouseLeave3: function() {
				var that = this;
				that.seen3 = true;
			},
			onMouseOver4: function() {
				var that = this;
				that.seen4 = false;
			},
			onMouseLeave4: function() {
				var that = this;
				that.seen4 = true;
			},
			product1: function() {
				this.$router.push({
					path:'/product1'
				})
			},
			product2: function() {
				this.$router.push({
					path:'/product2'
				})
			},
			product3: function() {
				this.$router.push({
					path:'/product3'
				})
			},
			product4: function() {
				this.$router.push({
					path:'/product4'
				})
			},
			product5: function() {
				this.$router.push({
					path:'/product5'
				})
			},
			product6: function() {
				this.$router.push({
					path:'/product6'
				})
			},
			product7: function() {
				this.$router.push({
					path:'/product7'
				})
			},
			product8: function() {
				this.$router.push({
					path:'/product8'
				})
			},
			product9: function() {
				this.$router.push({
					path:'/product9'
				})
			},
			product10: function() {
				this.$router.push({
					path:'/product10'
				})
			},
		},

	}
</script>

<style scoped>
	nav.navbar.bootsnav ul.nav > li > a:hover {color: #0546b4 !important;}
	.kbox1Bg .box1Top {
		padding: 30px 0;
	}
	
	.kbox3Bg .box1Top {
		padding: 0;
	}
	
	.banBtn:after {
		display: block;
		content: "";
		width: 35px;
		height: 35px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		/* background: url(~@/../static/images/banBtn.png) center center no-repeat; */
		background-size: cover;
		animation: flash 3s infinite;
	}
	
	.box1Bg h3,
	.box1Bg p {
		writing-mode: vertical-rl;
		writing-mode: tb-rl;
		float: right;
	}
	
	.first-recognize {
		width: 875px;
		height: 350px;
		margin: 0 auto;
	}
	
	.kbox1Bg {
		box-sizing: border-box;
		padding-top: 30px;
		background: url(../../static/images/background4.png);
	}
	.kbox1Bg p {
		text-indent: 2em;
		line-height: 29px;
		writing-mode: vertical-rl;
		writing-mode: tb-lr;
		float: left;
		margin-right: 43px;
		height: 250px;
		margin-top: 30px;
	}
	.kbox1Bg img {
		float: right;
	}
	.kbox2Bg {
		display: flex;
		justify-content: center;
		box-sizing: border-box;
	}
	
	.banner {
		background: url(../../static/images/bannerBg.png) ;
		height: 700px;
		display: flex;
		box-sizing: border-box;
		justify-content: center;
		padding-top: 170px;
		flex-wrap: wrap;
		background-size: cover;
	}
	
	.bannerContent {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.banner .bannerContent img {
		width: 594px;
		height: 312px;
	}
	
	.banner img {
		width: 70px;
		height: 70px;
	}
	
	.kbox2Bg .box1Top {
		display: flex;
		justify-content: center;
	}
	
	.kbox3Bg {
		height: 610px;
		background: url(../../static/images/box3Bg.png);
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		background-size: cover;
	}
	
	.kbox3Bg .box1Top {
		display: flex;
		justify-content: center;
		padding-top: 188px;
	}
	
	.kbox3Bg p {
		text-align: center;
		font-size: 20px;
		color: #444;
		margin-top: 30px;
		font-weight: bold;
	}
	
	.kbox3Bg img {
		width: 70px;
		height: 70px;
	}
	/* 江海业务 */
	
	.business {
		width: 100%;
		height: auto;
		margin: 0 auto;
		background: url(../../static/images/background4.png) repeat;
		padding-bottom: 30px;
	}
	
	.business-container {
		width: 76%;
		margin: 0 12%;
		display: flex;
	}
	
	.business ul {
		margin: 0 auto;
		text-align: center;
		display: inline-block;
	}
	
	.business ul li {
		float: left;
		display: block;
		background: #e6f0fd;
		box-shadow: 0 5px 9px 0 rgba(140, 137, 137, 0.50);
		border-radius: 10px;
		width: 180px;
		height: 250px;
		margin-right: 10px;
	}
	.business ul li .businessIconHover {
		background: #4182c3;
		box-shadow: 0 5px 9px 0 rgba(140, 137, 137, 0.50);
		border-radius: 10px;
		width: 180px;
		height: 250px;
		overflow: hidden;
	}
	
	.business ul li .businessIconHover img {
		animation: pic .5s linear 0s 1 forwards;
		-webkit-animation: pic .5s linear 0s 1 forwards;
	}
	
	@keyframes pic {
		from {
			transform: translate(0px, 0px) scale(1);
			-ms-transform: translate(0px, 0px) scale(1);
			-webkit-transform: translate(0px, 0px) scale(1);
		}
		to {
			transform: translate(-60px, -15px) scale(1.2);
			-ms-transform: translate(-60px, -15px) scale(1.2);
			-webkit-transform: translate(-60px, -15px) scale(1.2);
		}
	}
	
	@-moz-keyframes pic {
		from {
			transform: translate(0px, 0px) scale(1);
		}
		to {
			transform: translate(-60px, -15px) scale(1.2);
		}
	}
	
	@-webkit-keyframes pic {
		from {
			transform: translate(0px, 0px) scale(1);
			-webkit-transform: translate(0px, 0px) scale(1);
		}
		to {
			transform: translate(-60px, -15px) scale(1.2);
			-webkit-transform: translate(-60px, -15px) scale(1.2);
		}
	}
	
	@-o-keyframes pic {
		from {
			transform: translate(0px, 0px) scale(1);
		}
		to {
			transform: translate(-60px, -15px) scale(1.2);
		}
	}
	
	.business ul li .businessIconHover p {
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0.59px;
		text-align: center;
		margin-top: 10px;
		margin-bottom: 12px;
		line-height: 20px;
		animation: title .5s linear 0s 1 forwards;
		-webkit-animation: title .5s linear 0s 1 forwards;
	}
	
	@keyframes title {
		from {
			transform: translate(0px, 40px);
			-ms-transform: translate(0px, 40px);
			-webkit-transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			-ms-transform: translate(0px, 0px);
			-webkit-transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-moz-keyframes title {
		from {
			transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-webkit-keyframes title {
		from {
			transform: translate(0px, 40px);
			-webkit-transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			-webkit-transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-o-keyframes title {
		from {
			transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	.business ul li .businessIconHover div {
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0.35px;
		width: 152px;
		margin: 0 auto;
		text-align: left;
		animation: word .5s linear 0s 1 forwards;
		-webkit-animation: word .5s linear 0s 1 forwards;
	}
	
	@keyframes word {
		from {
			transform: translate(0px, 40px);
			-ms-transform: translate(0px, 40px);
			-webkit-transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			-ms-transform: translate(0px, 0px);
			-webkit-transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-moz-keyframes word {
		from {
			transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-webkit-keyframes word {
		from {
			transform: translate(0px, 40px);
			-webkit-transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			-webkit-transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	@-o-keyframes word {
		from {
			transform: translate(0px, 40px);
			opacity: 0;
		}
		to {
			transform: translate(0px, 0px);
			opacity: 1;
		}
	}
	
	.business ul li .businessIcon img {
		margin: 50px 0 30px;
	}
	/* 江海产品 */
	
	.box3Bg {
		width: 100%;
		height: 650px;
		margin-bottom: -3px
	}
	
	.box3Bg-container {
		width: 66%;
		margin: 0 17%;
	}
	
	.box3Bg ul {
		margin: 0 auto;
		text-align: center;
		display: inline-block;
		float: left;
	}
	
	.box3Bg ul li {
		float: left;
		display: block;
		width: 150px;
		height: 200px;
		cursor: pointer;
	}
	
	.box3Bg ul li:hover {
		/* background: rgba(23, 91, 177, .6); */
		background: rgba(23, 91, 177);
		animation: top .5s linear 0s 1 forwards;
		-webkit-animation: top .5s linear 0s 1 forwards;
	}
	
	@keyframes top {
		from {
			transform: scale(1);
			-ms-transform: scale(1);
			-webkit-transform: scale(1);
		}
		to {
			transform: scale(1.2);
			-ms-transform: scale(1.2);
			-webkit-transform: scale(1.2);
		}
	}
	
	@-moz-keyframes top {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.2);
		}
	}
	
	@-webkit-keyframes top {
		from {
			transform: scale(1);
			-webkit-transform: scale(1);
		}
		to {
			transform: scale(1.2);
			-webkit-transform: scale(1.2);
		}
	}
	
	@-o-keyframes top {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.2);
		}
	}
	
	.box3Bg-top li:nth-child(odd),
	.box3Bg-bottom li:nth-child(even) {
		background: rgba(0, 0, 0, .6);
	}
	
	.box3Bg-top li:nth-child(even),
	.box3Bg-bottom li:nth-child(odd) {
		background: rgba(0, 0, 0, .4);
	}
	
	.box3Bg ul li p {
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0.59px;
		text-align: center;
		margin-top: 40px;
	}
	
	.box3Bg ul li div.border {
		width: 30px;
		height: 2px;
		background: #FFFFFF;
		margin: 16px auto 20px;
	}
	
	.box3Bg ul li img {
		width: 70px;
		height: 70px;
	}
</style>