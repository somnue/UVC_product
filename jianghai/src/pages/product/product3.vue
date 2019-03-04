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
				businessTitle: 'Universe Media',
				businessTitleEng: '',
				productList: [{
					imgSrc: '../../../static/images/1.png',
					productTitle: '主题论坛',
					productEng: 'ZhuTiLunTan',
					productContent: '定期举办时下热点主题论坛，构造属于大脑的风暴盛宴。邀请企业家、金融家、经济学者畅所欲言、各抒已见。主题方向包括当代经济形势、企业品牌化优势等。论坛包容汇通，鼓励具有启发性、独特性和全局性的观点。旨在开拓思维、独特新颖，进一步引导企业创新、创造。',
				}, {
					imgSrc: '../../../static/images/2.png',
					productTitle: '企业纪录片',
					productEng: 'QiYeJiLuPian',
					productContent: '用电视、电影的可视化形式，对企业全方位、有重点、有针对、有秩序地进行策划、拍摄、录音、剪辑、配音、配乐、合成、输出和播出。凸显企业独特的风格面貌，提高企业美誉度、信任度和企业品牌公信力，打造企业品牌力量。',
				}, {
					imgSrc: '../../../static/images/3.png',
					productTitle: '政府招商宣传片',
					productEng: 'ZhengFuZhaoShangXuanChuanPian',
					productContent: '以纪录片手法，跳脱传统宣传片的框架限制，以创投视角独特解剖当地文化、风土、人情和政策，使政府招商更为可读、可解和可塑。',
				}, {
					imgSrc: '../../../static/images/4.png',
					productTitle: '有深度【深度解读】',
					productEng: 'YouShenDu[ShenDuJieDU]',
					productContent: '深度调研、剖析热点创投行业、企业和技术等，形成具有独到见解的深度解析报告，为投资者和创业者过滤信息噪音，提供深加工的信息参考。',
				}, {
					imgSrc: '../../../static/images/5.png',
					productTitle: 'Usee【垂直头条】',
					productEng: 'Usee[ChuiZhiTouTiao]',
					productContent: '通过AI智能技术，筛选市场财经资讯，生成侧重于创业圈、创投圈和招商圈的资讯集合，每日推送。',
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