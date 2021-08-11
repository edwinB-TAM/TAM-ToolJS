const { exec } = require('child_process');

const userAdapterLogs = exec('adb','logcat','-s', 'IntegrationHelper', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: '+error.code);
    console.log('Signal received: '+error.signal);
  }
  console.log('Child Process STDOUT: '+stdout);
  console.log('Child Process STDERR: '+stderr);
});

userAdapterLogs.on('exit', function (code) {
  console.log('Child process exited with exit code '+code);
});
