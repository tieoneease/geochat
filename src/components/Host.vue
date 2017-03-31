<template>
<div>
  <button @click="log">hello</button>
</div>
</template>

<script>
import db from '@/config/db'
export default {
  name: 'host',
  props: ['gameRef'],
  created () {
    const vm = this;
    this.gameRef.once('value').then(function(snapshot) { vm.game = snapshot.val() })
  },
  computed: {
  },
  data () {
    return {
      game: {}
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
    log: function() {
      console.log(this.gameRef)
    }
  }
}
</script>
<style scoped>
</style>
