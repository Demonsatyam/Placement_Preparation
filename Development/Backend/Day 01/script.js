/*

Day 1: Basic fundamentals of JavaScript
- arrays and objects
- functions return
- async js coding

*/

// var arr = [1, 2, 3, 4, 5];

// forEach map filter find indexOf

// arr.forEach(function(val) {
//     console.log("ForEach:", val + 2);
// });

// var newArr = arr.map(function(val){
//     // return 2;
//     return val + 2;
// })
// console.log("Map:", newArr);

// var filteredArr = arr.filter(function(val){
//     return val > 5;
// })
// console.log("Filter:", filteredArr);

// var foundVal = arr.find(function(val){
//     return val > 3;
// })
// console.log("Find:", foundVal);

// var foundIndex = arr.findIndex(function(val){
//     return val;
// })
// console.log("IndexOf:", foundIndex);
// console.log(arr.indexOf(3));


// OBJECTS

//  {} -> blank object, an object is key-value pair

// var obj = {
//     name: "Satyam",
//     age: 24,
//     isEmployed: false,
// }
// console.log("Object:", obj);
// console.log(obj['name']);
// console.log(obj.age);

// Till now we can change our object values
// but if we use Object.freeze() method then we cannot change our object values

// Object.freeze(obj);
// obj.name = "John"; 
// This will not change the name property
// console.log("After freeze:", obj);
// console.log(obj.name);


// FUNCTIONS

// In js, functions are object, whenever you check the type of function it will return as 'function'
// But if you check its length it will return the number of parameters it takes

// function add(a, b){
//     return a + b;
// }

// console.log(add.length);



// ASYNCHRONOUS (async)
// there is no necessity to use async to run await
// var blob = await fetch(`https://randomuser.me/api/`);
// var response = await blob.json();
// console.log("Async Await:", response);

// line by line code chale isey kahte hain synchronous code
// jo bhi code async nature ka ho, usey side stack mein bhej do and agle code 
// ko chlao jo bhi sync nature ka ho, jab bhi sara sync code chl jaye tb check kro a
// sync code complete hua ki nhi and agr woh complete hua ho to use main stack mein le aao and chlao


// async function abcd(){
//     var blob = await fetch(`https://randomuser.me/api/`);
//     var ans = await blob.json()
//     console.log(ans.results[0].name);
    
// }

// abcd();

// console.log(abcd.length);




