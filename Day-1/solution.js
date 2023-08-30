const fs = require('fs');

const filePath = 'input.txt';


fs.readFile(filePath, 'utf-8', (err,data) => {
	if(err) {
		console.error(err);
		return;
	}
    const depths = data.split('\n'); 

    function part1(){
        let count = 0;
        for (let i=0; i < depths.length-1; i++){
            if (parseInt(depths[i+1]) > parseInt(depths[i])){
                count = count + 1;
            }
        }
        return count;
    }
    
    //bruteforce
    function part2() {
        let count = 0;
        let sum;
        const subArraySum = []
        for (let i = 0; i < depths.length-2; i++){
            sum = 0;
            for (let j = i; j < i + 3; j++) {
                sum = sum + parseInt(depths[j]);
            }
            subArraySum.push(sum);
        }
        for (let i=0; i < subArraySum.length-1; i++){
            if (parseInt(subArraySum[i+1]) > parseInt(subArraySum[i])){
                count = count + 1;
            }
        }
        return count;
        
    }

    console.log(part1());
    console.log(part2());

});