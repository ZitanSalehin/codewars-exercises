// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// -------------------------------
// 1st solutiion
function likes(names) {

if(names.length===0) return "array is empty";
if(names.length===1) return `${names[0]} likes this`;
if(names.length===2) return `${names[0]} and ${names[1]} likes this`;
if(names.length===3) return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
else return `${names[0]}, ${names[1]} and ${names.splice(2,names.length).length} other likes this`;
};

let names=["Alex", "John", "Peter", "Valkemerry", "galagan"];
console.log(likes(names));

// 2nd solution
function likesStringGenerator(names){
    const length = names.length;
    switch(length){
        case 0:
        return "no one likes this";
        case 1:
        return `${names[0]} likes this`;
        case 2:
        return `${names[0]} and ${names[1]} like this`;
        case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
        return `${names[0]}, ${names[1]} and ${length - 2} other like this`
    }
}
console.log(likesStringGenerator([]));
console.log(likesStringGenerator(["Peter"]));
console.log(likesStringGenerator(["Peter", "Alex"]));
console.log(likesStringGenerator(["Max", "John", "Mark"]));
console.log(likesStringGenerator(["Max", "John", "Mark", "Max"]));
console.log(likesStringGenerator(["Max", "John", "Mark", "Max", "Perry"]));


// another
// function likes(names) {
//   return {
//     0: 'no one likes this',
//     1: `${names[0]} likes this`, 
//     2: `${names[0]} and ${names[1]} like this`, 
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//   }[Math.min(4, names.length)]
<<<<<<< HEAD
// }


// clever solution
function likesProblem(names) {
    console.log([Math.min(4, names.length)]);
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
  
}

console.log(likesProblem([]));
console.log(likesProblem(["Peter"]));
console.log(likesProblem(["James","Adams"]));
console.log(likesProblem(["Williams","Hazel","Anthony"]));
console.log(likesProblem(["Daniel","John","Doe","Carter"]));
console.log(likesProblem(["Joseph","Robert","Michael","David","daisy","Gomez","Daniel"]));

// output
// [ 0 ]
// no one likes this
// [ 1 ]
// Peter likes this
// [ 2 ]
// James and Adams like this
// [ 3 ]
// Williams, Hazel and Anthony like this
// [ 4 ]
// Daniel, John and 2 others like this
// [ 4 ]
// Joseph, Robert and 5 others like this
=======
// }
>>>>>>> 635f9d0ca5a09a5678feb3c281d1bb2f394f02a8
