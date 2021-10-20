fs = require('fs')
const qfgets = require('qfgets');
const { spawn } = require('child_process');
const integrationHelperParser = require('./integrationHelperParser');
const date = new Date();
const timestamp = date.getTime();
//Android command line
const subprocess = spawn('adb', ['logcat', '-s', 'IntegrationHelper'], {detached: true});

const logging = fs.createWriteStream(`test-${timestamp}.log`, {flags: 'a'});
const data = logging.path;

//TODO kill process
function getUserLogs(arg){
  subprocess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    // if ( data == 'use this for test devices)' ){
    //   subprocess.kill('SIGTERM')
    // }
  });

  subprocess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    // setTimeout(closeUserLogs,15, 'close');
    // console.log('Compare');
  });


  subprocess.stdout.pipe(logging);
  subprocess.stderr.pipe(logging);
  setTimeout(closeUserLogs,15000, 'close');
  // process.kill(-subprocess.pid);
}

function closeUserLogs(args){
  console.log("The value of logging.path():", logging.path);
  try {
    const userLogs = fs.readFileSync(logging.path).toString();
    console.log("The value of userLogs:", userLogs);
    integrationHelperParser.integrationHelperJson(userLogs)
    process.kill(-subprocess.pid);
  }catch (err) {
    console.log(err);
  }
  // userLogs = fs.readFileSync(logging.path).toString();
  // console.log("The value of userLogs:", userLogs);
  // integrationHelperParser.integrationHelperJson(userLogs)
  // process.kill(-subprocess.pid);
}
// console.log("before");
getUserLogs();
// setTimeout(getUserLogs,15, 'close');
// console.log("after");
