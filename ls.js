module.exports = process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'ls'){
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err
      } else {
        process.stdout.write(files.join(' '));
        process.stdout.write('\nprompt > ');
      }
    })
  }
})

const fs = require('fs')
