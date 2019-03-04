<template>
	<div class="about">
		<towtop></towtop>
		<!-- <div class="kbox1Bg">
			<div class="container">
				<div class="wow fadeInUp animated" style="min-height: 500px;display: flex;justify-content: center;">
					<img src="../../static/images/about.png"/>
					<p>江海天空是致力于科技双创与创投基金管理服务的综合性科技创新服务集团。涵盖天使/VC投资、科技地产、基金三方服务、商会咨询、多维创业咨询、独立财经媒体、创新策略咨询、线上线下招商、创业创投服务、项目全程孵化等全方位、综合性科技创新业务。下设北京、上海、深圳、南通、香港、温哥华和硅谷七个自有物理空间，持续增设阿姆斯特丹、巴黎、布鲁塞尔、柏林、以色列、洛杉矶、南京、武汉、广州等海内外孵化空间。通过项目孵化、招商引资和创投基金三位一体的业务模式，用技术提高创新要素配置效率，用技术提高资产管理匹配效率，点燃科技创新动能，助力科技创新腾飞。
目前，江海天空参控股深圳市浙信资本管理有限公司（P1063947）、昂若（深圳）资本管理有限公司（P1024202）、北京天外望管理咨询有限公司、深圳河石管理咨询有限公司和南通天外望信息科技有限公司和南通天外望教育科技有限公司。汇聚在多领域有卓越贡献及影响力的杰出合伙人五十余名。江海天空将始终坚守为科技创新保驾护航的信念，为智慧的星火倾注光与热。</p >
				</div>
			</div>
		</div> -->
		<div class="flexCenter">
			<div class="title fadeInUp animated">
					<h3>{{businessTitle}}</h3>
					<p>{{businessTitleEng}}</p>
			</div>
		</div>
		<div class="box1Top container">
			<!-- <img src="../../static/images/about1.png" class="img-responsive"> -->
			<p>江海天空是致力于科技双创与创投基金管理服务的综合性科技创新服务集团。涵盖天使/VC投资、科技地产、基金三方服务、商会咨询、多维创业咨询、独立财经媒体、创新策略咨询、线上线下招商、创业创投服务、项目全程孵化等全方位、综合性科技创新业务。下设北京、上海、深圳、南通、香港、温哥华和硅谷七个自有物理空间，持续增设阿姆斯特丹、巴黎、布鲁塞尔、柏林、以色列、洛杉矶、南京、武汉、广州等海内外孵化空间。通过项目孵化、招商引资和创投基金三位一体的业务模式，用技术提高创新要素配置效率，用技术提高资产管理匹配效率，点燃科技创新动能，助力科技创新腾飞。
目前，江海天空参控股深圳市浙信资本管理有限公司（P1063947）、昂若（深圳）资本管理有限公司（P1024202）、北京天外望管理咨询有限公司、深圳河石管理咨询有限公司和南通天外望信息科技有限公司和南通天外望教育科技有限公司。汇聚在多领域有卓越贡献及影响力的杰出合伙人五十余名。江海天空将始终坚守为科技创新保驾护航的信念，为智慧的星火倾注光与热。</p >
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
				businessTitle: "此刻相识",
        businessTitleEng: 'About Us',
				headerBg: 'headerBg',
				imgUrl:'../../static/images/logo.png'
			}
			
		},
		components: {
			towtop,
			towbottom
		}
	}
</script>

<style scoped>
	.about{
		width:100%;
		background:url(../../static/images/background4.png);
		background-size: cover;
	}
	.kbox1Bg {
		box-sizing: border-box;
		margin-top: 130px;
		margin-bottom: 100px;
		padding-top:40px;
		display: flex;
	    flex-direction: row;
	    flex-wrap: nowrap;
	}
	.kbox1Bg p{
		text-indent: 2em;
		line-height: 29px;
		writing-mode: vertical-lr;
		writing-mode: tb-lr;
		margin-left: 43px;
		height: 250px;
		margin-top:30px;
	}
	.kbox1Bg img{
		width: 77px;
		height: 175px;
	}
	.box1Top {
		/* margin-top:80px; */
		padding-top: 30px;
		padding-bottom: 40px;
		min-height: 760px;
	}
	.box1Top p {
		/* padding: 0 80px; */
		text-indent: 2em;
		line-height: 29px;
		/* writing-mode: vertical-lr; */
		/* writing-mode: tb-lr; */
		/* margin-left: 43px; */
		height: 250px;
		/* margin-top:30px; */
	}
</style>