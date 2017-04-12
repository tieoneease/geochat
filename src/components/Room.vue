<template>
<div class="column">
  <div class="ui raised padded segment">

    <h3 class="ui top attached center aligned header">
      Room {{roomCode}}
    </h3>

    <div id="messages" class="ui attached segment comments">
      <div v-for="message in messages" class="comment">
        <div class="content">
          <a class="author">{{message.username}}</a>
          <div class="metadata">{{message.createdAt}}</div>
          <div class="text">{{message.text}}</div>
        </div>
      </div>
      <div v-if="messages.length == 0">
        No Messages yet
      </div>
    </div>

    <div class="ui bottom attached segment action input">
      <input type="text" v-model="messageText" @keyup.enter="send" placeholder="Type Message...">
      <button @click="send" class="ui blue button">Send</button>
    </div>

  </div>
</div>
</template>

<script>
import db from '@/config/db'


function getTime() {
  return new Date().toLocaleString().split('/').join('-').split(',')[1]
}

function scrollToBottom(DomNode) {
  DomNode.scrollTop = DomNode.scrollHeight
}

export default {
  name: 'room',
  props: ['roomCode'],
  data () {
    return {
      messageText: '',
      messagesNode: {}
    }
  },
  mounted () {
    this.messagesNode = document.getElementById('messages')
  },
  updated() {
    scrollToBottom(this.messagesNode)
  },
  firebase () {
    return {
      messages: db.ref('rooms/' + this.roomCode).child('messages')
    }
  },
  methods: {
    send: function() {
      let message = {
        text: this.messageText,
        createdAt: getTime(),
        username: 'Matt'
      }
      this.messageText = ''
      this.$firebaseRefs.messages.push(message)
    }
  }
}
</script>
<style>
.comments {
  overflow-y: scroll;
  max-height: 30vh;
}

.comments::-webkit-scrollbar {
  display: none;
}
</style>
