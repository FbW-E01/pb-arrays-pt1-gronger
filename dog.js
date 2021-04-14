// # Programming Basics: Arrays and Array Methods

// These exercises are designed for practicing arrays and array methods. **You may need to look up some methods to complete these tasks.** Print each result to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = ["Cologne", "Warsaw", "Barcelona", "Porto"];
const moreEuroCities = euroCities[1];
console.log(euroCities);
console.log(moreEuroCities);

// 2. Change the first item in the array to "Berlin".

const newCity = "Berlin";
euroCities[0] = newCity;
console.log(euroCities);

// 3. Print the length of the array "euroCities".

console.log(euroCities.length);

// 4. Remove the last item of the array "euroCities". 

const RemovedLastItem = euroCities.pop();
console.log(RemovedLastItem);
console.log(euroCities);

// 5. Use an array method to add "Budapest" to the euroCities array. 

euroCities.push("Budapest");
console.log(euroCities);

// 6. **Bonus**: Remove the second and third items from the euroCities array. 

const SecondAndThirdItemsRemoved = euroCities.splice(1, 2);
console.log(SecondAndThirdItemsRemoved);
console.log(euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Seoul", "Tokyo", "Beijing", "Hong Kong", "Taipei"];
console.log(asianCities);

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  

const storedItemsFromPrevVariable = asianCities.slice(1, 4);
console.log(storedItemsFromPrevVariable);
console.log(asianCities);

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  

let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 10. Reverse the order of worldCities.

worldCities.reverse();
console.log(worldCities);

/////// IS this OKAY ? Or should I do worldCities = worldCities.reverse()? The way I did it worked though

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 

worldCities.splice(-5, 1, "Toronto");
console.log(worldCities);


// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(-6, 0, "Washington");
console.log(worldCities);


// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh" 


console.log(worldCities.toString());

// **Bonus**

// 1. Write a program to reverse the string: "Hello World". 


// const stringToReverse = "Hello World!"
// const reversedString = stringToReverse.reverse();
// console.log(reversedString);

// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.

const movieCharacters = ["Clarice Starling", "Hannibal Lector", "Gandalf the Grey", "Saruman the White", "Voldemort"];

// 2. Make an array of your parents' names.

const parentsNames = ["Judith Grainger", "Gary Grainger"];

// 3. Combine these two arrays.

let manyPeople = movieCharacters.concat(parentsNames);
console.log(manyPeople);

// 4. Add your pets' names.

const petsNames = ["Fluffy", "Clover", "Flopsy"];
manyPeople.concat(petsNames);
console.log(manyPeople);

// 5. Reverse the order of the array.
// 6. Access one of your parents' names.
// 7. Update the name of one of your parents. 