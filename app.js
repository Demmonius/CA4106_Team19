const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
