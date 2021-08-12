const fs = require('fs');
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
