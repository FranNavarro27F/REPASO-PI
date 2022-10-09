const server = require("./src/app.js");
const { getEpisodes } = require("./src/controllers/Episodes/index.js");
const { Episodes }= require("../api/src/db.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.

conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {

    await getEpisodes()

    console.log("Listening at 3001"); // eslint-disable-line no-console
  });
});

