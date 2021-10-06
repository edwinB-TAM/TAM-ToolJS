const fs = require('fs');
//Compiled Network and Adapter matches into one regex
const network_adapter = /\B([-]{15})\s([a-zA-Z]\w*)\s+([-]{14})\n(.+?(?:((Adapter\s)([0-9.]+\S))\s))/g;
// Empty Adapter
const adapter_missing = /Adapter - MISSING/g;
const exit = /use this for test devices/g;

function integrationHelperJson(path){
  // console.log("Logging here")
  // logging = fs.readFileSync(path).toString();
  const result = Array.from(path.matchAll(network_adapter), m => {
      let res = {"Network": m[2]}
      if (undefined !== m[7]) {
          res["Adapter"]=m[7];
      }
      return res;
  });
  console.log(result);
  fs.writeFileSync("parsedLogs"+Date.now(),JSON.stringify(result));
}

exports.integrationHelperJson = integrationHelperJson;
