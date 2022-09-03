import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const Home = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const {notes, setNotes} = context;
  return (
    <div>
      <div className='m-12 h-60'>
        <h3 className='text-2xl font-medium'>Your Notes</h3>
        {notes.map((note)=>{
          return note.title;
        })}
      </div>
    </div>
  )
}

export default Home