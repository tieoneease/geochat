let game = {
  isPlaying: true,
  players: {
    'sam': {
      team: 'red',
    },
    'mingee': {
      team: 'blue',
    },
    'jason': {
      team: 'blue',
    }
  },
  currentVote: {
    'yes': 4,
    'no': 1
  },
  votes: [
    {
      'yes': 4,
      'no': 1,
      'pass': true
    },
    {
      'yes': 1,
      'no': 4,
      'pass': false
    },
  ],
  mission: {
    'success': 5,
    'fail': 0
  },
  missionTeam: [
    'sam',
    'mingee',
    'jason'
  ],
  leader: {

  },
  board: [
    {
      numPlayers: 2,
      numFails: 1,
    },
    {
      numPlayers: 3,
      numFails: 1
    },
    {
      numPlayers: 4,
      numFails: 1
    },
    {
      numPlayers: 5,
      numFails: 2
    },
    {
      numPlayers: 5,
      numFails: 1
    },
  ],
  voteTrack: 3,
}

let player = {
  isOnTeam: true,
  team: 'blue',
  vote: 'yes'
}

let init = {
  '5': {
    numSpies: 2,
    numPlayers: [2,2,2,3,3],
    numFails: [1,1,1,1,1]
  },
  '6': {

  }
}
