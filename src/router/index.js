import Vue from 'vue'
import Router from 'vue-router'
import Activite from '@/components/Activite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Activite',
      component: Activite
    }
  ]
})
