 /* ---------------------------HomeWork-------------------------------------------*/


const resume = {
  name: "Vaibhav Rote",
  email: "vaibhav@gmail.com",
  phone: "8x1xxxx108",
  skills: ["Javascript", "HTML", "CSS"],
  workExperience: [],
  display: function () {
    // display all the details of the resume in any format
    console.log("=== Resume ===");
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Phone:", this.phone);
    console.log("Skills:", this.skills.join(", "));
    console.log("Work Experience:", this.workExperience);
    
  },
  addSkills: function (newSkill) {
    //add this new skill to skills array
    this.skills.push(newSkill)
  },
  addWorkExperience: function (newExperience) {
    //add this new experience to work experience array
    this.workExperience.push(newExperience)
  },
  showSkills: function () {
    //shows all the skills
    console.log(this.skills)
  },
};


resume.addSkills("React");
resume.addWorkExperience("fresher");
resume.showSkills();
resume.display();



/******************************* Hands-on***************************************** */

/* An object is a collection of key-value pairs. (like Dictionary) 
    1] The key is always a string (or symbol).
    2] The value can be anything: number, string, array, function, or even another object.
*/

//////   A. Object Creation:

//1] Using Object Literals:

let mother =
{ 
    name:"Priya",
    age:33,
    address:"Shivaji Nagar, Pune",
    city:"Pune"
};
  //console.log({mother});

let student={
    name:"Umesh Patil",
    age:15,
    class:"10th",
    gender: "male",
    address: "Kothrud, Pune",
    section: "C",
};

//2] using new object()
let sample=new Object();
sample.brand = "Tesla"; //adding element in object
sample.model = "Model 3";
console.log({sample});

/////  B] Accessing Properties

//1] Dot notation

console.log(mother.name); //correct method (Priya)
//console.log({mother.name}); //if use curly bracket give error (unexcepted token)

//2] bracket Notation

console.log(mother["age"]); // (33)
//console.log(mother[age]); // error age not define Key pair is string (if declaring number and access then ok)
console.log(mother[56]); //not given error but output will undefine because is not declare in object


///// C] Modification and Adding Properties in Object

//1] modification

mother.age=36;
console.log(mother.age);  //33 --> 36 modify

// 2] adding Properties in object

mother.occupation="House Wife";
console.log({mother}); // occpation is added

//console.log({mother,student});

// 3] Deleting Properties (use delete keyword)
delete student.section;
console.log({mother,student});
//console.log(student.section) // undefine output


/////---> Note :array also a Object type

/*  example:
Create a vehicle object that has following properties: 
number of seats, top speed, mileage, number of airbags */

let vehicle1=
{
    noOfSeats:7,
    topSpeed:180,
    milage:21,
    noOfAirbags:4,
};
console.log({vehical1: vehicle1});

/// update no. of seats = 4

vehicle1.noOfSeats=4
//console.log(vehicle1)

/// add properties colors=[]

vehicle1.colors=["Red","White","Black"];
//console.log({vehicle1})

/// delete noOfairbags property

delete vehicle1.noOfAirbags;
//console.log({vehicle1})
   
/////IMP start --->

/// Nested Object

vehicle1.address=
{
    addressline1:"Mahalunge Stadium",
    addressline2:"Baner",
    city:"Pune",
    state:"Maharastra"

};
console.log({vehicle:vehicle1}); // can create key when printing

/*Note :
  ?.  (optional Chaining) :
    operator use : safely access properties of an object without throwing an error
    if the property doesn’t exist. */

//console.log("city of vehical:",vehicle1?.city) //not present give undefine
console.log("city of vehical:",vehicle1?.address?.city);// give-> pune


/// accessing a property that is not yet defined 
console.log(vehicle1.name) ; //-> undefine

 //let add
 vehicle1.name="Scorpio";

 const vehicle2=
 {
  name: "Thar Mahindra",
  noOfSeats: 4,
  topSpeed: 180,
  mileage: 30,
  colors: ["white", "black"],
  address: {
    addressLine1: "Jatra Hotel",
    addressLine2: "Adgoan",
    city: "Nashik",
    state: "Maharashtra",
  },
 }

 /// array of objects

const vehicles=[vehicle1,vehicle2]
console.log(vehicles)

/*Question: print name of the vehicle and it's city from vehicles array*/

for (let i=0; i<vehicles.length; i++)
{
    console.log("Name of vechicle:",vehicles[i]?.name);
    console.log("Name of city of vehicle:",vehicles[i]?.address?.city);
    console.log("\n");
}

console.log("vehicle1.name", vehicle1.name);      // for quick revision of accesing element
console.log('vehicle1["name"]', vehicle1["name"]);

/* for ... in loop in object */
   // Notes->
   //1] for...in gives you keys (property names), not values directly.
   //2] To get values → use object[key].
console.log(vehicle1)

console.log("\nPrinting the vehicle1 object using for ... in loop\n");
for(key in vehicle1)   // for object
{
    console.log(key,":",vehicle1[key])
}

console.log("\n for..in loop (array of objects)\n");

for(key in vehicles)   // for array of objects
{
    console.log(key,":",vehicles[key])
}

/// new concept:

// 1] Object.Keys(objName)  --> gives array of keys of object

const arrOfkeys=Object.keys(vehicle2);
console.log({arrOfkeys});

const arr1OfKeys=Object.keys(vehicle2.address);  // for nested object
console.log("Keys Of Address of Vehicle2 :",arr1OfKeys);

// 2] Object.Values(objname) --> gives Values of Object 

const arrOfValues=Object.values(vehicle2);
console.log("array of Values of Vehicle2 :",arrOfValues);

const arr1Ofvalues=Object.values(vehicle2.address); // for nested objeect
console.log("values of Vehicle2 address:",arr1Ofvalues);


//// for ... of loop in arr of object 

console.log("\nprinting array of object using for loop")

for (value of vehicles)  
{
    console.log(value)
}

/* 
for (value of vehicle1)      // note work for object
{
    console.log(value)
} */

//* Change the value of city to Mumbai, if city is Pune using for ... of loop */ //-> for array of object

for (let vehicle of vehicles)
{
    if (vehicle?.address?.city == "Pune")  // optional chaining are used in 
    {
        vehicle.address.city="Mumbai"
    }
}
console.log(vehicles)


/// function in object
let vehicle3=
{
    name: "TATA HARRIER",
  noOfSeats: 7,
  topSpeed: 180,
  currentSpeed: 100,
  mileage: 20,
  colors: ["white", "black", "grey"],
  address: {
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "Maharashtra",
    },
isRuning: function()
    {
        if (this.currentSpeed>0)
        {
            console.log(this.name,"running at speed",this.currentSpeed)
        }
    }
}
console.log(vehicle3)
vehicle3.isRuning()

vehicle3.currentSpeed=0  // change current sppeed of vehicle
vehicle3.isRuning()

console.log(vehicle3["address"]["city"]) // using this we can select the object of object

// rough
const rough=Object.values(vehicle2.address.city);  
console.log("values of Vehicle2 address:",rough.join(""));// work but give output as array need join

let string1="ABC"
let temp=unsh
console.log(string1)