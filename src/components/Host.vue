<template>
<span class="push">
  <template v-if="game.isPlaying">
  <div class="board">
    <div class="board-item missions">
      <div v-for="mission in missions" class="mission">
        {{mission}}
        <p>2 fails required</p>
      </div>
    </div>
    <div class="board-item vote-track">
      <div v-for="votes in voteTrack" class="vote">{{votes}}</div>
    </div>
  </div>
  </template>


  <template v-else>
  <div class="column">
    <div class="ui large form">
      <div class="ui stacked segment">
        <div class="ui list">
          <button @click="log" class="ui primary button item">Make the players</button>
          <div v-for="player in game.players" class="item">{{player.name}}</div>
          <button @click="start" class="ui primary button item">Start Gam</button>
        </div>
      </div>
    </div>
  </div>
  </template>
</span>

</template>

<script>
import db from '@/config/db'
export default {
  name: 'host',
  props: ['roomCode'],
  created () {
  },
  computed: {
  },
  data () {
    return {
      missions: [1,2,3,4,5],
      voteTrack: [1,2,3,4,5]
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
    log: function() {
      console.log(this.game)
      console.log(this.game['.value'])
      this.$firebaseRefs.game.child('players').set(
        [
          {name: 'sam'},
          {name: 'mingee'},
          {name: 'jason'},
        ]
      )
    }
  }
}
</script>

<style scoped>
.board {
  background-color: peachpuff;
  margin-top: 10vh;
  border-radius: 5px;
  width: 80vw;
  height: 80vh;
  max-width: 1040px;
}


.board-item {
  width: 80%;
  margin: 20% auto;
  display: flex;
  justify-content: space-around;
}

.missions {
  background-color: honeydew;
}

.mission {
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  height: 15vh;
  width: 15vh;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}

.vote-track {
  background-color: pink;
}

.push {
  margin-top: 20vh;
}

</style>
