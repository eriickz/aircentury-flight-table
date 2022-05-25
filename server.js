const express = require("express");
const app = express();
const liveServer = require("live-server");
const serverConfig = require("./live-server.json");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("src"));
  app.listen(process.env.PORT || 3000);
} else {
  liveServer.start(serverConfig);
}

console.log("Server is running");
