const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));

// Force Express to serve index.html as
// starting point for all routes defined by React
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Express running on port ${port}...`);
});
