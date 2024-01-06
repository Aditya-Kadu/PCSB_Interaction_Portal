const express = require("express");
const https = require("https");
const fs = require("fs");

const { PORT, HTTPS_PORT } = require("./config");

const app = express();

app.get("/", (req, res) => res.send("Welcome to PCSB Interaction Portal API"));

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const server = app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}...`)
);

const key = fs.readFileSync("private.key");
const cert = fs.readFileSync("certificate.crt");

const cred = { key: key, cert: cert };

const httpsServer = https.createServer(cred, app);

httpsServer.listen(HTTPS_PORT, () => {
  console.log(`HTTPS Server running on port ${HTTPS_PORT}`);
});

module.exports = server;
