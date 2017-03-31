<template>
<div id="start-form" class="column">
  <div class="ui large form">
    <div class="ui stacked segment">
      <div class="field">
        <input v-model="roomCode" type="text" name="room-code" placeholder="Enter Room Code...">
      </div>
      <div class="two large ui buttons">
        <button @click="createRoom" class="ui teal button">
          Create Room
        </button>
        <button @click="joinRoom" class="ui blue button">
          Join Room
        </button>
      </div>
    </div>
    <div class="ui error message"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'start-form',
  data () {
    return {
      roomCode: ''
    }
  },
  methods: {
    createRoom: function() {
      this.$router.push({ name: 'Host', params: { roomCode: this.roomCode }})
    },
    joinRoom: function() {
      this.$router.push({ name: 'Player', params: { roomCode: this.roomCode }})
    }
  }
}
</script>
<style scoped>

#start-form {
  margin-top: 20vh;
}

.column {
  max-width: 450px;
}

</style>
