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
let obj1 = {
  age: 12,
  6: 90,
};

console.log("age of obj", obj1[6]); // valid
console.log("age of obj", obj1["6"]); // valid
console.log("age of obj", obj1["age"]); //valid

/* Other way of creating an object */
let obj2 = new Object();
obj2.name = "Harprit";
obj2.class = 10;

console.log(obj2);


// Copying objects 

obj2 = { ...obj1 }; // ...  spread operator
console.log(obj2);

//Spread operators in Objects and Arrays
//in Arrays
let arr = [12, 10, 3, 19];
let arr2 = [arr]; 
let arr3 = [...arr]; 
console.log({ arr2, arr3 });

//in objects
let student1 = {
  age: 20,
  name: "adi",
};

let student2 = { student1 };
let student3 = { ...student1 };

console.log({ student2, student3 });

let studentPersonalDetails = {
  age: 22,
  name: "mahi",
};
let studentAcademicDetails = {
  marks: 168,
  grade: "A",
};

//merging two or more objects using spread operator
let studentDetails = {
  ...studentPersonalDetails,
  ...studentAcademicDetails,
};
console.log({ ...studentDetails });

// issue with copying object with spread operators

obj1 = {
  a: {
    b: {
      c: 3,
    },
  },
};

obj2 = { ...obj1 };
obj2.a.b.c = 12;
console.log({ obj2 });
console.log({ obj1 });

/* When exactly to use spread operators in objects? when we need to copy one level only */
let student = {
  name: "digvesh Patil",
  age: 5,
  standard: "1th",
  gender: "male",
  address: "kothrud, Pune",
  section: "B",
};
/* we can do use shallow copy with spread operator */ //single level object
let studentCopy1 = { ...student };
studentCopy1.name = "copy";
console.log({ studentCopy1, student });

/* way of copying an object (shallow copy) */
let studentCopy2 = Object.assign({}, student);
console.log({ studentCopy2 });
//merging two onject
let studentDetails2 = Object.assign(
  {},
  studentPersonalDetails,
  studentAcademicDetails
);
console.log({ studentDetails2 });


/* deep copying */
let deepCopyOfObj1 = JSON.parse(JSON.stringify(obj1));
console.log({ deepCopyOfObj1 });
deepCopyOfObj1.a.b.c = 100; //changing at level 3
console.log({ obj1 }); // not change original
console.log({ deepCopyOfObj1 }); //value is only changed for copied object

/* Concept Of ---> JSON.parse(JSON.stringify(obj1)); */

let objectInStr= JSON.stringify(student); //converting student object to string
console.log(objectInStr);

let strToObj = JSON.parse(objectInStringFormat); //converting a object-string to object
console.log({ strToObj });

console.log(
  JSON.parse(
    `{"name":"Digvesh jadhav","standard":"1th","gender":"male","section":"B"}`
  )
);
