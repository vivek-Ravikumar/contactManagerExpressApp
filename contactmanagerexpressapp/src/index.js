const express = require("express");
const contactsRouter = require("./Routers/contactsRouter");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
  res.send("from the server");
});

app.listen(3000, () => {
  console.log("server is up");
});
