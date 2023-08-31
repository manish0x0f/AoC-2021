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
        let sum = 0;
        let window = 3;
        const subArraySum = []
        for (let i = 0; i < depths.length-(window - 1); i++){
            if (i === 0)
            {
                for (let j = i; j < i + window; j++) {
                    sum = sum + parseInt(depths[j]);
                }

            }
            else {
                sum = sum - parseInt(depths[i-1]) + parseInt(depths[i+(window - 1)]);
            }
            subArraySum.push(sum);
        }
        for (let i = 0; i < subArraySum.length-1; i++){
            if (parseInt(subArraySum[i+1]) > parseInt(subArraySum[i])){
                count = count + 1;
            }
        }
        return count;
        
    }

    console.log(part1());
    console.log(part2());

});