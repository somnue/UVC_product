<template>
	<div>
		<header :class="headerbgColor" class="navbar-fixed-top">
			<nav class="navbar navbar-default bootsnav on no-full">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    		<i class="fa fa-bars"></i>
                		</button>
                		<router-link to="/test">
							<div class="navbar-brand logo">
								<img :src="url" class="img-responsive">
							</div>
						</router-link>
					</div>
					<div class="collapse navbar-collapse" id="navbar-menu">
						<ul id="ctl00_MainMenu" class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
							<li id="nav1">
								<router-link to="/test">
									<h3>首 页</h3>
									<i></i>
									<span>HOME</span>
								</router-link>
							</li>
							<li id="nav2">
								<router-link to="/about">
									<h3>关于我们</h3>
									<i></i>
									<span>ABOUT</span>
								</router-link>

							</li>
							<li id="nav3">
								<router-link to="/team">
									<h3>团队介绍</h3>
									<i></i>
									<span>TEAM</span>
								</router-link>
							</li>
							<li id="nav4">
								<router-link to="/news">
									<h3>新闻动态</h3>
									<i></i>
									<span>NEWS</span>
								</router-link>
							</li>
							<li id="nav5">
								<router-link to="/join">
									<h3>加入我们</h3>
									<i></i>
									<span>JOIN US</span>
								</router-link>
							</li>
							<li id="nav6">
								<a @click="toPage" style="cursor:pointer" :class="{active:isSelected}">
									<h3>登录社区</h3>
									<i></i>
									<span>LOGIN</span>
								</a>
							</li>
							<li id="nav7">
								<router-link to="/contact">
									<h3>联系我们</h3>
									<i></i>
									<span>CONTACT</span>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>

	</div>

</template>

<script>
	export default {

		data() {
			return {
				isSelected : false
			}
		},
		props: {
			headerBg: [String],
			imgUrl: [String],
		},
		created() {
		},
		mounted () {
		},
		computed:{
			url () {
				return this.imgUrl?this.imgUrl: '../../static/images/logo.png'
			},
			headerbgColor () {
				return this.headerBg?this.headerBg: 'headerBg'
			},
			
		},
		methods: {
			toPage:function(){
				if(sessionStorage.phone === '' || sessionStorage.phone === undefined ){
					this.$router.push({
	          path:'/login',
	        });
					this.isSelected = true;
				}else {
					this.$router.push({
	          path:'/personInfo',
	        });
					this.isSelected = false;
				}
			}
		}
	}
</script>

<style scoped>
	/*.nav {
		padding-top: 20px;
	}*/
	
	.headerBg {
		background: #fff;
		box-shadow: 0 3px 11px 0 rgba(51, 51, 51, 0.50);
	}
	.newHeaderBg .navbar.bootsnav ul.nav > li > a{color: #fff;}
	.newHeaderBg {
		background: rgba(0,0,0,.6);
		padding: 24px 0 16px;
	}
	
	.navbar-brand {
		padding: 0;
	}
	.router-link-active {
		color:#0546B4 !important;
	}
	.active {
		color:#0546B4 !important;
	}
</style>