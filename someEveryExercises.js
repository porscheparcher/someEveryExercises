//hasOddNumber
function hasOddNumber(arr) {
    return arr.some(function(val) {
        if(val % 2 !== 0) return true;
    });
    return false;
}

//hasAZero
function hasAZero(num) {
    const strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] === '0') {
            return true;
        };
    };
    return false;
  }
  
//hasOnlyOddNumbers
function hasOnlyOddNumbers(arr) {
    return arr.every(function(num) {
        if (num % 2 !== 0) return true;
    });
    return false;
};

//hasNoDuplicates

function hasNoDuplicates(arr) {
    return arr.every(function(num, index) {
      return arr.indexOf(num) === index;
    });
  }

//hasCertainKey

function hasCertainKey(arr, key) {
    return arr.every(function(obj) {
        return key in obj;
    });
};

//hasCertainValue

function hasCertainValue(arr, key, value) {
    return arr.every(function(obj) {
        return obj[key] === value;
    });
};

