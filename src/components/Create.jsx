import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Zoom from '@mui/material/Zoom';

function Create(props) {

    const [newNote, setNewNote] = useState({
        key: 0,
        title: "",
        content: ""
    });

    const [isClicked, setIsCLicked] = useState(false);

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        
        setNewNote(prev=> {
            if(name==='title') {
                return {
                    key: prev.key,
                    title: value,
                    content: prev.content
                }
            }
            else if(name==='content') {
                return {
                    key: prev.key,
                    title: prev.title,
                    content: value
                }
            }
        })

    }
    
    return (
        <form 
            className='create-note'
            onSubmit={(event)=> {
                event.preventDefault();
                setNewNote(prev=> {
                    return {
                        key: prev.key,
                        title: prev.title,
                        content: prev.content
                    }
                })
                props.handleAdd(newNote);
                setNewNote(prev=> {
                    return {
                        key: prev.key+1,
                        title: "",
                        content: ""
                    }
                });
            }}
        >

            
            {isClicked && <input 
                name='title'
                type="text"
                placeholder="Title"
                value={newNote.title}
                onChange={handleChange}
            />}
            <textarea
                name='content'
                rows={isClicked? 3 : 1}
                placeholder='Note it down!!'
                value={newNote.content}
                onChange={handleChange}
                onClick={()=> setIsCLicked(true)}
            />
            {isClicked && <Zoom
                in= {isClicked}
            >
                <Fab type="submit" aria-label="add">
                    <AddIcon />
                </Fab>
            </Zoom>
            }
        </form>
    )
}

export default Create;