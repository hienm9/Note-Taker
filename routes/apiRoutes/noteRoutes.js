// Dependencies
const router = require('express').Router();
const savedNotes = require('../../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


//GET /api/notes reads the db.json file and returns all saved notes as JSON.
router.get('/notes', function (req, res) {
  res.json(savedNotes);
});

// POST request
router.post('/notes', (req, res) => {
  var note = req.body;
  // add an id to note
  note.id = uuidv4(); 
  console.log(note);
  //push note to saveNotes 
  savedNotes.push(note);
  // permenantly save updated note
  fs.writeFile('./db/db.json', JSON.stringify(savedNotes),function(err){
      if(err) throw err;
      res.json(note);
  });
  
});

//DELETE /api/notes/:id removes the note with the matching id from db.json
router.delete('/notes/:id', (req, res) => {
  var selectNote = req.params.id;

    for (let i = 0; i < savedNotes.length; i++) {
        if (selectNote === savedNotes[i].id) {
          // return the SaveNotes with the selected note removed 
            res.json(savedNotes.splice(i, 1));
        }
    }

});


module.exports = router;

// pseudo codes:
//GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, 
//add it to the db.json file, and then return the new note to the client. 
//You'll need to find a way to give each note a unique id 
//when it's saved (look into npm packages that could do this for you).