function Map(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
}
  
function Filter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}
  

function capitalizeList(names) {
    return Map(names, function(name) {
      return name.toUpperCase();
    });
}
  

function filterNames(names) {
    return Filter(names, function(name) {
      return /^[A-Z].{0,4}$/.test(name);
    });
}
  

function multiplesOf5GreaterThan20(numbers) {
    return Filter(numbers, function(num) {
      return num > 20 && num % 5 === 0;
    });
}