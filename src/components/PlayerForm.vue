<template>
<div>
</div>
</template>

<script>
export default {
  name: 'player-form',
  props: ['gameRef'],
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
