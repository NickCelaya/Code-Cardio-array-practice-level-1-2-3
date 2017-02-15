//Code Cardio lvl 1 arrays

//1 Return the first element in the array

function first(arr) {
  return arr[0];

}


//2 Return the length of the array being passed in


function length(arr) {

  var lengthCount = arr.length;

   return lengthCount;
}


// 3 Return the last item in the array


function last(arr) {

    var lastItem = arr.length -1;

    return lastItem;
}


// 4 Add number to the end of the array

function addItem(array, number) {
  array.push(number);
  return array;

}


// 5 Remove the last element in the array

function removeLast(array) {

  array.pop();

  return array;
}


// 6 Remove the first element in the array


function removeFirst(array){
 	array.shift();

    return array;
}
