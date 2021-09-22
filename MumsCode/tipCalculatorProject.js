//Tip Calculator Project
function tipCalculator(quality, total) {
    switch (quality) {
    case 'bad' : return total*0.05;
    break;
    case 'ok' : return total*0.15;
    break;
    case 'good' : return total *0.2;
    break;
    case 'excellent' : return total *0.3;
    break;
    default : return total*0.18;
  }
  }
  
  console.log(tipCalculator('good', 100)) //should return 20
  console.log(tipCalculator('amazing', 50)) //should return 20
  console.log(tipCalculator('bad', 100)) //should return 20
  console.log(tipCalculator('ok', 20000)) //should return 20
  