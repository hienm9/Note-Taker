// Dependencies
const router = require('express').Router();
const savedNotes = require('../../db/db.json')

// GET request
//GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', function (req, res) {
  res.json(savedNotes);
});

// POST request
router.post('/notes', (req, res) => {

});


module.exports = router;

// pseudo codes:
//GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, 
//add it to the db.json file, and then return the new note to the client. 
//You'll need to find a way to give each note a unique id 
//when it's saved (look into npm packages that could do this for you).