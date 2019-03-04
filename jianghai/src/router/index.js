import Vue from 'vue'
import Router from 'vue-router'
import test from '@/pages/test'
import about from '@/pages/about'
import news from '@/pages/news'
import login from '@/pages/login'
import team from '@/pages/team'
import contact from '@/pages/contact'
import join from '@/pages/join'
import register from '@/pages/register'
import forgetPsw from '@/pages/forgetPsw'
import changePsw from '@/pages/changePsw'
// import newsList from '@/pages/newsList'
import business1 from '@/pages/business/business1'
import business2 from '@/pages/business/business2'
import business3 from '@/pages/business/business3'
import business4 from '@/pages/business/business4'
import business5 from '@/pages/business/business5'
import businessDetil from '@/pages/business/businessDetil'
import visualBusinessDetil from '@/pages/business/visualBusinessDetil'
import product1 from '@/pages/product/product1'
import product2 from '@/pages/product/product2'
import product3 from '@/pages/product/product3'
import product4 from '@/pages/product/product4'
import product5 from '@/pages/product/product5'
import product6 from '@/pages/product/product6'
import product7 from '@/pages/product/product7'
import product8 from '@/pages/product/product8'
import product9 from '@/pages/product/product9'
import product10 from '@/pages/product/product10'
import productDetil from '@/pages/product/productDetil'
import personInfo from '@/pages/personInfo'
import video from '@/pages/video'
import rules from '@/pages/rules'
Vue.use(Router)

export default new Router({
	 // mode: 'history',
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/test',
      component: test,
      meta: {
        title: '江海天空'
      }
    },
    {
      path: '/',
      redirect: '/test',
      meta: {
        title: '江海天空'
      }
    },
    {
      path: '/about',
      component: about,
      meta: {
        title: '关于我们-江海天空'
      }
    },
    {
      path: '/news',
      component: news,
      meta: {
        title: '新闻动态-江海天空'
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登录社区-江海天空'
      }
    },
    {
      path: '/team',
      component: team,
      meta: {
        title: '团队介绍-江海天空'
      }
    },
    {
      path: '/contact',
      component: contact,
      meta: {
        title: '联系我们-江海天空'
      }
    },
    {
      path: '/join',
      component: join,
      meta: {
        title: '加入我们-江海天空'
      }
    },
    {
      path: '/register',
      component: register,
      meta: {
        title: '注册-江海天空'
      }
    },
    {
      path: '/personInfo',
      component: personInfo,
      meta: {
        title: '个人信息-江海天空'
      }
    },
    {
      path: '/forgetPsw',
      component: forgetPsw,
      meta: {
        title: '忘记密码-江海天空'
      }
    },
    {
      path: '/changePsw',
      component: changePsw,
      meta: {
        title: '修改密码-江海天空'
      }
    },
    // {
		// path: '/newsList',
		// component: newsList
		// },
    {
		path: '/business1',
		component: business1
		},
    {
		path: '/business2',
		component: business2
		},
    {
		path: '/business3',
		component: business3
		},
    {
		path: '/business4',
		component: business4
		},
    {
		path: '/business5',
		component: business5
    },
    {
		path: '/businessDetil',
		component: businessDetil
    },
    {
		path: '/visualBusinessDetil',
		component: visualBusinessDetil
    },
    {
      path: '/product1',
      component: product1
    }, 
    {
      path: '/product2',
      component: product2
    }, 
    {
      path: '/product3',
      component: product3
    }, 
    {
      path: '/product4',
      component: product4
    }, 
    {
      path: '/product5',
      component: product5
    }, 
    {
      path: '/product6',
      component: product6
    }, 
    {
      path: '/product7',
      component: product7
    }, 
    {
      path: '/product8',
      component: product8
    }, 
    {
      path: '/product9',
      component: product9
    }, 
    {
      path: '/product10',
      component: product10
    }, 
    {
      path: '/productDetil',
      component: productDetil
    }, 
    {
      path: '/video',
      component: video,
      meta: {
        title: '媒体中心'
      }
    },
    {
      path: '/rules',
      component: rules
    },
  ]
})
