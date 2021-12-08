/* do {
    var answer = prompt('How can I help you', 'Please type only q to quit');
    if (answer != 'q') {
        alert(`Sorry, I couldn't understand ${answer}. May I do anything else?`);
    }
} while (answer != 'q');


//alert('Sorry, I couldn\'t understand ' + answer +' . May I do anything else?');
 */

var userNumber;
var randomNumber = Math.ceil(Math.random()*10);
//var counter = 0;
var diff;
var preDiff;
var temp;

// do {

//     counter++;
//     userNumber = prompt(`Let's guess my number. It's between 1-10 ${randomNumber}` , `Please type only q to quit`);

//     diff = Math.abs(randomNumber - userNumber);
    
// /*     if (preDiff != undefined) {
//         if (diff > preDiff) {
//             temp = 'colder'
//         } else {
//             temp = 'warmer'
//         }
//     } else {
//         temp = ''
//     } */

//     if (preDiff == undefined) {
//         temp = 'no worries this is the first round'
//     } else if (diff > preDiff) {
//         temp = 'colder'
//     } else if (diff < preDiff) {
//         temp = 'warmer'
//     } else {
//         temp = 'same'
//     }

//     preDiff = diff;

//     if (userNumber == 'q') {
//         alert(`I'm sorry to hear you don't wanna play with me 😩`);
//     } else if (userNumber == randomNumber) {
//         alert(`Yeyyy you catch me at ${counter}. time. It was ${randomNumber}`);
//     } else if (userNumber < randomNumber) {
//         alert(`It's too low and ${temp}`);
//     } else if (userNumber > randomNumber) {
//         alert(`It's too high and ${temp}`);
//     }

// } while (userNumber != randomNumber && userNumber != 'q');

/* 

var i = 0;

do {
    i++;
    alert(i); 
} while (i<3);


i = 0;
while (i<3) {
    i++;
    alert(i); 
}


for (let i = 1; i <= 3; i++) {
    alert(i)
}
 */

for (let counter = 1; counter <= 3; counter++) {

    //counter++;
    userNumber = prompt(`Let's guess my number. It's between 1-10 ${randomNumber}` , `Please type only q to quit`);

    diff = Math.abs(randomNumber - userNumber);
    
/*     if (preDiff != undefined) {
        if (diff > preDiff) {
            temp = 'colder'
        } else {
            temp = 'warmer'
        }
    } else {
        temp = ''
    } */

    if (preDiff == undefined) {
        temp = 'no worries this is the first round'
    } else if (diff > preDiff) {
        temp = 'colder'
    } else if (diff < preDiff) {
        temp = 'warmer'
    } else {
        temp = 'same'
    }

    preDiff = diff;

    if (counter == 3 && userNumber != randomNumber) {
        alert(`Game is over, you loose`);
    } else if (userNumber == 'q') {
        alert(`I'm sorry to hear you don't wanna play with me 😩`);
        break
    } else if (userNumber == randomNumber) {
        alert(`Yeyyy you catch me at ${counter}. time. It was ${randomNumber}`);
        break
    } else if (userNumber < randomNumber) {
        alert(`It's too low and ${temp}`);
    } else if (userNumber > randomNumber) {
        alert(`It's too high and ${temp}`);
    }

} 
/* 
if (userNumber != randomNumber) {
    alert(`Game is over, you loose`);
} */

//while (userNumber != randomNumber && userNumber != 'q');