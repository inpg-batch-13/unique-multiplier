function multiply(arr) {
  var total = [1]
  for (var i = 0; i < arr.length; i++) {
    
    total =  total * arr[i]
  }

  return total
 
}

function uniqueMultiplier(arr) {
  var total = []
  for (var i = 0; i < arr.length; i++) {
    total.push (multiply(arr)/arr[i])
  }

  return total
  
}

// TEST CASES
console.log(uniqueMultiplier([2, 4, 6])); // [24, 12, 8]
console.log(uniqueMultiplier([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(uniqueMultiplier([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(uniqueMultiplier([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(uniqueMultiplier([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]