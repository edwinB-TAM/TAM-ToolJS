const fs = require('fs');
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
