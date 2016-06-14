var x = new XMLHttpRequest();	// sends the request to the server
x.open('GET', 'filename.txt', false); // false = synchronous, true = asynchronous
x.send(); //send the request to the server. NOTE: () contains a string for POST
var displayText = x.responseText // puts the contents of the file into a new variable for manipulation

console.log(displayText) // logs it to the console.
