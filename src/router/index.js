import Vue from 'vue'
import Router from 'vue-router'
import StartForm from '@/components/StartForm'
import GameContainer from '@/components/GameContainer'
import Player from '@/components/Player'
import PlayerForm from '@/components/PlayerForm'
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
      path: '/game/:roomName',
      name: 'Game',
      component: GameContainer,
      props: true,
      children: [
        {
          path: 'host',
          name: 'Host',
          component: Host,
          props: true
        },
        {
          path: 'playerform',
          name: 'PlayerForm',
          component: PlayerForm,
          props: true
        },
        {
          path: 'player',
          name: 'Player',
          component: Player,
          props: true
        },
      ]
    },
  ]
})
