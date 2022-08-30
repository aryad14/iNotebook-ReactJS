import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';

const About = () => {
  const a = useContext(noteContext);
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line 
  },[])
  return (
    <div>My Name is {a.state.name}, ID: {a.state.id}</div>
  )
}

export default About