import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { notes, setNotes } = context;
  return (
    <div>
      <div className="m-12 h-72">
        <h3 className="text-2xl font-medium">Your Notes</h3>
        <div className='flex w-full flex-wrap'>
            {notes.map((note) => {
                return <NoteItem note={note}/>
            })}
        </div>
      </div>
    </div>
  );
}
