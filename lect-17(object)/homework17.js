/************************************** Hands-On ***************************************************************** */

//// Concept Understanding project:2 on Object : Cricket Team Data

const cricketTeam=
{
    name:"Indian Cricket Team",
    players:[{id:1,scores:[106,36,89]}],

    display: function()  // function to display the id and perfromance of each player
    {
        for (let player of this.players)
        {
            console.log(player?.id,"=",player?.scores.join(","))
        }
    },

    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
    addplayer: function(id)
    {
        this.players.push({id:id,scores:[]}) //my method

       /*  const newPlayer={};   // lecture method
        newPlayer.id=id;
        newPlayer.score=[];
        this.players.push(newPlayer) */
    },

    /* find the player with this id, and push this score to its score array */
    addScore: function (id,score)
    {
        for (let player of this.players)
        {
            if(player?.id==id)
            {
                player?.scores.push(score);
                return;                   // for not checking further
            };
        };
    },

    /* find the player with this id and calculate its avg score and return it*/

    avgOfPlayer: function(id)
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
                return(output/(player?.scores?.length));//this.player not used here scope concept
                
            }
        }
    },

 /* calculate the average of scores of all players combined */
    allPlayerScoreAvg: function()
    {   
        let totalsum=0;
        let count=0;
        for (let player of this.players)
        {
            for (let score of player.scores)
            {
                totalsum+=score;
                count++
            }
            
        }
        console.log(totalsum/count)

    }

}
cricketTeam.addplayer(2)
cricketTeam.addScore(2,67)
console.log(cricketTeam.avgOfPlayer(1))
cricketTeam.allPlayerScoreAvg()
cricketTeam.display()

//// some properties of Objects

let obj1=
{
    age:56,
    0:45
}
console.log(obj1['age']) // valid
console.log(obj1[0]); //valid
console.log(obj1["0"]); //valid
console.log(obj1.age);//valid
//console.log(obj1[age]) // invalid ❌ ReferenceError (no variable named `age` defined)
//console.log(obj1.0) //invalid ❌ SyntaxError (property names can’t start with a digit in dot notation)

/// other way to create object
let obj2 = new Object();
obj2.name = "John Cena";
obj2.weight = 100;
console.log(obj2);

/// copying object 1 in obj2

//1] spread operator ...
//object copy
obj2={...obj1}
console.log(obj2)

// spread operator in array
let arr1=[56,20,45]
let arr2=[arr1]  // without using spread operator
let arr3=[...arr1] // with using spread operator

console.log(arr2); // paste [] with
console.log(arr3);// paste numbers

//spread operator in objects

console.log(arr1.join())