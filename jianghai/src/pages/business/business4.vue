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
				<p style="text-align: left;">{{businessIntroduce}}</p>
				<p style="text-align: left;">【业务】天望江海以其专业的投融资业务，已成功实现优必选、亿鑫通、花无缺、一熊科技等成功退出案例。同时储备有大量政府合作基金和科技产业类储备项目。</p>
				<p style="text-align: left;">【管理团队】徐鲁（创始合伙人、董事长、投资委员会主席）；耿裕华（联合创始人、募资委员会主席）；吴洋（长期合伙人、投资委员会委员）；陈歆玮（长期合伙人、投资委员会联席主席）：香港科技大学 金融学硕士。创立联国际金融控股有限公司，历任中国国际金融有限公司（“中金公司，CICC”）投资银行部经理和和副总裁，美林证券（Merrill Lynch）（亚洲）和瑞银证券（UBS）（香港）投资银行部副总裁和执行董事、野村国际(香港)有限公司投资银行部。董事总经理兼中国金融机构部门主管。 </p>
				<p style="text-align: left;">【合作咨询】0513-89000097</p>
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
				curId: 0,
				businessTitle: "天望江海",
				businessTitleEng: 'TianWangJiangHai',
				businessIntroduce: '天望江海聚焦海内外一级半市场和二级市场，以并购基金、上市公司+PE、纯PE 三类基金形式开展并购业务及配套投行业务，尤其着力服务于产业类上市公司的“投行+投资”业务模式。',

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

<style>
	.fenlei li a:hover,
	.fenlei li a.active {
		color: #0546B4;
		border: 2px solid #0546B4;
	}
</style>