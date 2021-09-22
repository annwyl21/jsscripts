const menu = {
    _courses: {
      appetizers: [],
      get appetizers() {},
      set appetizers(appetizersIn) {},
      mains: [],
      get mains() {},
      set mains(mainsIn) {},
      desserts: [],
      get desserts() {},
      set desserts(dessertsIn) {}
    },
   get _courses() {
     return {
       appetizers: this.appetizers,
       mains: this.mains,
       desserts: this.desserts
     };
   },
   addDishToCourse: function(courseName, dishName, dishPrice){
     const dish = {
       name: dishName,
       price: dishPrice,
     };
     this._courses[courseName].push(dish);
   },
   getRandomDishFromCourse: function(courseName) {
     let dishes = this._courses[courseName];
     let randomNumber = Math.floor(Math.random() * dishes.length);
     return dishes[randomNumber];
   },
   generateRandomMeal: function(){
     const app = this.getRandomDishFromCourse('appetizers');
     const mai = this.getRandomDishFromCourse('mains');
     const dess = this.getRandomDishFromCourse('desserts');
     const totalPrice = appetizer.price + mains.price + desserts.price
  
     return `Appetizer: ${appetizer.name} Main: ${mains.name} Dessert: ${desserts.price}. The cost of the meal will be ${totalPrice}.`
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