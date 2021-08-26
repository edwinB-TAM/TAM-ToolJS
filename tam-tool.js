fs = require('fs')
const qfgets = require('qfgets');

const { spawn } = require('child_process');
//Android
const subprocess = spawn('adb', ['logcat', '-s', 'IntegrationHelper']);
//iOS
// const subprocess = spawn('cfgutil',['syslog']);
// const subprocess = child_process.exec(grep', ['-r', 'IntegrationHelper'])
const logging = fs.createWriteStream('test_log.txt', {flags: 'a'});

//TODO kill process

subprocess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
  // if ( data == 'use this for test devices)' ){
  //   subprocess.kill('SIGTERM')
  // }
});

subprocess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
  console.log('Compare');
});

subprocess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
  console.log('kill3');
});

subprocess.stdout.pipe(logging);
subprocess.stderr.pipe(logging);

subprocess.on('exit', function(code){
  console.log('Child process exited with exit code ' +code)
  console.log('kill4');
});
