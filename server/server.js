const express = require("express");
const PORT = 3453;
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});
