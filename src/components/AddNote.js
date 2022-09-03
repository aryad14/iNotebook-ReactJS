import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: "General"})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }


    return (
    <div className='mx-16 mt-8'>
        <h3 className='text-2xl font-medium ml-3'>Add a Note</h3>
        <div className='my-4 ml-3'>
            <label htmlFor='title' className='font-medium text-xl'>Title</label>
            <input type='text' name='title' id='title' className='border-2 border-solid w-full rounded-md h-9 px-2 mt-1 mb-3 hover:border-[#0e71b784] transition-all duration-100 focus:outline-[#3e7eaca8]' onChange={onChange}></input>

            <label htmlFor='description' className='font-medium text-xl'>Description</label>
            <textarea type='text' name='description' id='description' className='border-2 border-solid w-full rounded-md h-9 px-2 mt-1 mb-3 hover:border-[#0e71b784] transition-all duration-100 focus:outline-[#3e7eaca8]' onChange={onChange}></textarea>

            <label htmlFor='tag' className='font-medium text-xl'>Tag</label>
            <input type='text' name='tag' id='tag' className='border-2 border-solid w-full rounded-md h-9 px-2 mt-1 mb-3 hover:border-[#0e71b784] transition-all duration-100 focus:outline-[#3e7eaca8]' onChange={onChange}></input>

            <button className='bg-[#0f6bac] w-[6.2rem] h-10 text-white font-medium rounded-md hover:bg-[#0f6bacc6] transition-all duration-150 focus:ring-2 focus:ring-[#0f6bac6a]' type='submit' onClick={handleClick}>Save Note</button>
        </div>
    </div>
  )
}

export default AddNote