// 1.Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

const greetingMsg=(guestName,owner)=>{
    if(guestName===owner) return 'Hello boss'
    else return 'Hello guest'
};
var guestName;
var owner; 
greetingMsg(guestName,owner);