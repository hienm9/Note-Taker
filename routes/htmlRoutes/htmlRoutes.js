//Dependencies
const path = require('path');
const router = require('express').Router();

//GET /notes should return the notes.html file.
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//GET * should return the index.html file.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;