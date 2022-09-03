import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const notes_initial = [
        {
          "_id": "62dcec0692cbeae62f516466",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 1",
          "description": "Hello There!! This is My Sample Note 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem consequuntur dolorum ipsam! Hic vero distinctio repellendus sapiente. Deleniti asperiores omnis dolorem maxime quo ipsam molestiae sequi culpa. Consequatur harum cumque temporibus adipisci aperiamx.",
          "tag": "New",
          "date": "2022-07-24T06:51:50.046Z",
          "__v": 0
        },
        {
          "_id": "62dcec0b92cbeae62f516468",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 2",
          "description": "This is ReactJS Course where we are leaning MERN Stack Development Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem consequuntur dolorum ipsam! Hic vero distinctio repellendus sapiente. Deleniti asperiores omnis dolorem maxime quo ipsam molestiae sequi culpa. Consequatur harum cumque temporibus adipisci aperiamx.",
          "tag": "New",
          "date": "2022-07-24T06:51:55.941Z",
          "__v": 0
        },
        {
          "_id": "62dcec1092cbeae62f56646a",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 3",
          "description": "This is Note 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem consequuntur dolorum ipsam! Hic vero distinctio repellendus sapiente. Deleniti asperiores omnis dolorem maxime quo ipsam molestiae sequi culpa. Consequatur harum cumque temporibus adipisci aperiamx.",
          "tag": "New",
          "date": "2022-07-24T06:52:00.974Z",
          "__v": 0
        },
        {
          "_id": "62dcec1092cbege62f51646a",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 4",
          "description": "This is Note 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem consequuntur dolorum ipsam! Hic vero distinctio repellendus sapiente. Deleniti asperiores omnis dolorem maxime quo ipsam molestiae sequi culpa. Consequatur harum cumque temporibus adipisci aperiamx.",
          "tag": "New",
          "date": "2022-07-24T06:52:00.974Z",
          "__v": 0
        },
        {
          "_id": "62dcec1092cbeae626f51646a",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 5",
          "description": "This is Note 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem consequuntur dolorum ipsam! Hic vero distinctio repellendus sapiente. Deleniti asperiores omnis dolorem maxime quo ipsam molestiae sequi culpa. Consequatur harum cumque temporibus adipisci aperiamx",
          "tag": "New",
          "date": "2022-07-24T06:52:00.974Z",
          "__v": 0
        },
        {
          "_id": "62dcec1092cbeae82f51646a",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 6",
          "description": "This is Note 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem consequuntur dolorum ipsam! Hic vero distinctio repellendus sapiente. Deleniti asperiores omnis dolorem maxime quo ipsam molestiae sequi culpa. Consequatur harum cumque temporibus adipisci aperiamx.",
          "tag": "New",
          "date": "2022-07-24T06:52:00.974Z",
          "__v": 0
        },
      ]
      const [notes, setNotes] = useState(notes_initial)

      //Add Notes
      const addNote = (title,description,tag) => {
        console.log("New  Note Added");
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
      const updateNote = () => {

      }
      
      //Delete Notes
      const deleteNote = () => {

      }
      
    return(
        <noteContext.Provider value={{notes, addNote, updateNote, deleteNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;