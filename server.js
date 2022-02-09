const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const friends = [
  { id: 0, name: "lake" },
  { id: 1, name: "combs" },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json(friends);
});

app.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "missing friend name" });
  }
  const newFriend = {
    name: req.body.name,
    id: req.body.length,
  };
  friends.push(newFriend);
  return res.status(201).json(newFriend);
});

app.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const friend = friends[id];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json("person not found");
  }
});

app.listen(PORT, () => {
  console.log(`server is listenning to ${PORT}`);
});
