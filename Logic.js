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
/* 
var res = alert('Test1') && 10 || false && alert('Test2');
console.log(res);
 */
//var result = !false;
//var result = !!'hope';
//var result = !!1000;
//var result = !!null;

var number1 = 5;
var number2 = 1;

var result = number1 != number2;

console.log('abc' && 10 && 20 && !console.log('Yeeyyyy! You reach me out :)'));
