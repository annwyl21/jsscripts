//Code Academy Team Stats Project

const team = {
    _players: [],
    get players () {
      return this._players;
    },
  
    _games: [],
    get games () {
      return this._games;
    },
   
    //add player function
    addPlayer (firstName, lastName, age) {
      const person = {
      'First Name': firstName,
      Surname: lastName,
      Age: age
      };
      //console.log(person);
      this.players.push(person);
      },
  
      //add a game function
      addGame (opponent, teamPoints, opponentPoints) {
        const match = {
          Opponent: opponent,
          'Team Points': teamPoints,
          'Opponent Points': opponentPoints
        };
        this.games.push(match);
      },
  };
  
  //3 players
  team.addPlayer('Joseph', 'Houghton', 12);
  team.addPlayer('Abigail', 'Houghton', 8);
  team.addPlayer('Genie', 'Doggo', 4);
  
  //3 games
  team.addGame('Happy Howes', 22, 54);
  team.addGame('Magic MacDonalds', 34, 82);
  team.addGame('Smiling Sillars', 150, 56);
  
  //adding 3 specific players
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  //printing the team
  console.log(team.players);
  
  //printing the matches played
  console.log(team.games);