/*strings are immutable - they cannot be altered once they are created but this doesnt not mean 
string value cannot be changed but the individual characters in a string cannot to changed. 
Example: myStr = "Jello World" lets say the first letter of the string cannot be changed 
by accesing one character J instead of H but the entire string value can be changed 
i.e we can changed from jello world to Hello World*/

var myStr = "Jello World";

myStr[0] = "H";

console.log(myStr); //prints Jello World since string is immutable

var myImmutableStr = "Jello World";

myImmutableStr = "Hello World";

console.log(myImmutableStr); //prints Hello World since entire string value is changed not just the character