const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const userRouter = require("./router");

app.use(cors());
app.use(express.json());

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`server is listenning to ${PORT}`);
});
