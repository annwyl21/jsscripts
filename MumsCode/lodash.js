const _ = {

    clamp(number, lower, upper){
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },//node test/clamp.js
  
    inRange(number, start, end){
      if(end === undefined){
        end = start
        start = 0
      } if(start>end){
        let temp = end
        end = start
        start = temp
      }
      let isInRange = start <= number && number < end
      return isInRange;
    },//node test/in-range.js
  
    words(string){
      let words = string.split(' ')
      return words
    },//node test/words.js
  
    pad(string, length){
      if(length <= string.length){
        return string;
      };
        let startPaddingLength = Math.floor((length-string.length)/2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },//node test/pad.js
  
  };