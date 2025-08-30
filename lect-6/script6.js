// precesence an associativity example

let c= 3*4+30/6*5**2;
console.log(c);
const y= ("123"+1)*2**2-21/7;
console.log(y);

const z="123"+5**5/25**2/5;
console.log(z);

/* ============ Conditions ======== */

//if...else

let num=10;

if (num % 2 == 0)
    {
        console.log("even");

    }
else
    {
        console.log("Odd");

    };

let age=16;

if (age<18)
{
    console.log("not Eligible to Voting");

}
else
{
    console.log("Eligible to Voting");
};
let number=22

if ((number/2)%2 == 0)
{
    console.log(" Half of number is Even");

}
else
{
    console.log("Half of number is not Even");
};

//Note :
// 1] if no need of else we also write on if condition

const a="18"
let b=18
    d="18";
if (a===b)
{
    console.log("both a and b same value and type");

}
else
{
    console.log("False both a and b has not same value or type ");
};
if(a===d)
{
    console.log("both a and d same value and Type ");
}

// Q. Grading System (if... else if.. else)

let score=35;

if (score>=80 && score <= 100)
{
    console.log("A Class Grade");

}
else if (score>=60 && score<80)
{
    console.log("B Class Grade");
}

else if (score>=35 && score<60)

{
    console.log("C Class Grade");

}
else 
{
    console.log("Fail");
};
age=21;
gender= "F";

//using Nested Loop
if (age >= 18)
{
    if(gender=="M")
    {
        console.log("MALE Candidate");
    }
    if(gender=="F")
    {
        console.log("FEMALE Candidate");
    }
};

/* ========== Logical Operator ================== */

// For age
if (age>=18 && gender == "F")
{
    console.log("FEMALE ");

}
else if (age>=18 && gender == "M")
{
    console.log("MALE");
};

// Lucky Draw winner
lNumber=11;
if (lNumber == 11 || lNumber == 101)
{
    console.log("Congratulation ! Winner");

}
else 
{
    console.log("Better Luck Next Time !");
};

// subscribtion
log_in=true;
user_sub=true;

if (log_in)
    {
        if (user_sub)
            {
                console.log("Premium User");

            }
        else
        {
            console.log("Normal User");
        };
    }
else
{
    console.log("user is not log in");
};

// use of != operator

const m = 18;

if (m != 17)
{
    console.log("Good Number");
}
else
{
    console.log("Bad Number");
}

// Check Palindrome number for 3 digit number

let p = 202;

let first = Math.floor(p / 100);   // first digit
let last = p % 10;                 // last digit

if (first === last) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// imp Ceil and Floor
let n=11.01;
console.log(Math.floor(n))
console.log(Math.ceil(n))

//check int and float
let Y=12.01
if (Math.floor(Y)==Y)
{
    console.log("integer");
}
else
{
    console.log("float");

};

//check which one greater using ? (ternary Operator)
let num1 = 10;
let num2 = 12.5;
let final = (num1 > num2) ? num1 : num2;

console.log("c is:", final);
   /* note:
    condition → The expression we want to test (e.g., num1 > num2).

    ? → If the condition is true, it picks the first value.

    : → If the condition is false, it picks the second value.
    */

    // ==============Practice============================= 

    let num5;
    console.log(num5);
        // undefined

    //console.log(num6);
    //let num6; //ReferenceError: Cannot access 'num6' before initialization

    //const num7; SyntaxError: Missing initializer in const declaration
    
    // imp note in arithmetic operstion " " conider as 0;
    
   
