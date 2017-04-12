import Vue from 'vue'
import Router from 'vue-router'
import StartForm from '@/components/StartForm'
import Room from '@/components/Room'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartForm',
      component: StartForm
    },
    {
      path: '/room/:roomCode',
      name: 'Room',
      component: Room,
      props: true
    },
  ]
})
