const axios = require('axios');
const cheerio = require('cheerio');

async function scrape(result, ironSourceAdapter_version) {
  try {
    // Make a request to the website
    const response = await axios.get('https://developers.is.com/ironsource-mobile/ios/mediation-networks-ios/#step-3');

    // Load the HTML into cheerio
    const $ = cheerio.load(response.data);

    // Find the div element with the class "sc_matrix"
    const scMatrix = $('.sc_matrix');

    // Iterate over the result object and compare the values
    let isCompatible = false;

    console.log(`You are using IronSource ${result['IronSource'].adapter}`);
    for (const network in result) {
      if (network === "IronSource") {
        continue;
      }
      scMatrix.find('tr').each((i, element) => {
        const sdk = $(element).attr('data-sdk');
        if (sdk === ironSourceAdapter_version) {
          const tds = $(element).find('td');
          const adapter_name = tds.eq(0).text().trim();
          const website_adapter_versions = tds.eq(1).text().split(",");
          for (let i = 0; i < website_adapter_versions.length; i++) {
            const adapter_version = website_adapter_versions[i].trim();
            if (adapter_name.toLowerCase().includes(network.toLowerCase()) && adapter_version === result[network].adapter) {
              console.log(`${network} ${result[network].adapter} is compatible`);
              isCompatible = true;
              return;
            }
          }
        }
      });
      if (!isCompatible) {
        console.log(`${network} ${result[network].adapter} is not compatible`);
      }
      isCompatible = false;
    }

  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  scrape
};
