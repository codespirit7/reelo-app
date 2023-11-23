const express = require("express");
const questionRoute = require("./router/apiRouter");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});

app.use("/api", questionRoute);
