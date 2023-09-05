const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }

    const bDigits = data.split('\n');
    console.log(bDigits);

    const bDigitsTranspose = [];

    for(let i = 0; i < bDigits.length; i++) {
        console.log(bDigits[i]);
        for (let j = 0; j < bDigits[i].length; j++) {
            console.log(bDigits[i][j]);
            bDigitsTranspose[j] = bDigitsTranspose[j] === undefined ? bDigits[i][j] : bDigitsTranspose[j] + bDigits[i][j];
        }
        
    }

    console.log(bDigitsTranspose);

    

});