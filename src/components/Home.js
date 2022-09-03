import React from 'react'
import AddNote from './AddNote';
// import Alert from './Alert';
import Notes from './Notes';

const Home = () => {
  return (
    <div>
      {/* <Alert/> */}
      <AddNote/>
      <Notes/>
    </div>
  )
}

export default Home