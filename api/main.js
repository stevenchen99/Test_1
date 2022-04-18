// Modules
const express = require("express");
const cors = require("cors");

const app = express();

// PORT
const PORT = process.env.PORT || 9999;

// Middlewares
app.use(express.json());
app.use(cors());

// Main
app.use("/", require("./root.route"));
app.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`);
});
