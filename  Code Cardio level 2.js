// Code Cardio Arrays level 2

// 1 Push each index onto the numbers array


function maker() {
    var numbers = [];
    for(var i =0; i <= 25; i++) {
       numbers.push(i);
    }
    return numbers;
}



// 2 Fill the numbers array with numbers 0 to 31, then returns the array.

var b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

function count31() {
    var numbers = [];
    for(var i = 0; i <=31; i++){
    	numbers.push(i);
    }
    console.log(numbers);
    return numbers;
}
count31(b);


// 3 Below we have a function that will loop over an array in reverse. What you need to do is add the index to the newArray on every iteration



function backWards(arr) {
  var newArray = [];
     for (var i = arr.length - 1; i >= 0; i--) {

        newArray.push(i);
     }
  return newArray;
 }


 // 4 Below we have a function called 'findInArray' that takes in two parameters, the first representing the array to be searched and the second representing the value to be searched for. Return true if the array has the value

function findInArray(arr,value) {
    for(var i = 0; i < arr.length; i++){
    	if(arr[i] === value){
    		return true;
    	}
    }
}



// 5 Create a for loop that adds 10 to each item in an array. Assume that all the items in the array are integersfunction addTen(arr) {


var addTen = function(arr){
	var newArr =[];
  for(var i = 0; i < arr.length; i++){
  	var ten = arr[i] + 10;
  	newArr.push(ten);
  } return newArr;

};


// 6 This problem is the same as the previous problem, the only difference is that we have both strings and integers in our numbers array. You will need to parse the strings into integers before you add ten.

function addTen(arr) {
    newArr = [];

    for(var i = 0; i < arr.length; i++) {

      var newItem = Number(arr[i]) + 10;
      // newItem += 10;
        newArr.push(newItem);
    }

    return newArr;
}

//// another way to accomplish #6.

function addTen(arr) {
    newArr = [];

    for(var i = 0; i < arr.length; i++) {

      var newItem = parseInt(arr[i], 10) + 10;
				// newItem += 10

        newArr.push(newItem);
    }

    return newArr;
}
