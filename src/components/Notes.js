import React, {useContext, useEffect} from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes()
  }, [])
  
  return (
    <div>
      <div className="m-12 h-72 px-4">
        <h3 className="text-2xl font-medium ml-3">Your Notes</h3>
        <div className='flex w-full flex-wrap '>
            {notes.map((note) => {
                return <NoteItem
                key={note._id}
                note={note}
                description={note.description ? note.description.slice(0, 22) : ""}
                />
            })}
        </div>
      </div>
    </div>
  );
}
