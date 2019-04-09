import Vue from 'vue'
import Router from 'vue-router'
import BubbleSort from '@/components/BubbleSort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BubbleSort',
      component: BubbleSort
    }
  ]
})
