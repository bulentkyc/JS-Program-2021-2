/* do {
    var answer = prompt('How can I help you', 'Please type only q to quit');
    if (answer != 'q') {
        alert(`Sorry, I couldn't understand ${answer}. May I do anything else?`);
    }
} while (answer != 'q');


//alert('Sorry, I couldn\'t understand ' + answer +' . May I do anything else?');
 */

var userNumber;

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
var randomNumber;

do {
    randomNumber = Math.ceil(Math.random()*10);
    userNumber = prompt(`Would you like to guess my number which is between 1 - 10 with 3 chance.` , `Type only q to quit`);

    if (userNumber == 'q') {
        break;
    }

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

} while ( userNumber != 'q' );
/* 
if (userNumber != randomNumber) {
    alert(`Game is over, you loose`);
} */

//while (userNumber != randomNumber && userNumber != 'q');

var output = '';

for (let i = 0; i < 5; i++) {
    output += '*';
    console.log(output);
}


console.log('    *'); // 4 space + 1 star
console.log('   **'); // 3 space + 2 star
console.log('  ***'); // 2 space + 3 star
console.log(' ****'); // 1 space + 4 star
console.log('*****'); // 0 space + 5 star


for (let i = 0; i < 5; i++) {
    var text = '';
    for (let c = 0; c < 4-i; c++) {
        text += ' ';
    }
    for (let x = 0; x <= i; x++) {
        text += '*';
    }
    console.log(text);
}

/* 
for (let i = 0; i < 5; i++) {
    var text = '';
    for (let c = 0; c < 4-i; c++) {
        text += ' ';
    }
    for (let x = 0; x < (i*2)-1; x++) {
        text += '*';
    }
    console.log(text)
} */


console.log('    *'); // 4 space + 1 star
console.log('   ***'); // 3 space + 3 star
console.log('  *****'); // 2 space + 5 star
console.log(' *******'); // 1 space + 7 star
console.log('*********'); // 0 space + 9 star


for (let i = 0; i < 5; i++) {
    var text = '';
    for (let c = 0; c < 5-i; c++) {
        text += ' ';
    }
    for (let x = 0; x < i*2+1; x++) {
        text += '*';
    }
    console.log(text);
}
/* 
odd   even
1       2
3       4
5       6   
7       8
 */
/* 
var txt = "";
for(i=1;i<=10;i++){
  txt = "";
  for(j=i;j<10;j++){
    txt += " ";
  }
  for(k=0;k<(i*2)-1;k++){
    txt += "*";
  }
  console.log(txt);
} */


console.log('    *'); // 4 space + 1 star
console.log('   ***'); // 3 space + 3 star
console.log('  *****'); // 2 space + 5 star
console.log(' *******'); // 1 space + 7 star
console.log('*********'); // 0 space + 9 star
console.log(' *******'); // 1 space + 7 star
console.log('  *****'); // 2 space + 5 star
console.log('   ***'); // 3 space + 3 star
console.log('    *'); // 4 space + 1 star

for (let i = 0; i < 5; i++) {
    var text = '';
    for (let c = 0; c < 5-i; c++) {
        text += ' ';
    }
    for (let x = 0; x < i*2+1; x++) {
        text += 'A';
    }

    console.log(text);
}

for (let i = 0; i < 5; i++) {
    var text = '';
    for (let c = 0; c < i+1; c++) {
        text += ' ';
    }
    for (let x = 0; x < 9-i*2; x++) {
        text += 'v';
    }

    console.log(text);
}