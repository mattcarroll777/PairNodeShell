process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    process.stdout.write('You typed this: ' + cmd);
    process.stdout.write('\nprompt > ');
})


const pwd = require('./pwd')

const fs = require('fs')

const ls = require('./ls')

