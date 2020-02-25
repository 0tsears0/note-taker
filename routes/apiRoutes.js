const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const notes = require("../db/db.json");

router.get("/notes", (req, res) => {
  res.json(notes);
});

// req.body => { title: "title", text: "text"}
router.post("/notes", (req, res) => {
  notes.push(req.body);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes)
  );

  res.json(notes);
});

module.exports = router;
