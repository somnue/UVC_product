<template>
	<div class="peisonInfo">
		<towtop></towtop>
		<div class="boxTitle">
			<div class="container">
				<img src="../../static/images/head.png" class="img-responsive ">
				<div class="boxPhone ">用户{{phone}}，您好！</div>
				<router-link to="/changePsw">
					<p>修改密码</p>
				</router-link>
				<p @click='logout'>安全退出</p>
			</div>
		</div>
		<div class="container">
			<div class="new_width">
				<div class="personal_dh">
					<ul>
						<li @click="tab(index)" v-for="(item,index) in personInfo" :class="{personal_dh_lion : index===curId}">{{item.name}}</li>
					</ul>
				</div>
				<div class="personal_main2 personal_1" v-show=' curId === 0'>
					<ul>
						<li><span>用户名：</span>{{phone}}</li>
						<li><span>手机号：</span>{{phone}}</li>
						<li><span>用户类型：</span>未认证<input type="button" name="Submit" value="认证" class="new_rz_btn"></li>
						<li><span>邮箱：</span></li>
						<li><span>真实姓名：</span></li>
						<li><span>公司名称：</span></li>
						<li><span>职位：</span></li>
						<li><span>会员卡号：</span>1548834776301</li>
					</ul>
				</div>
				<div class="personal_main2 personal_1" v-show=' curId === 1 '>
					<ul>
						<li><span>我的积分：</span>50</li>
						<li><span>积分说明：</span>（注册+50积分）</li>
						<li style='color:blue'><span style='color:#000'>积分明细：</span>查看详情</li>
					</ul>
				</div>
				<div class="personal_main2 personal_1" v-show=' curId === 2 '>
					<ul>
						<li><span>江海学院</span></li>
						<li><span>创投工场</span></li>
						<li><span>Universe Media</span></li>
						<li><span>AI投研</span></li>
						<li><span>孵化网络</span></li>
						<li><span>基金星空</span></li>
						<li><span>创投大家</span></li>
						<li><span>江海星空</span></li>
						<li><span>智能招商</span></li>
						<li><span>江海沙龙</span></li>
					</ul>
				</div>
				<div class="personal_main2 personal_1" v-show=' curId === 3 '>
					<ul style="height:500px">

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
				curId: 0,
				headerBg: 'headerBg',
				tabShow: false,
				personInfo: [{
					name: '个人信息'
				}, {
					name: '我的积分'
				}, {
					name: '产品推荐'
				}, {
					name: '我的关注'
				}],
				phone: sessionStorage.phone,
				setItemShow: false,
			}
		},
		created() {

		},
		components: {
			towtop,
			towbottom
		},
		methods: {
			tab(index) {
				this.curId = index;
			},
			//          setItem:function(){
			//              this.setItemShow = !this.setItemShow
			//          },
			logout: function() {
				sessionStorage.clear();
				this.$router.push({          
					path: '/login',
					        
				})
			}
		},

	}
</script>

<style scoped>
	.peisonInfo {
		background: #eff3f5;
	}
	.boxTitle .container {display: flex;align-items: center;color: #FFF}
	.boxTitle {
		background: url(../../static/images/personInfoBg.png);
		margin: 95px 0 40px 0;
		height: 100px;
		line-height: 100px;
		vertical-align: middle
	}
	.boxTitle .container p {color: #0546B4;}
	.boxTitle .container p:hover {text-decoration: underline;cursor: pointer;}
	.boxTitle .container p:first-child{margin-right: 20px;}
	.boxTitle .img-responsive {
		width: 54px;
		height: 54px;
		margin-left: 60px;
		margin-right: 20px;
	}
	.boxTitle .boxPhone{margin-right: 60%;}
	.setItem {
		background: rgb(24, 69, 194, .5);
		width: 150px;
		height: 60px;
		line-height: 60px;
		position: absolute;
		right: 125px;
		top: 50px;
		border-radius: 10px;
		text-align: center;
	}
	
	.setItem li {
		height: 30px;
		line-height: 30px;
		cursor: pointer;
	}
	
	.conText p {
		font-size: 14px;
		margin-top: 13px;
	}
	
	.new_width {
		width: 1200px;
		margin: 0 auto;
	}
	
	.personal_dh {
		border: solid 1px #e2e7eb;
		height: 50px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		background: #ffffff;
	}
	
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	
	.personal_dh li {
		float: left;
		width: 132px;
		text-align: center;
		height: 50px;
		line-height: 50px;
		font-size: 14px;
		color: #777777;
		cursor: pointer;
		/* background: url(../images/personal/personal_07.jpg) top right no-repeat; */
	}
	
	.personal_dh_lion {
		font-size: 14px;
		color: #f2941a;
		border-bottom: solid 3px #42a2ed;
		box-sizing: border-box;
		margin-bottom: -10px;
	}
	
	.personal_dh li a {
		display: block;
	}
	
	.personal_1 {
		padding: 10px 30px;
	}
	
	.personal_main2 {
		background: #ffffff;
		margin-top: 16px;
		margin-bottom: 16px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		min-height: 300px;
	}
	
	.personal_1 li {
		float: left;
		width: 50%;
		font-size: 14px;
		color: #333333;
		line-height: 42px;
		height: 42px;
	}
	
	.personal_1 li span {
		display: inline-table;
		width: 100px;
		float: left;
	}
	
	.new_rz_btn {
		background: #67c61a;
		width: 72px;
		height: 28px;
		line-height: 28px;
		border: solid 1px #57b00d;
		color: #fff;
		cursor: pointer;
		margin-left: 10px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		border-radius: 3px;
	}
</style>