 // Array and arrays methods.....


 let actors = [" Marlon Brando" , " Raj kapoor" , "Alpacino" , "Robert di nero"];
 console.log(actors);
  console.log(actors.length);
  console.log(typeof actors);


  // Array Indices....
  console.log(actors[1]);

  // Looping over an array...


  // for loop

  for (let inx = 0; inx<actors.length ; inx++){
    console.log(actors[inx]);
  }

  // for of 
  for(let el of actors){
    console.log([el])
  }



  // practice sum.... calcualting average from te array of 5 students marks 

 const marks = [91,99,98,97,96];
 let sum = 0;

 for (let i = 0; i<marks.length; i++){
    sum  = sum + marks[i];
 }
 const average = sum/marks.length;
 console.log("Average  marks", average);



 /* 2nd sum 5 items are given in an array and on each 10% discount is there
   so calculate the price and store them in array after removing the discount...*/


   const prices= [100,200,300,400,500];
   for (let i=0; i<prices.length;i++){
    let discount = (prices[i]*10)/100;
    prices[i] = prices[i] - discount;
   }
   console.log("prices after adding discount", prices);

   // learning push method....


   let animal = ["lion","Tiger","Giraffe","Leapord"];
   console.log(animal.push("Jaguar"));
   console.log(animal);

   // adding/removing methods.........
//push ,pop, shift , unshift......

// pop - removes element from last
console.log(animal.pop());

// push -  Add element in last...
console.log(animal.push("Rinho"));
console.log(animal);

// unshift - add element at the start of array

console.log(animal.unshift('Blackbuck'));
console.log(animal);

// shift - remove element from the start of the array...

console.log(animal.shift());


// Transforming arrays....
//Method	Description
//map()	   Returns a new array by applying a function

const numbers = [10,20,30,40,50];
const double = numbers.map(num=>num*2);
console.log(double);

function triple(x){
  return x*3;
}

const output=numbers.map(triple);
console.log(output);

const names=['manish','vishal','saurav','chandan','saurav sen'];
const capital=names.map(name=>
  name
  .split(' ')
  .map(word=>word.charAt(0).toUpperCase()+ word.slice(1))
  .join(' ')

);
console.log(capital);

//filter()	Filters array based on a condition

const digit=[1,2,3,4,5,5,6,7,8,];
const filter=digit.filter(function(x){
 return  x*3
});
console.log(filter);

const start=names.filter(letter=>letter.startsWith('m'));
console.log(start);

//reduce()	Reduces array to a single value

const bunch = [10,20,30,40,50];
const add=bunch.reduce(function(acc,curr){
  acc=acc+curr;
  return acc;
},0);
console.log(add);






// calculating a array sum using filter.....












//forEach()	Executes a function on each element (no return)

