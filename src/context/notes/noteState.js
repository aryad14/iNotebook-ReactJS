// eslint-disable-next-line
import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const notes_initial = [
        {
          "_id": "62dcec0692cbeae62f516466",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 1",
          "description": "Hello There!! This is My Sample Note 1",
          "tag": "New",
          "date": "2022-07-24T06:51:50.046Z",
          "__v": 0
        },
        {
          "_id": "62dcec0b92cbeae62f516468",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 2",
          "description": "This is ReactJS Course where we are leaning MERN Stack Development",
          "tag": "New",
          "date": "2022-07-24T06:51:55.941Z",
          "__v": 0
        },
        {
          "_id": "62dcec1092cbeae62f51646a",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 3",
          "description": "This is Note 5",
          "tag": "New",
          "date": "2022-07-24T06:52:00.974Z",
          "__v": 0
        },
        {
          "_id": "62dcec1092cbeae62f51646a",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 4",
          "description": "This is Note 5",
          "tag": "New",
          "date": "2022-07-24T06:52:00.974Z",
          "__v": 0
        },
        {
          "_id": "62dcec1092cbeae62f51646a",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 5",
          "description": "This is Note 5",
          "tag": "New",
          "date": "2022-07-24T06:52:00.974Z",
          "__v": 0
        },
        {
          "_id": "62dcec1092cbeae62f51646a",
          "user": "62dce81493af3012bbecdcdd",
          "title": "Sample Note 6",
          "description": "This is Note 5",
          "tag": "New",
          "date": "2022-07-24T06:52:00.974Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(notes_initial)
    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;