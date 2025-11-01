
//------------------------------------------------------ map ()  --> key value pair  -----------------------------------------------------

let marks= new Map()  // declaration

// to add element set

marks.set("Rahul",90);
marks.set("amit",65);
marks.set("Priya",75);

// to represent using for of loop
for (let [name,score] of marks)
{
    console.log(name,":",score)
}

/* //using normal for loop
for(let i=0; i<marks.size; i++)  // does not have length property use .size
{
   // console.log(marks[i])   // not index based so give undefine 
} 
*/


/* 
///   arr.map()    --> (this is method diff from Map it is Data structure) this .map work on array not on Map data strucure remember

let arr1=[1,2,3]

let double= arr1.map(function (x){
return x*2                                // need return if use {}
}) 
console.log("using traditional function:",double)

let double2=arr1.map((x)=> x*2)  // using arrow function
console.log("using arrow function :",double2)
 */


// some understanding about map

arr1=[1,2,3]

 /*let myMap=new Map(arr1)
console.log(myMap.has(1)) */       // --> give TypeError: Iterator value 1 is not an entry object


// arr must be key - value pair in map

arr1=[["one",1],["two",2]]
let myMap=new Map(arr1)  // valid array gives key value pair

console.log(myMap)  // output : Map(2) { 'one' => 1, 'two' => 2 }


//////////////////////-> method in Map


/* Case Study: Student Marks Management
Let’s say you want to store and manage student marks using a Map. */


let studentMarks = new Map ([ ["Vaibhav", 95], ["Amit", 90], ["Arnav", 78]]);
console.log(studentMarks)

// 1] set    --> use to add new element in map

studentMarks.set("Adi",96)
console.log(studentMarks)  // add adi => 96

studentMarks.set("Vaibhav",97)
console.log(studentMarks)  // update value 95 to 97


// get  ---> inser the key and get value of key

console.log(studentMarks.get("Vaibhav"))  //--> 97
console.log(studentMarks.get("adad")) // -> undefine
console.log(studentMarks.get(9)) //-> undefine

// has  ---> check key present in map or not

console.log(studentMarks.has("Vaibhav")) // true
console.log(studentMarks.has("Vv"))   // false

// delete  --> delete element from map
studentMarks.delete("Arnav")
console.log(studentMarks)  //-> Map(3) { 'Vaibhav' => 97, 'Amit' => 90, 'Adi' => 96 }

// .size   --> same as length give size of Map

console.log(studentMarks.size)  //->3

// Loop through the Map  for .. of

for (let [name, marks] of studentMarks) {
  console.log(name, "scored", marks);
}

// using .forEach()

/* 🔹 The .forEach() callback in Map
The signature of the callback is:
map.forEach((value, key, map) => { ... })
Notice carefully:
    First parameter = value
    Second parameter = key
    Third (optional) = the Map itself */

studentMarks.forEach((mark,name)=>   // can do without arrow function
    {console.log(name,mark)})

//clear()  --> Clear all entries

studentMarks.clear()
console.log(studentMarks) // Map(0) {}
console.log(studentMarks.size) //0


// ------------------------------------------------- Set () ---------------------------------------------------------------------