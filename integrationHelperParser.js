const fs = require('fs');
//Integration helper logs file
const data = fs.readFileSync('/Users/edwinbetancourt/edwinB-TAM/TAM-ToolJS/test_log.txt').toString();
//Network name regex pattern
const network_name = /B([-]{15})\s([a-zA-Z]\w*)/;
//Adapter name regex pattern
const adapter_version = /(I IntegrationHelper: Adapter) ([0-9.]+\S)( - VERIFIED)/i;
// const network_match = network_name.exec(data);
const adapter_match = adapter_version.exec(data);


// const data = fs.readFileSync('/Users/edwinbetancourt/edwinB-TAM/TAM-ToolJS/test_log.txt').toString().split("/r/n");
//method 1
// var data = fs.readFileSync('/Users/edwinbetancourt/edwinB-TAM/TAM-ToolJS/test_log.txt', 'utf8', function(err,doc){
//   var comments = doc.match(network_name);
//   console.log(comments);
// });

let integrationHelperLogs = [];

//for each line item
for  (let index = 0; index < data.length; index++) {
  const network_match = network_name.exec(data);
    if(network_match) {
      // const name = network_match[1];
      // consonsole.log(name);
      integrationHelperLogs.push({
          networkName: data[index]
        });

    }else {
      console.log("No Match!");
      // console.log(data);
      break;
    }

}
//
// fs.writeFileSync("parsedLogs",JSON.stringify(integrationHelperLogs));
// console.log(data);
