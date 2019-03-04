<template>
	<div class="newsList">
		<towtop></towtop>
		<div class="container" style="min-height: 735px;">
			<div class="flexCenter">
				<div class="title fadeInUp animated">
					<h3>{{title}}</h3>
					<p>{{Eng}}</p>
				</div>
			</div>
			<div class="newContent fadeInUp animated">
				<p>{{content}}</p>
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
				title: this.$route.query.detailsTitle,
				Eng: this.$route.query.detailsEng,
				content: this.$route.query.detailsContent
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
	.businessDetil {
		margin-top: 60px;
	}
</style>