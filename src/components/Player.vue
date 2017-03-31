<template>
<div class="column">
  this is my player class in room {{this.roomCode}}
</div>
</template>

<script>
import db from '@/config/db'
export default {
  name: 'player',
  props: ['roomCode'],
  data () {
    return {
    }
  },
  firebase () {
    return {
      game: {
        source: db.ref('games/').child(this.roomCode),
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
