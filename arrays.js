// ARRAYS - Store multiple values in a variable
const numbers = [1,2,3,4,5];
const brands = ['audi', 'nike', 'tommy', 'babolat'];
console.log(numbers, brands);

// Get one value - Arrays start at 0
console.log(brands[1]);

// Add value
brands[4] = 'viceroy';

// Add value using push()
brands.push('netflix');

// Add to beginning
brands.unshift('apple');

// Remove last value
brands.pop();

// Check if array
console.log(Array.isArray(brands));

// Get index
console.log(brands.indexOf('tommy'));