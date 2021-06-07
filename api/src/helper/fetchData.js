const fetch = require("node-fetch");

async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    // console.log(error);
    return {};
  }
}

module.exports = fetchData;