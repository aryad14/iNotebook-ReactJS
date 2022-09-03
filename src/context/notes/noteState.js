import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const host = "http://localhost:9000";
    const notes_initial = []
      const [notes, setNotes] = useState(notes_initial)

      //Fetch Notes
      const getNotes = async () => {

        //API call to Fetch all Notes
        const res = await fetch(`${host}/api/notes/fetchNotes/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkY2U4MTQ5M2FmMzAxMmJiZWNkY2RkIn0sImlhdCI6MTY1ODY0NTI1N30.elXrvJXDaOh7X7drgyUj9SE0USr-gFXQjoph05KozTY'
          }
        });
        const json = await res.json();
        console.log(json);
        setNotes(json)
      }

      //Add Notes
      const addNote = async (title,description,tag) => {

        //API Fetch
        const res = await fetch(`${host}/api/notes/addNote/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkY2U4MTQ5M2FmMzAxMmJiZWNkY2RkIn0sImlhdCI6MTY1ODY0NTI1N30.elXrvJXDaOh7X7drgyUj9SE0USr-gFXQjoph05KozTY'
          },
          body: JSON.stringify({title,description,tag})
        });
        const json = res.json();
      const note = {
          "_id": "62dcec1092cbeae82f51646a",
          "user": "62dce81493af3012bbecdcdd",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-07-24T06:52:00.974Z",
          "__v": 0
        };

        //push UPDATES an Array
        // setNotes(notes.push(note))
        
        //Concat RETURNS an array
        setNotes(notes.concat(note));
      }
      
      //Update Notes
      const updateNote = async (id, title, description, tag) => {
        //API Call
        const res = await fetch(`${host}/api/notes/updateNote/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkY2U4MTQ5M2FmMzAxMmJiZWNkY2RkIn0sImlhdCI6MTY1ODY0NTI1N30.elXrvJXDaOh7X7drgyUj9SE0USr-gFXQjoph05KozTY'
          },
          body: JSON.stringify(title,description,tag)
        });
        const json = res.json();

        //Editing on Client Side
        for (let i = 0; i < notes.length; i++) {
          const element = notes[i];
          if(element._id==id){
            element.title = title;
            element.description =  description;
            element.tag = tag;
          }
          
        }
      }
      
      //Delete Notes
      const deleteNote = (id) => {
        // console.log("Note Deleted... id:"+id)
        const newNote = notes.filter((note)=>{return note._id!==id});
        setNotes(newNote);
      }
      
    return(
        <noteContext.Provider value={{notes, addNote, updateNote, deleteNote, getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;