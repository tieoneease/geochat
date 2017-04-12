<template>
<div id="start-form" class="column">
  <div class="ui large form">
    <div class="ui raised padded segment">
      <div class="field">
        <input v-model="roomCode" type="text" name="room-code" placeholder="Enter Room Code...">
      </div>
      <button @click="joinRoom" class="ui fluid blue button">
        Join Room
      </button>
    </div>
    <div class="ui error message"></div>
  </div>
</div>
</template>

<script>
import db from '@/config/db'
export default {
  name: 'start-form',
  data () {
    return {
      roomCode: ''
    }
  },
  methods: {
    joinRoom: function() {
      this.$router.push({ name: 'Room', params: { roomCode: this.roomCode }})
    }
  }
}
</script>
<style>

.column {
  max-width: 450px;
  margin-top: 20vh;
}

</style>
