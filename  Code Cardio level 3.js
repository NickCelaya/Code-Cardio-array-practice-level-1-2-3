// Code Cardio Arrays level 3

// 1 Imagine a world where you have an array of user objects, and you need to delete one of those users. Inside your if statement, remove the object from the array of objects.

function deleteUser(array, property, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][property] === value) {
            array.splice(i,1);

        }
    }
   return array;
}

// 2 Inside your if statement, update the user's email property to the newEmail being passed in.

function updateUserEmail(array, key, value, newEmail) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][key] === value) {
          array[i][key] = newEmail;


        }
    }
    return array;
}



// 3 On each iteration, check the array index for a property that is equal to the value being passed in. If that condition is met, change the object's password property value to equal newPassword.

function changePassword(array, key, value, newPassword) {
    for(var i = 0; i < array.length; i++ ) {
        if(array[i][key] === value){
        	array[i][key] = newPassword;
        }

    }
    return array;

}



//4 This is another way to find the index of a property in an array of objects. The array parameter is an array of objects. Using the array parameter and the index variable, update the object email address (.email or ["email"]) to be the newEmail parameter.



function changeEmail(array, key, newEmail) {
    var index = array.map(function(e) {
        return e.userId;
    }).indexOf(key);

    array[index].key = newEmail;

    return array;

}





// 5 Write a function called updateUserInfo that will take 5 parameters (array, property, value, newEmail, and newName). The array parameter is an array of objects. Have the function loop through the array of objects. If the property parameter, a key of the objects, equals the value parameter, then update the email property value to be newEmail and the name property value to be newName. When you are done, return the array.

var n = [{
	email: "nick",
	name: "stew"

}];

var updateUserInfo = function(array, property, value, newEmail, newName){
	for(var i = 0; i < array.length; i++){
		if(array[i][property] === value){
			array[i].email = newEmail; /// dot notation
			array[i].name = newName;  /// dot notation
		}
	}return array;
};


var updateUserInfo = function(array, property, value, newEmail, newName){
	for(var i = 0; i < array.length; i++){
		if(array[i][property] === value){
			array[i]["email"] = newEmail;  /// bracket notation
			array[i]["name"] = newName;   /// bracket notation
		}
	}return array;
};
