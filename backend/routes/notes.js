const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

  //ROUTE 1
  //Get all notes using: GET "/api/notes/fetchNotes". Login Required
  router.get("/fetchNotes", fetchUser, async (req, res) => {
    try {
      const notes = await Note.find({ user: req.user.id });
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!!!");
    }
  });

  //ROUTE 2
  //Add notes using: POST "/api/notes/addNote". Login Required
  router.post(
    "/addNote",
    fetchUser,
    [
      body("title", "Enter a Valid Title").isLength({ min: 3 }),
      body("description", "Description Should be atleast 3 Characters").isLength({
        min: 3,
      }),
    ],
    async (req, res) => {
      try {
        const { title, description, tag } = req.body;
        //If errors exist, return bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
          title,
          description,
          tag,
          user: req.user.id,
        });
        const savedNote = await note.save();

        res.json(savedNote);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!!!");
      }
    });

  //ROUTE 3
  //Update Notes using: PUT "/api/notes/updateNote". Login Required
  router.put("/updateNote/:id",fetchUser, async (req, res) => {
    const {title, description, tag} = req.body;

    try {
    //Creating a New Note Object
    const newNote =  {};

    if(title){newNote.title = title}
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}

    //Finding note to Updated
    let note = await Note.findById(req.params.id);
    if(!note){
      return res.status(404).send("Note Not Found!")
    }

    //Checking if the note belongs to currently logged in User
    if(note.user.toString() !== req.user.id){
      return res.status(401).send("Access Denied!")
    }

    note = await Note.findOneAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json({note});
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!!!");
    }
    });

  //ROUTE 4
  //Delete Notes using: DELETE "/api/notes/deleteNote". Login Required
  router.delete("/deleteNote/:id",fetchUser, async (req, res) => {
    const {title, description, tag} = req.body;

    try {
    //Finding note to be Deleted
    let note = await Note.findById(req.params.id);
    if(!note){
      return res.status(404).send("Note Not Found!")
    }

    //Checking if the note belongs to currently logged in User
    if(note.user.toString() !== req.user.id){
      return res.status(401).send("Access Denied!")
    }

    note = await Note.findByIdAndDelete(req.params.id)
    res.json({"Success": "The Note is Deleted"});
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!!!");
    }

    });

module.exports = router;
