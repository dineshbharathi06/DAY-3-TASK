
// 1
console.log(10 > 5 && 20 > 15);


// 2
console.log(10 > 15 && 20 > 10);


// 3
console.log(10 > 20 || 15 > 10);


// 4
console.log(5 > 10 || 20 < 15);


// 5
console.log(!(10 > 5));


// 6
console.log(!(10 < 5));


// 7
let result7 = (10 > 5 && 20 > 15) || 5 > 10;
console.log(result7);


// 8
let result8 = (10 > 5 && 20 > 15) || !(5 > 10);
console.log(result8);


// 9
let age9 = 20;

console.log(
    age9 >= 18 ? "Eligible" : "Not Eligible"
);


// 10
let marks10 = 50;

console.log(
    marks10 >= 35 ? "Pass" : "Fail"
);


// 11
let number11 = 15;

console.log(
    number11 > 10 ? "Greater than 10" : "Not greater than 10"
);


// 12
let number12 = 8;

console.log(
    number12 % 2 === 0 ? "Even" : "Odd"
);


// 13
let salary13 = 40000;

console.log(
    salary13 > 30000 ? "Good Salary" : "Low Salary"
);


// 14
let firstName14 = "Dinesh";
let lastName14 = "Bharathi";
let city14 = "Chennai";

console.log(firstName14 + " " + lastName14 + " " + city14);


// 15
let name15 = "Dinesh";
let age15 = 25;

console.log(
    "My name is " + name15 + " and I am " + age15 + " years old."
);


// 16
let product16 = "Laptop";
let price16 = 50000;
let brand16 = "Dell";

console.log(
    "The product is " + product16 +
    ", price is " + price16 +
    " and brand is " + brand16
);


// 17
let name17 = "Dinesh";
let qualification17 = "BCA";
let company17 = "ABC Company";

console.log(
    `My name is ${name17}. I completed ${qualification17}. I work at ${company17}.`
);


// 18
let name18 = "Dinesh";
let age18 = 25;
let city18 = "Chennai";

console.log(
    `My name is ${name18}, I am ${age18} years old and I live in ${city18}.`
);


// 19
let result19 = "10" + 5;

console.log(result19);
console.log(typeof result19);


// 20
let result20 = 10 + 5;

console.log(result20);
console.log(typeof result20);


// 21
let result21 = 10 + true;

console.log(result21);
console.log(typeof result21);


// 22
let result22 = 10 + null;

console.log(result22);
console.log(typeof result22);


// 23
let result23 = "Hello" + true;

console.log(result23);
console.log(typeof result23);


// 24
let result24 = "Hello" + [1, 2, 3];

console.log(result24);
console.log(typeof result24);


// 25
let result25 = 10 + {};

console.log(result25);
console.log(typeof result25);


// 26
let expression1 = "10" + 20;
let expression2 = 10 + true;
let expression3 = 10 + null;

console.log(expression1, typeof expression1);
console.log(expression2, typeof expression2);
console.log(expression3, typeof expression3);


// 27
let result27 = Number("100");

console.log(result27);


// 28
let result28 = Number("25");

console.log(result28);
console.log(typeof result28);


// 29
console.log(Number(true));


// 30
console.log(Number(false));


// 31
console.log(Number(""));


// 32
console.log(Number(null));


// 33
console.log(Number(undefined));


// 34
console.log(Boolean("Hello"));


// 35
console.log(Boolean(""));


// 36
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));


// 37
let array37 = [1, 2, 3];

console.log(Boolean(array37));


// 38
let object38 = {
    name: "Dinesh"
};

console.log(Boolean(object38));


// 39
let age39 = 20;

if (age39 >= 18) {
    console.log("Eligible");
}


// 40
let age40 = 16;

if (age40 >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// 41
let marks41 = 70;

if (marks41 >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 42
let time42 = 15;

if (time42 >= 1 && time42 <= 6) {

    console.log("Early Morning");

} else if (time42 >= 7 && time42 <= 12) {

    console.log("Morning");

} else if (time42 >= 13 && time42 <= 17) {

    console.log("Afternoon");

} else if (time42 >= 18 && time42 <= 19) {

    console.log("Evening");

} else if (time42 >= 20 && time42 <= 24) {

    console.log("Night");

} else {

    console.log("Invalid Time");

}


// 43
let temperature43 = 30;

if (temperature43 > 35) {

    console.log("Hot");

} else if (temperature43 >= 20 && temperature43 <= 35) {

    console.log("Normal");

} else {

    console.log("Cold");

}


// 44
let age44 = 25;
let height44 = 175;
let weight44 = 70;

if (age44 >= 18) {

    if (height44 >= 170) {

        if (weight44 >= 60) {

            console.log("Eligible");

        }

    }

}


// 45
let trafficLight45 = "red";

switch (trafficLight45) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Traffic Light");

}


// 46
let day46 = "Monday";

switch (day46) {

    case "Monday":
        console.log("Monday");
        break;

    case "Tuesday":
        console.log("Tuesday");
        break;

    case "Wednesday":
        console.log("Wednesday");
        break;

    case "Thursday":
        console.log("Thursday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    case "Saturday":
        console.log("Saturday");
        break;

    case "Sunday":
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");

}


// 47
let choice47 = 2;

switch (choice47) {

    case 1:
        console.log("Start");
        break;

    case 2:
        console.log("Settings");
        break;

    case 3:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");

}


// 48
for (let i = 1; i <= 10; i++) {

    console.log(i);

}


// 49
let i49 = 10;

while (i49 >= 1) {

    console.log(i49);

    i49--;

}


// 50
let fruits50 = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

for (let fruit of fruits50) {

    console.log(fruit);

}


let person50 = {
    name: "Dinesh",
    role: "Developer",
    experience: 2
};

for (let key in person50) {

    console.log(key, person50[key]);

}
```
