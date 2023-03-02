import React, { useState } from 'react';
import Header from './components/Hearder';
import Footer from './components/Footer';
import Note from './components/Note';
import Create from './components/Create';
import './styles.css'
// import Notes from './data/notes';

function App() {

  const [notes, setNotes] = useState([]); 

  function addNote(newNote) {
    console.log(newNote);
    setNotes(prev=> [...prev, newNote]);
  }

  function deleteNote(key) {
    setNotes(notes.filter((note)=> note.key!==key));
  }

  return (
    <div>
      <Header />
      <Create 
        handleAdd= {addNote}
      />
      {notes.map((note)=> <Note 
        key = {note.key}
        index = {note.key}
        title = {note.title}
        content = {note.content}
        handleDelete = {deleteNote}
      />)}
      <Footer />
    </div>
    )
}

export default App
