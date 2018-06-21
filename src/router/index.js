import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import numberFlip from '@/components/number-flip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/numberFlip',
      name: 'number-flip',
      component: numberFlip
    }
  ]
})
