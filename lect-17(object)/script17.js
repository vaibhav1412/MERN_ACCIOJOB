//---------------------------------------------- Object Day 2----------------------------------------------------------------------

// project : 2 Cricket DATA
const team={
    Name:"Indian Cricket Team",
    players:[{id:1, scores:[10,25,30]}],

    add_players: function(id)
    {
        const new_player = {id:id, scores:[]};
        this.players.push(new_player)
    },
    add_score: function(id,score)
    {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id === id) {
        this.players[i].scores.push(score);
        return;
        }
    }
    },
    average_score: function(id)
    {
    for (let player of this.players)
    {
     if(player?.id===id)
        {   
         let output=0
         for (let score of player?.scores)
         {
            output+=score
         }
        return(output/(player?.scores?.length));
                
         }
        }
    },
    team_avrage: function()
    {
    let sum = 0;
    let length = 0;
    for (let player of this.players) {
      for (let score of player.scores) sum += score;
      length += player?.scores?.length;
    }

    return sum / length;
    }
}
team.add_players(2);
team.add_score(2,30)
console.log(team.average_score(1))
console.log(team.team_avrage())

/// some properties of object
