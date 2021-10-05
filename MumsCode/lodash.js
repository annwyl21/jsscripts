const _ = {

  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

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
  },

  words(string){
    let words = string.split(' ')
    return words
  },

  pad(string, length){
    if(length <= string.length){
      return string;
    };
      let startPaddingLength = Math.floor((length-string.length)/2);
      let endPaddingLength = length - string.length - startPaddingLength;
      let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
  },

  has(object, key){
    let hasValue = object[key];
    if(hasValue != undefined){
      return true;
    }else{
      return false;
    }
    return hasValue;
  },

  invert(object){
    let invertedObject = {};
    for(let key in object){
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },

  findKey(object, predicate){
    for(let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
            if(predicateReturnValue){
        return key;
      }
      undefined
        return undefined
    }
  },

    drop(array, number){
    let droppedArray = [];
    if(!number){
      number=1;
    }
    for (count=number; count<array.length; count++){
      droppedArray.push(array[count]);
    }
    return droppedArray;
  },

  dropWhile(array, predicate){
    const cb = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size=1){
    let arrayChunks = [];
    for (count=0; count<array.length; count+=size){
      let arrayChunk = array.slice(count, count+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }

}