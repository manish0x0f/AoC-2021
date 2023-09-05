const fs = require('fs');
const { cpuUsage } = require('process');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }

    const bDigits = data.split('\n');

    const bDigitsTranspose = [];

    for(let i = 0; i < bDigits.length; i++) {
        for (let j = 0; j < bDigits[i].length; j++) {
            bDigitsTranspose[j] = bDigitsTranspose[j] === undefined ? bDigits[i][j] : bDigitsTranspose[j] + bDigits[i][j];
        }
        
    }
    
    function part1()
    {
        const gammaRate = bDigitsTranspose.map(x => x.split('')).map(x => x.sort()).reduce((acc,curr) => {
            acc += curr[Math.floor(curr.length/2)];
            return acc;
        },"");

        const epsilonRate = gammaRate.split('').map(x => x === '0' ? '1' : '0' ).join('');

        return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

    }

    console.log(part1());
    
    

    
    
    

    

    

});