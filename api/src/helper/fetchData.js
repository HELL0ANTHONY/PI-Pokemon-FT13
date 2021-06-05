const fetch = require("node-fetch");

async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

module.exports = fetchData;