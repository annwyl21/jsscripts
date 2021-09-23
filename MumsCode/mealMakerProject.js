//Code Academy Meal Maker Project - no conditions in setters yet

const menu = {
    _courses: {
      _appetizers: [],
      get appetizers () {
        return this._appetizers;
      },
      set appetizers (newStarter) {
      },
      _mains: [],
      get mains () {
        return this._mains;
      },
      set Mains (newMain) {
  
      },
      _desserts: [],
      get desserts () {
        return this._desserts;
      },
      set desserts (newPudding) {
  
      }
    },
    get courses () {
             return {
          appetizers: this._courses.appetizers,
          mains: this._courses.mains,
          desserts: this._courses.desserts,
        }
    },
    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
          name: dishName,
          price: dishPrice
        };
       this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      //returns an array from which an object is then selected randomly
        let dishes = this._courses[courseName];
        randomNumber = Math.floor(Math.random()*(courseName.length /2));
        return dishes[randomNumber];
    },
    generateRandomMeal() {
      //returns an object with a new name but with consistent key names that can be used to split up each array; name and price
      let starter = this.getRandomDishFromCourse('appetizers');
      let mainMeal = this.getRandomDishFromCourse('mains');
      let pudding = this.getRandomDishFromCourse('desserts');
      let cost = starter.price + mainMeal.price + pudding.price;
      //return 'text ' + starter.price;
      return 'Randomly Generated Meal: A starter of ' + starter.name + ' followed by a main course of ' + mainMeal.name + ' and finished with a dessert of ' + pudding.name + '. The total cost of this meal will be £' + cost + ', pay in cash or by card.'
    }
  };
  
  menu.addDishToCourse('appetizers', 'Ensaladilla Rusa', 5.00);
  menu.addDishToCourse('appetizers', 'Patatas Bravas', 5.00);
  menu.addDishToCourse('appetizers', 'Gazpacho', 5.00);
  menu.addDishToCourse('appetizers', 'Gambas a la Plancha', 5.00);
  menu.addDishToCourse('appetizers', 'Croquetas de Jamón Serrano', 5.00);
  
  menu.addDishToCourse('mains', 'Spiced Tortilla', 10.00);
  menu.addDishToCourse('mains', 'Roast Cod with Paella and Saffron', 15.00);
  menu.addDishToCourse('mains', 'Clam, Chorizo & White Bean Stew', 18.00);
  menu.addDishToCourse('mains', 'Spanish Chicken Pie', 10.00);
  menu.addDishToCourse('mains', 'Arroz al Horno', 11.00);
  
  menu.addDishToCourse('desserts', 'Churros and Chocolate', 8.00);
  menu.addDishToCourse('desserts', 'Sangria', 5.00);
  menu.addDishToCourse('desserts', 'Tarta de Santiago', 6.00);
  menu.addDishToCourse('desserts', 'Tocino del Cielo', 9.00);
  menu.addDishToCourse('desserts', 'Crema Catalana', 7.00);
  //console.log(menu.courses);
  let meal = menu.generateRandomMeal();
  console.log(meal);
  
  
  
  //referencing using this.
  //forgetting to add ,
  //forgeting to use strings with ''
  //forgetting to add an /s/ to a key name