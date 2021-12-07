
/* 
If else blocks vs Switch + Ternary operators

*/
var number1 = 5;
var number2 = 1;

var result = number1 != number2;

var response = prompt('Are you ready?', 'Type yes or no');


console.log(response);


switch (response) {
    case `yes`:
        alert('Yeeyyyy! You reach me out :)');
        break;
    case `no`:
        alert('I\'m sorry for you');
        break;
    default:
        alert(`What do you mean with ${response}?`);
        break;
}


var salary = parseInt(prompt('Let me know your salary to calculate your tax'));

if (salary >= 2000) {
    console.log(salary*0.4);
} else {
    console.log(salary*0.2);
}

console.log( salary >= 2000 ? salary*0.4 : salary*0.2 );

console.log();//We can't put if-else into console.log


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

