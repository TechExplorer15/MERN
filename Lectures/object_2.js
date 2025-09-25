//------- object ---------


/* Cricket Team */

const team = {

  name: "Indian Cricket Team",

  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */

  players: [{ id: 1, scores: [10, 34, 80] }],

  addPlayers: function (id) {

    /* assume always a new player is coming with unique id, this function should create 

    a new player with this id and empty scores array, then push this player to players array

    */

  },

  addScore: function (id, score){

    /* find the player with this id, and push this score to its score array */

  },

  averageScore: function(id){

    /* find the player with this id and calculate its avg score and return it*/

  },

  teamAverage: function () { //optional

    /* calculate the average of scores of all players combined */

  }

}

team.addPlayers(2);

team.addPlayers(3);

 

team.addScore(1, 29);

team.addScore(3, 80);

team.addScore(2, 40);

team.addScore(2, 100);

team.addScore(2, 120);

team.addScore(3, 20);

 

console.log("average score of player 1" + team.averageScore(1));// => 153/4 = 38.25

console.log("average score of player 2" + team.averageScore(2));// => 160/3 = 53.33

 

console.log("average score of player 2" + team.teamAverage());// => 413/9 = 45.88



// spread operator

let arr1 = [1,2,3,4];
let arr2 = [6, 7, ...arr1];
let arr3 = [...arr1, ...arr2, 8, 9];

console.log(arr2);
console.log({arr3});

