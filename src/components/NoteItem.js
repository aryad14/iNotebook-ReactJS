import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note} = props;
  return (
    <div>
        <div className='flex max-h-[26.5rem] w-64 border-2 border-solid mx-3 rounded-md mt-4'>
            <div className='flex flex-col p-3 min-h-0'>
                <h3 className='text-xl font-semibold'>{note.title}</h3>
                <p className='text-sm mt-2 h-40'>{note.description.slice(0, 250)}</p>
                <div className='w-full mt-5'>
                    <a><i className="fa fa-share cursor-pointer"></i></a>
                    <a><i className="fa fa-trash cursor-pointer mx-4" onClick={()=>{
                        deleteNote(note._id)
                    }}></i></a>
                    <a><i className="fa fa-star cursor-pointer"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}
