<template>
<div>
  <p>
  this is my {{playerName}}
  </p>
</div>
</template>

<script>
export default {
  name: 'player',
  props: ['gameRef', 'playerName'],
  data () {
    return {
    }
  },
  firebase () {
    return {
      player: {
        source: this.gameRef.child('players' + this.playerName),
        asObject: true
      }
    }
  },
  methods: {
    shit: function() {
      this.$firebaseRefs.player.push('lol')
    }
  }
}
</script>
<style scoped>
</style>
