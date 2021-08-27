const fs = require('fs');
<<<<<<< HEAD
//Integration helper logs file, passed from tam-tool.js
const filename = fs.readFileSync('/Users/edwinbetancourt/edwinB-TAM/TAM-ToolJS/test_log.txt').toString();
//Compiled Network and Adapter matches into one regex
const network_adapter = /\B([-]{15})\s([a-zA-Z]\w*)\s([-]{14})\n(.+?(?:((Adapter\s)([0-9.]+\S))\s))/g;
// Empty Adapter
const adapter_missing = /Adapter - MISSING/g;
const exit = /use this for test devices/g;
// var network_match = filename.match(network_name);
// var adapter_match = filename.match(adapter_version);
// var adapter_missed_match = filename.match(adapter_missing);
// var exit_match = filename.match(exit);

const result = Array.from(filename.matchAll(network_adapter), m => {
    let res = {"Network": m[2]}
    if (undefined !== m[7]) {
        res["Adapter"]=m[7];
    }
    return res;
});
console.log(result);
fs.writeFileSync("parsedLogs"+Date.now(),JSON.stringify(result));
=======
//Integration helper logs file
const filename = fs.readFileSync('/Users/edwinbetancourt/edwinB-TAM/TAM-ToolJS/test_log.txt').toString();
//Network name regex pattern
const network_name = /\B([-]{15})\s([a-zA-Z]\w*)/g;
//Adapter name regex pattern
var adapter_version = /(I IntegrationHelper: Adapter) ([0-9.]+\S)( - VERIFIED)/g;
var network_match = filename.match(network_name);
var adapter_match = filename.match(adapter_version);
// const network_match = network_name.exec(filename);
// const adapter_match = adapter_version.exec(filename);

// var network_len = network_match.length;
var adapter_len = adapter_match.length;
// console.log("Occurrences of pattern in the string for network and adapter : " + adapter_len);
// console.log("Network Value:" + network_match)
// console.log("Adapter Value:" + adapter_match)
let integrationHelperLogs = [];

//for each line item
for  (let index = 0; index < filename.length; index++) {
    if(network_match && adapter_match) {
      // consonsole.log(name);
      // console.log("Pushing!");
      integrationHelperLogs.push({
          networkName: network_match[index],
          adapterVersions: adapter_match[index]
        });
    }else {
      console.log("No Match!");
      // console.log(filename);
      break;
    }
}
fs.writeFileSync("parsedLogs",JSON.stringify(integrationHelperLogs));
// console.log(filename);
>>>>>>> 59696e5369ec41050c6a528411634099eac51a70
