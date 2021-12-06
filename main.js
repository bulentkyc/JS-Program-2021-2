/*
\\ OR
&& AND
*/

//false && true; => false
//false || true; => true

//0 && 1; => 0
//0 || 1; => 1

//null || 1; => 1

//true && false && true; => false
//true && (false && true); => false
//false || true && true; => true

/*
var test = 'Hi';

var result = test || 10; //Hi
*/
/* 
var test = '';
var test2 = 0;
var test3 = null;


var result = test || test2 || test3 || 10;
 */

//var result = 10 && 0 && 'Hey'
//var result = 'false' && 10 && 0 && alert('Yeeyyyy! You reach me out :)');

//var result = !false;
//var result = !!'hope';
//var result = !!1000;
//var result = !!null;

/* var number1 = 5;
var number2 = 1;

var result = number1 != number2; */

//console.log('abc' && 10 && 20 && !console.log('Yeeyyyy! You reach me out :)'));
var number1 = 5;
var number2 = 1;

var result = number1 != number2;

var response = prompt('Are you ready?', 'Type yes or no');


console.log(response);

if (response == 'yes') {
    alert('Yeeyyyy! You reach me out :)');
} else if (response == 'no') {
    alert("I'm sorry for you");
} else {
    alert("What do you mean with " + response + "?");
}


if (true) {
    alert(1);
} else if(false) {
    alert(2);
} else if(true) {
    alert(3);
} else {
    alert(4);
}

if (true) {
    alert('abc')
}