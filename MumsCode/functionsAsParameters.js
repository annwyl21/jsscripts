//copied example for Codecademy
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  //coding a function that has a function as a parameter (dont use the () because we aren't using the result of the function in the paramnter)
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();//here is where we use the () so we can run the function in the code
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  //renaming a function with a very long name
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
  
  const checkConsistentOutput = (func, val) => {
      let firstTry = func(val);
      let secondTry = func(val);
      if (firstTry === secondTry) {
          return firstTry
      } else {
          return 'This function returned inconsistent results'
      }
  };
  
  checkConsistentOutput(addTwo, 10);//the parameters here are the function name 'add two' and the number parameter it requires '10'