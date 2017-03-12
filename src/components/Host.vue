<template>
<div>
  <button @click="shit">fuck</button>
</div>
</template>

<script>
export default {
  name: 'host',
  props: ['game'],
  created () {
      this.game.once('value').then(function(snapshot) { console.log(snapshot.val()) })
  },
  computed: {
  },
  data () {
    return {
      gameData: {}
    }
  },
  methods: {
    shit: function() {
      this.game.child('isPlaying').set(true)
    }
  }
}
</script>
<style scoped>
</style>
