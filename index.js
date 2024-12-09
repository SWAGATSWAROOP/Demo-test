const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Working Fine With 2st deployment" });
});

app.listen(3000, () => {
  console.log("Server Running at 3000");
});
