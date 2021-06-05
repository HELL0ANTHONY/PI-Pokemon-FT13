require("dotenv").config();
const server   = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT     = process.env.PORT || 3001;

const { Type }         = require("./src/db");
const fetchData        = require("./src/helper/fetchData");
const { pokemonTypes } = require("./src/constants/index");

conn.sync({ force: true })
  .then(async _ => {
    return await fetchData(pokemonTypes());
  })
  .then(dataFetched => {
    return dataFetched.results.map(({ name }) => ({ name }));
  })
  .then(async types => {
    await Type.bulkCreate(types, {
      fields: ["name"]
    });
  })
  .then(_ => {
    server.listen(PORT, _ => {
      console.log("server running on PORT:", PORT);
    });
  });