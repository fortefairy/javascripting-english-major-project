// for loops and while loops

//let i;
//i = 1;
//while ( i < 4 ) {
//  
//  i = i + 1;
//}

//for (let i = 1; i < 4; i = i + 1 ) {
//    $("#response").append("<br />" + i);
//  }


//functions appending, if else

// let i;
// i = 1;
// $("#response").html('')
// while ( i < 4 ) {
//     if ( i % 2 == 0 ){
//         $("#response").append("<br />" + i + ' is even');
//     } else {
//         $("#response").append("<br />" + i + ' is odd');
//     }
//   i = i + 1;
// }


//functions, if/else

// let tipCalculator;
// tipCalculator = function(total, tipRate){
//     if(tipRate > 1){
//         tipRate = tipRate/100;
//     } else {
//         tipRate = tipRate;
//     }
//     tipAmount = total * tipRate;
//        $("#response").html("Your tip is $" + tipAmount);

// }

// tipCalculator(50.0, 20)

//arrays

// let arrayOfStrings, arrayOfNumbers, arrayMixed;
// arrayOfStrings = ["a", "b", "c"];
// arrayOfNumbers = [1, 2, 3];
// arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];

// $("#response").html(arrayOfStrings[2]);


//objects
// let myBurritoObject;
// myBurritoObject = {
//   tortilla: "wheat",
//   guacamole: true,
//   beans: "pinto",
//   habaneroSauceSquirts: 3
//   };
// // and let’s access a property
// $("#response").html(myBurritoObject["tortilla"]);


//dot notation
// let arrayOfStrings;
// arrayOfStrings = ["a", "b", "c"];
// $("#response").html(arrayOfStrings.length);

// let myHabaneroSauceSquirts, myBurritoObject;
// // First, define and assign a variable for how 
// // spicy the burrito is.
// myHabaneroSauceSquirts = 3;
// // Now assign the burrito object.
// myBurritoObject = {
//   tortilla: "wheat",
//   guacamole: true,
//   beans: "pinto",
//   // Make use of the variable above.
//   habaneroSauceSquirts: myHabaneroSauceSquirts,
//   // Use the variable again in a function.
//   spiciness: function(){
//     if (myHabaneroSauceSquirts > 0 ){
//       alert("This is a spicy burrito!");
//     } else {
//       alert("This is a mild burrito.");
//     }
//   }
// };
// $("#response").html("Your burrito has " +
//   myBurritoObject.habaneroSauceSquirts +
//   " squirts of habanero.");
// myBurritoObject.spiciness();



//Useful Methods
// let turtles, sortedTurtles, reversedTurtles, turtleNames;
// turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
// sortedTurtles = turtles.sort();
// // sortedTurtles is:
// // ["Donatello", "Leonardo", "Michelangelo", "Raphael"]
// reversedTurtles = turtles.reverse();
// // reversedTurtles is: 
// // ["Raphael", "Michelangelo", "Donatello", "Leonardo"]
// turtleNames = turtles.join(" ");
// // turtleNames is "Leonardo Donatello Raphael Michelangelo"
// turtles.push("Splinter");
// // turtles is now: 
// // ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"]
// turtles.pop();
// // back to ["Leonardo", "Donatello", "Raphael", "Michelangelo"]

// let string, firstLetter, stringLength;
// string = "This is a string.";
// // Strings have indices and lengths, just like arrays:
// firstLetter = string[0];
// // firstLetter is "T"
// stringLength = string.length;
// // stringLength is 17
// //
// // Strings also have methods, just like arrays:
// let upperCaseString, replacedString;
// upperCaseString = string.toUpperCase();
// // upperCaseString is "THIS IS A STRING."
// replacedString = string.replace("string", "pipe");
// // replacedString is "This is a pipe."

// let lastItem;
// lastItem = function(itemList){
//     itemIndex = itemList.length;
//         $("#response").html(itemIndex);

// }

// lastItem([1])


// let integerCheck;
// integerCheck = function(value){
//     value = parseInt(value)
//     if( Number.isInteger(value) === true ){
//         $("#response").html('This is an integer');
//     } else {
//         $("#response").html("This is not an integer");
//     }
// }

// userInput = prompt("Enter an integer", "Type your answer here.");


// integerCheck(userInput)


//iterating over the hard way

// let userString, upperCaseMinusE, upperCasedString;
// userString = prompt("What do you want to UPPeRCASe?");
// upperCaseMinusE = function(string){
//   let result;
//   result = ""; 
//   for ( let i = 0; i < string.length ; i = i + 1 ) {
//     let letter;
//     letter = string[i];
//     if ( letter === "e" ) {
//       // Change here.
//       result = result + letter;
//     } else {
//       // And change here.
//       result = result + letter.toUpperCase();
//     }
//   }
//   return result;
// };
// upperCasedString = upperCaseMinusE(userString);
// $("#response").html(upperCasedString);


//iterating the simpler way (must be an array)

// upperCaseMinusE = function(string){
//     let result, stringArray;
//     result = ""; 
//     // Since forEach() only works on arrays, we have 
//     // to convert the string to an array:
//     stringArray = string.split("");
//     // Now we call forEach() on stringArray:
//     stringArray.forEach(function(letter){
//       if ( letter === "e" ) {
//         result = result + letter;
//       } else {
//         result = result + letter.toUpperCase();
//       }
//     }) // Note the parenthesis!
//     return result;
//   };


  // dictionary array iteration this importantly creates a string rather than an array

// let leonardo, donatello, raphael, michelangelo, turtles, weapons;
// leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
// donatello = {name: "Donatello", color: "purple", weapon: "bo"};
// raphael = {name: "Raphael", color: "red", weapon: "sai"};
// michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
// turtles = [leonardo, donatello, raphael, michelangelo];
// weapons = ""; // a list of weapons.

// turtles.forEach(function(turtle){
//     weapons = weapons + turtle.weapon + " ";
//   })


// $("#response").html(weapons);


//iterating over an array to create another array which we then turn into a string

// let leonardo, donatello, raphael, michelangelo, turtles, weapons;
// leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
// donatello = {name: "Donatello", color: "purple", weapon: "bo"};
// raphael = {name: "Raphael", color: "red", weapon: "sai"};
// michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
// turtles = [leonardo, donatello, raphael, michelangelo];
// weapons = turtles.map(function(turtle){
//     return turtle.weapon;
//   }).sort()
  
//   weapons[weapons.length - 1] =  "and " + weapons[weapons.length -1]

//   weapons = weapons.join(", ");
//   // weapons is now "bo, katana, nunchaku, sai". Sorted, with commas.
//   $("#response").html(weapons);


// //filtering with iteration

//   let names, namesWithO;
//   names = turtles.map(function(turtle){
//     return turtle.name;
//   }).sort();
//   namesWithO = names.filter(function(name){
//     return name.includes("o");
//   }).join(", ");
//   $("#response").html(namesWithO);


// let numlist, doubleNumber, 
// numList = [1,2,3]

// doubleNumber= numList.map(function(num){
//     doubleNum = num *2;
//     return doubleNum;
// }).join(", ");

// $("#response").html(doubleNumber)
