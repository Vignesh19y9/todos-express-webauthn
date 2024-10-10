const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

if (require.main === module) {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
  });
}

module.exports = app;
