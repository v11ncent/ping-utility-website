// https://nodejs.org/api/child_process.html
const { spawn } = require('child_process');

// https://stackoverflow.com/questions/15515549/node-js-writing-a-function-to-return-spawn-stdout-as-a-string/15515636
function ping(callback) {
    const data = [];
    // run command
    const ping = spawn('ping', ['google.com']);

    // on data
    ping.stdout.on('data', (result) => {
        let str = result.toString();
        let msIndex = result.indexOf('time');
        if (msIndex > -1) {
            data.push(str.substring(msIndex + 5, (msIndex + 5) + 4));
        } 
    });

    // error
    ping.stderr.on('data', (data) => {
        console.error(data);
    });

    // close
    ping.on('close', (data) => {
        return callback(data);
    })
}

ping((data) => console.log(data));

