import Vue from 'vue'
import Router from 'vue-router'
import HelloWuHan from '@/components/HelloWuHan'
import HelloChina from '@/components/HelloChina'
import HelloGG from '@/components/HelloGG'
import HelloSZ from '@/components/HelloSZ'
import HelloYS from '@/components/HelloYS'
Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/china',
      name: 'HelloChina',
      component: HelloChina,
      children:[
          {
            path:'wh',
            name:'HelloWuHan',
            component: HelloWuHan,
            children:[
              {
                path:'gg',
                name:'HelloGG',
                component:HelloGG
              }
            ]
          },
          {
            path:'sz',
            name:'HelloSZ',
            component:HelloSZ,
            children:[
              {
                path:'ys',
                name:'HelloYS',
                component:HelloYS,
              }
            ]
          }
      ]
    }
  ],
})
