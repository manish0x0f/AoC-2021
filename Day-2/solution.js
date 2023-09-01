const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    const commands = data.split('\n').map(x => x.split(' '));
    
    

    function part1() {
        let horizontalPosition = 0;
        let depth = 0;
        for (let command of commands) {
            if(command[0] === 'forward') {
                horizontalPosition = horizontalPosition + parseInt(command[1])
            }else if(command[0] === 'up') {
                depth = depth - parseInt(command[1]);
            }else {
                depth = depth + parseInt(command[1]);
            }
        }
        return horizontalPosition * depth;
    }
    

    function part2() {
        let horizontalPosition = 0;
        let depth = 0;
        let aim = 0;
        for (let command of commands) {
            if(command[0] === 'forward') {
                horizontalPosition = horizontalPosition + parseInt(command[1]);
                depth = depth + (parseInt(command[1]) * aim);
            }else if(command[0] === 'up') {
                aim = aim - parseInt(command[1]);
            }else {
                aim = aim + parseInt(command[1]);
            }
        }
        return horizontalPosition * depth;
    }

    console.log(part1());
    console.log(part2());


});

