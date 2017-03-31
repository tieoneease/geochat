import Vue from 'vue'
import Router from 'vue-router'
import StartForm from '@/components/StartForm'
import Player from '@/components/Player'
import Host from '@/components/Host'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartForm',
      component: StartForm
    },
    {
      path: '/host',
      name: 'Host',
      component: Host,
      props: true
    },
    {
      path: '/player',
      name: 'Player',
      component: Player,
      props: true
    },
  ]
})
