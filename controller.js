const { friends } = require("./model");

const getFriends = (req, res) => {
  res.json(friends);
};

const postName = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "missing friend name" });
  }
  const newFriend = {
    name: req.body.name,
    id: req.body.length,
  };
  friends.push(newFriend);
  return res.status(201).json(newFriend);
};

const getName = (req, res) => {
  const id = Number(req.params.id);
  const friend = friends[id];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json("person not found");
  }
};

module.exports = { postName, getName, getFriends };
