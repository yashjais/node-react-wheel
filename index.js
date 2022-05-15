import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || process.env.LOCAL_HOST || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.listen(port, () => {
  console.log("listening on the port", port);
});