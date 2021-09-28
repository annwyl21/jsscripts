//using .every and .sort on arrays of objects

function isTheDinnerVegan(ingredients) {
    // for (count=0; count<ingredients.length; count++) {
    //   let ingredient = ingredients[count];
    //   console.log(ingredient);
      // let item = ingredient.source;
      // console.log(item);
      //  if (ingredient.source !== 'plant') {
      //   return false;
      // } 
      function vegan(item) {
        return item.source === 'plant';
      };
      return ingredients.every(vegan);
   // }
    //return true;
  }
  
  
  const dinner = [
    {name: 'hamburger', source: 'meat'}, 
    {name: 'cheese', source: 'dairy'}, 
    {name: 'ketchup', source:'plant'}, 
    {name: 'bun', source: 'plant'}, 
    {name: 'dessert twinkies', source:'unknown'}
    ];
  console.log(isTheDinnerVegan(dinner));
  // Should print false
  
  const meal = [
    {name: 'arugula', source: 'plant'}, 
    {name: 'tomatoes', source: 'plant'}, 
    {name: 'lemon', source:'plant'}, 
    {name: 'olive oil', source: 'plant'}];
   console.log(isTheDinnerVegan(meal)); 
   // Should return true




   const speciesArray = [ 
    {speciesName:'shark', numTeeth:50}, 
    {speciesName:'dog', numTeeth:42}, 
    {speciesName:'alligator', numTeeth:80}, 
    {speciesName:'human', numTeeth:32}
    ];
  
  function sortSpeciesByTeeth(anyArray) {
    return anyArray.sort(function (objectInArray1, objectInArray2) {
      return objectInArray1.numTeeth - objectInArray2.numTeeth;
    });
  }
  
  console.log(sortSpeciesByTeeth(speciesArray))
  
  // Should print:
  // [ { speciesName: 'human', numTeeth: 32 },
  //   { speciesName: 'dog', numTeeth: 42 },
  //   { speciesName: 'shark', numTeeth: 50 },
  //   { speciesName: 'alligator', numTeeth: 80 } ]