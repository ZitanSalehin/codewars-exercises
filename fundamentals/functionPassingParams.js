// 1.Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// 1st ans:
const greetingMsg=(guestName,owner)=>{
    if(guestName===owner) return 'Hello boss'
    else return 'Hello guest'
};
var guestName;
var owner; 
greetingMsg(guestName,owner);

// 2nd ans:
const greetingsMsg = (guestNames, owners) => (guestNames === owners) ? 'Hello boss' : 'Hello guest';

// 3rd ans:
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

// 4th ans:
function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
}
