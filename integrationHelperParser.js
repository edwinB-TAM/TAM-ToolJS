const fs = require('fs');
const app = require('./app');
const axios = require('axios');
const cheerio = require('cheerio');
const colors = require('colors');


let result= {};

//Compiled Network and Adapter matches into one regex
// const network_adapter = /\(?<=--------------- )\b[a-zA-Z]*\b(?= --------------)\n(.+?(?:((Adapter\s)([0-9.]+\S))\s))/g;
//Uncomment for iOS
const network_adapter = /\B([-]{15})\s([a-zA-Z]\w*)\s+([-]{14})\n.*(Adapter VERIFIED)\n.*(SDK - Version )([0-9.]+\S)( - VERIFIED)\n.*(Adapter - Version )([0-9.]+\S)/g;
//Uncomment for Android
// const network_adapter = /\B([-]{15})\s([a-zA-Z]\w*)\s+([-]{14})\n.*Adapter\s+([0-9.]+\S)\s+-\s+VERIFIED/g;
// Empty Adapter
const adapter_missing = /Adapter - MISSING/g;
const exit = /use this for test devices/g;
let ironSourceAdapter_version;

function integrationHelperJson(path){
  // --- comment out when testing --- //
  // console.log("Logging here")
  // logging = fs.readFileSync(path).toString();
  //--------------------------------- //
  const matches = path.matchAll(network_adapter);
for (const m of matches) {
    let network = m[2];
    let adapter = m[9];
    result[network] = { adapter };
    if (network === "IronSource") {
        ironSourceAdapter_version = adapter;
    }
}
console.log('Adapter environment for application:'.bold.underline)
console.log(result);
app.scrape(result, ironSourceAdapter_version);
}

exports.integrationHelperJson = integrationHelperJson;
