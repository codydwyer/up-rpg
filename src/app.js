const { AppSettings } = require("./server/helpers/environment");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require("./server/helpers/apollo-http-server");
const { ApiRouter } = require("./server/api/api");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/assets", express.static(path.join(__dirname, "public")));
app.use("/api", ApiRouter);
app.use("/", (_, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, AppSettings.host, async () => {
  const { initDb } = require(`./server/models`);
  await initDb();
  log(`UP RPG listening on port ${PORT}`, true);
});
