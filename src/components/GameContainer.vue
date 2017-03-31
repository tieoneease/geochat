<template>
<router-view :gameRef="$firebaseRefs.game" :game></router-view>
</template>

<script>
import db from '@/config/db'

export default {
  name: 'game-container',
  props: ['roomName'],
  data () {
    return {
    }
  },
  firebase () {
    return {
      game: {
        source: db.ref('games/').child(this.roomName),
        asObject: true
      }
    }
  },
  methods: {
  }
}

</script>

<style scoped>
</style>
