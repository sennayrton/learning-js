// OBJECT LITERALS
const person = {
    firstName: 'Sergio',
    age: 30,
    hobbies: ['technology', 'cars', 'sports'],
    address: {
      street: '344 Main st',
      city: 'Madrid',
      state: 'MA'
    }
  }
  
  // Get single value
  console.log(person.name)
  
  // Get array value
  console.log(person.hobbies[2]);
  
  // Get embedded object
  console.log(person.address.city);
  
  // Add property
  person.email = 'sergio@gmail.com';
  