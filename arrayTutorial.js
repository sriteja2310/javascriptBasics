//Array Declaration 
var ourArray = ["Sri", 25];

var myArray = ["candid", 24];

//Nested Array - when one of the array is one of the element in other array then its a nested array

var nestedArray = [["the universe", 42], ["everything", 101010]];

var empArray = [["Lecturer1", 1],["Lecturer", 2]];

//Access array with indexes

var numberArray = [50, 60,70];

var numberData = numberArray[0]; //access the element 50 which is at index 0

console.log(numberData);


//Modify arrays using indexes

numberArray[1] = 45; // now the numberArray is modified as [50, 45, 70] from [50, 60, 70]

console.log(numberArray);


//Nested-Multidimensional - access arrays in multidimensional or nested arrays 

var multidimensionalArray = [[1,2,3], [4,5,6], [7,8,9],[["sri", "rav", "anil"], 13, 14]];

var multidimensionalData = multidimensionalArray[3][0][0]; //first bracket to access 0th element in parent array, second barcket to access element nested 
console.log("Accessing nested element in a Multidimensional Array", multidimensionalData);

//Array push method -  inserts data at the end of the array

var pushArray = ["Sana","Mouni", "Rekha"];
pushArray.push("Nain", "Jennifer"); //push method inserts two elements to pushArray

console.log("Push Operation", pushArray);

//Array unshift method -  inserts data at the beginning of the array

var unshiftArray = ["UN1","UN2", "UN3"];
unshiftArray.unshift("UN4", "UN5"); //unshift method inserts two elements to unshiftArray

console.log("Unshift Operation " , unshiftArray);

//Array pop method - will remove last element from the array

var popArray = ["Rana","Nandu", "Joseph"];
popArray.pop(); //pop method removes the last element from the popArray

console.log("Pop Operation " , popArray); //last element Joseph will be removed


//Array shift method - removes first element from the array

var shiftArray = ["Tinytots","Candid", "St peters"];
shiftArray.shift();

console.log("Shift Operation", shiftArray); // first element Candid will be removed

//Shopping list Array example 

var shoppingList = [["cereal", 3], ["milk", 2],["banana", 3]];

