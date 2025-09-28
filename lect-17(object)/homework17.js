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

let customer1 = {
  age: 20,
  name: "tejas",
};

let customer2 = { customer1 };// paste as it is object
let customer3 = { ...customer1 }; //paste key-value only of object

console.log({ customer2, customer3 });


let studentdetails = {
  age: 15,
  name: "mangesh",
};
let academicDetails = {
  marks: 165,
  grade: "O",
};

//merging two or more objects using spread operator
let studentData = {
  ...studentdetails,
  ...academicDetails,
};
console.log({ ...studentData });

/* issue with copying object with spread operators */

obj1 = {
  a: {
    b: {
      c: 3,
    },
  },
};

obj2 = { ...obj1 }; //This copies only the first level of obj1 into obj2
obj2.a.b.c = 12;    // update the value obj1 level after level 1 (obj2.a is still a reference to the same object as obj1.a.)
console.log({ obj2 });
console.log({ obj1 });

// using create shallow copy To fix this, we need a deep copy

// Deep Copy Concept

let customer = {
  id: 101,
  name: "aniket Sharma",
  contact: {
    email: "anket@gmail.com",
    phone: "987**432*0",
    city: "pune"
  }
};
console.log("Object For diff Shallow and Deep Copy:",customer)

// Deep copy using JSON method
let deepCopyCustomer = JSON.parse(JSON.stringify(customer)); 
// JSON.parse(): string->object
// JSON.stringify(): object->string
            
deepCopyCustomer.contact.phone = "1111111111"; //deep copy modification

console.log("Deep Copy:",deepCopyCustomer)
console.log("after deep Copy original :",customer) //not change

//Shallow using spread operator
let shallowCopyCustomer={...customer} //using spread operator
shallowCopyCustomer.contact.phone="22222222222";

console.log("Shallow Copy:",shallowCopyCustomer)
console.log("after Shallow Copy original :",customer)

/*
IMP NOTE:
1]Shallow copy (using spread operator) allow level 1 nesting than consider original obj
2]Deep copy (JSON method) allow for multilevel nesting
*/