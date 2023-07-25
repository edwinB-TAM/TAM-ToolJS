const fs = require('fs')
const qfgets = require('qfgets');
const { spawn } = require('child_process');
const integrationHelperParser = require('./integrationHelperParser');
const date = new Date();
const readline = require('readline');
const timestamp = date.getTime();
//Android command line
// const subprocess = spawn('adb', ['logcat', '-s', 'IntegrationHelper'], {detached: true});
// TODO: iOS command line
//const subprocess = spawn('cfgutil', ['syslog','grep','-r','IntegrationHelper'], {detached: true});

// //iOS
var args = ['-c','cfgutil syslog | grep IntegrationHelper']
const subprocess = spawn('sh', args, {detached: true});
const logging = fs.createWriteStream(`test-${timestamp}.log`, {flags: 'a'});

//TODO kill process
function getUserLogs(arg){
  subprocess.stdout.on('data', (data) => {
    console.log('Retrieving Adapters and Versions.... ');
    console.log('Comparing....');
    // if ( data == 'use this for test devices)' ){
    //   subprocess.kill('SIGTERM')
    // }
  });

  subprocess.stderr.on('data', (data) => {
    // console.error(`stderr: ${data}`);
    // setTimeout(closeUserLogs,15, 'close');
  });


  subprocess.stdout.pipe(logging);
  subprocess.stderr.pipe(logging);
  setTimeout(closeUserLogs,15000, 'close');
  // process.kill(-subprocess.pid);
}

function closeUserLogs(args){
  // Enable for prod environment
  path = fs.readFileSync(logging.path).toString();
  // Enable for testing purposes
  // path = fs.readFileSync('./test.log').toString();
  integrationHelperParser.integrationHelperJson(path)
  // comment out when testing
  process.kill(-subprocess.pid);

}


function waitForUserInput() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Please launch the application now \nPress Enter/Return when launched.".bold, () => {
      rl.close();
      resolve();
    });
  });
}

async function startScript() {
  // console.log("Please launch the application now \n Press Enter/Return when lauched.".bold);
  await waitForUserInput();
  getUserLogs();
}

startScript();

// waitForUserInput();
// Uncomment for production purposes
// setTimeout(getUserLogsZz,15, 'close');
// Uncomment for testing purposes
// setTimeout(closeUserLogs,15, 'close');
