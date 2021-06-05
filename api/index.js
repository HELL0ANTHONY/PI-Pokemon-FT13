require("dotenv").config();
const server   = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT     = process.env.PORT || 3001;

conn.sync({ force: true })
  .then(_ => {
    server.listen(PORT, _ => {
      console.log("server running on PORT:", PORT);
    });
  });