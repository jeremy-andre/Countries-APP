const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const saveApiData = require("./src/ImportApiData/saveApiData");

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  await saveApiData();
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
