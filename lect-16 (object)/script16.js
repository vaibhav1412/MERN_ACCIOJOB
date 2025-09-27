//--------------------------------------------Object -----------------------------------------------------------------------

const motherName= "Priya Singh";
let motherAge =32;
let motheraAddres= "Baner Pune";

const studentName="Pratik Patil";
let studentAge=15;
let studentAdress="Viman Nagar Pune";
const studentGender="Male";



let student=
{
name:"Pratik Patil",
age:15,
adress:"Viman Nagar Pune",
gender:"Male"

};

let mother=
{
name:"Priya Singh",
age:32,
adress:"Baner Pune",

}

console.log(student,mother)

// for add new element
mother.occupation="HouseWife";
mother.age=34;  //updation
console.log(mother)

let vehicle1={
    name:"TATA",
    numofSeats : 4,
    topSpeed : 180,
    milage : "20 km/liter",
    airbags : 2
}
console.log(vehicle1)

vehicle1.colors=["white","black","red"] //adding array
delete vehicle1.airbags;    // element deletion
console.log(vehicle1)
console.log({vehical1: vehicle1})

vehicle1.adress={
    adressline1:"mahalunge",
    adressline2:"near balewadi stadium",
    city:"Pune"
}
console.log({vehicle1: vehicle1})

//only need city
console.log(vehicle1.adress.city)


// array of object
let vehicle2={
    name:"Scorpio",
    numofSeats : 4,
    topSpeed : 180,
    milage : "20 km/liter",
    airbags : 2
}
vehicle2.adress={
    
    adressline1:"kaviratn ",
    adressline2:"Jatra Hotel",
    city:"nashik"
}

const vehicles=[vehicle1,vehicle2];
console.log({vehical: vehicles})

for (let i=0; i<vehicles.length; i++)
{
    console.log("\nName of Vehicle:",vehicles[i]?.name," \nAdress:",vehicles[i]?.adress?.city)   //optional chainig ?
}

/* for .. in loop */
console.log("\nprintin key value of vehicle1 using for in loop:\n")
for (let key in vehicle1)
{
    console.log(key+" :"+ vehicle1[key])
}

/* Objects.keys(objName)*/
console.log("\n Object.keys(objname):")
const vehicalObjectKeys =Object.keys(vehicle1);
const adressObjKeys=Object.keys(vehicle1.adress);
console.log({vehicalObjectKeys,adressObjKeys});  // create arry of Keys

/* Object.values(objname)*/
console.log("\n Object.values(objname):")
const vehicalObjectValues =Object.values(vehicle1);
const adressObjValues=Object.values(vehicle1.adress);
console.log({vehicalObjectValues,adressObjValues});

/* for ... of loop in array of objects */
console.log("\nprintin value of vehicles using for ... of loop:\n")
for (let value of vehicles)
{
    console.log(value)
}

// Question:
console.log("\n Question ")
for (let v of vehicles)
{
    if (v?.adress?.city =="pune")
    {
        v.adress.city="Mumbai"
    }
}
console.log(vehicles)

//this keyword lecture repeat see

//  H.W. project  : Resume management System 
