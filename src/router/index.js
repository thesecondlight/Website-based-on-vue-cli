import Vue from 'vue'
// import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import x1 from '@/components/x1'
import x2 from '@/components/x2'
import p1 from '@/components/p1'
import p2 from '@/components/p2'
import params from '@/components/params'
import top from '@/components/top'
import Count from '@/components/count'
import footer from '@/components/footer'
import search from '@/components/search'

Vue.use(Router)
// Vue.use(Vuex)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '主页',
      components:{
        default:HelloWorld,
        left:p1,
        right:p2,
        top:top
      },
      alias:'/jsbupang'
      
    },
    {
      path:'/count',
      component:Count

    },
    {
      path:'/footer',
      component:footer

    },
    {
      path:'/search',
      component:search

    },
    {
      path:'/goHome',
      redirect:'/'

    },
    {
      path:'/params/:newsId/:newsTitle',
      // path:'/params/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId/:newsTitle'
    },
    // {
    //   path:'/login',
    //   name:'login',
    //   components:{
    //     default:HelloWorld,
    //     left:p2,
    //     right:p1
    //   }

    // },
    {
      path:'/params/:newsId/:newsTitle',
      // path:'/params/:newsId(\\d+)/:newsTitle',
      component:params
    },
    {
      path:'/login',
      // name:'login',
      component:login,
      children:[
        {path:'/',component:login},
        {path:'x1',name:'注意事项1',component:x1},
        {path:'x2',name:'x2',component:x2}
      ],
      
    },
    {
      path:'/register',
      component:register
    }
  ]
})
