//DOES NOT WORK
//First Attempt at Code Academy Random Meal Maker
//used alot of console.log to test the final version
//common errors I made were variable names like appetizer instead of appetizers and forgetting the , at the end of lines in the object
//final version is mealMakerProject.js

const menu = {
    _courses: {
      appetizers: [],//these need an _ at the start pf the name
      get appetizers() {},//I haven't returned anything
      set appetizers(appetizersIn) {},
      mains: [],
      get mains() {},
      set mains(mainsIn) {},
      desserts: [],
      get desserts() {},
      set desserts(dessertsIn) {}
    },
   get _courses() {//This should be get courses without an _
     return {
       appetizers: this.appetizers,
       mains: this.mains,
       desserts: this.desserts
     };
   },
   addDishToCourse: function(courseName, dishName, dishPrice){ //wrong syntax, dont need : or the word function
     const dish = {
       name: dishName,
       price: dishPrice,
     };
     this._courses[courseName].push(dish);
   },
   getRandomDishFromCourse: function(courseName) {//wrong syntax again
     let dishes = this._courses[courseName];
     let randomNumber = Math.floor(Math.random() * dishes.length);//haven't divided .length by 2 because the number is elements in the array not objects in the array and each object has 2 keys
     return dishes[randomNumber];
   },
   generateRandomMeal: function(){//syntax for function again
     const app = this.getRandomDishFromCourse('appetizers');
     const mai = this.getRandomDishFromCourse('mains');
     const dess = this.getRandomDishFromCourse('desserts');
     const totalPrice = appetizer.price + mains.price + desserts.price//not using the correct name for each object it should be app.name instead of appetizer.name
  
     return `Appetizer: ${appetizer.name} Main: ${mains.name} Dessert: ${desserts.price}. The cost of the meal will be ${totalPrice}.`//might work but in the final code I used string concatenation because this return line was error prone
   }
  }
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 5.00);
  menu.addDishToCourse('appetizers', 'Tomato Salad', 5.00);
  menu.addDishToCourse('appetizers', 'Cucumber Salad', 5.00);
  menu.addDishToCourse('mains', 'beef', 5.00);
  menu.addDishToCourse('mains', 'lamb', 5.00);
  menu.addDishToCourse('mains', 'chicken', 5.00);
  menu.addDishToCourse('desserts', 'Apple', 5.00);
  menu.addDishToCourse('desserts', 'Banana', 5.00);
  menu.addDishToCourse('desserts', 'Orange', 5.00);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);