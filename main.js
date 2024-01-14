// 1-masala

// let obj = {a: 1, b: 2};
// let {a, b} = obj;

// console.log(a); 
// console.log(b); 

// 2-masala

// function ortaElementlarniAjratibOlish(massiv) {
//     var ortaIndex = Math.floor(massiv.length / 2);
//     var ortaElementlar = [];
 
//     if (massiv.length % 2 === 0) {
//        ortaElementlar.push(massiv[ortaIndex - 1]);
//        ortaElementlar.push(massiv[ortaIndex]);
//     } else {
//        ortaElementlar.push(massiv[ortaIndex]);
//     }
 
//     return ortaElementlar;
//  }
 
//  var uzunlik = prompt("Massiv uzunligini kiriting: ");
//  var massiv = [];
 
//  for (var i = 0; i < uzunlik; i++) {
//     var element = prompt("Massiv elementini kiriting: ");
//     massiv.push(element);
//  }
 
//  var ortaElementlar = ortaElementlarniAjratibOlish(massiv);
 
//  console.log("O'rta element(lar): " + ortaElementlar.join(", "));
 
// 3-masala

// let arr = [1, 2, 3, 4, 5];
// let [first, second, ...rest] = arr;
// let arr1 = [first, second];
// let arr2 = rest;

// console.log(arr1);
// console.log(arr2); 

// 4-masala

// const person = { name: 'John', age: 30 };

// const { name, age } = person;

// console.log(name); 
// console.log(age);

// 5-masala

// const person = { name: 'John', age: 30 };

// const { name, age, gender = 'erkak', profession = 'supreme' } = person;

// console.log(name); 
// console.log(age);
// console.log(gender); 
// console.log(profession);

// 6-masala

// let arr = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
// let [obj1, obj2] = arr;

// console.log(obj1); 
// console.log(obj2); 


// 7-masala

// function printFullName({ firstName, lastName }) {
//     console.log(firstName + ' ' + lastName);
//   }
  
//   function fullName({ name: { first, last } }) {
//     printFullName({ firstName: first, lastName: last });
//   }
  
//   fullName({ name: { first: 'John', last: 'Doe' } }); 
  