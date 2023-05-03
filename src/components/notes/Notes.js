import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import TextField from '@mui/material/TextField';
import {DataContext } from '../context/DataProvider';
import {v4 as uuid} from 'uuid';
export default function Notes() {
    const [showtextfield,setShowtextfield]=useState(false);
    const onTextAreaClicked=()=>{
        setShowtextfield(true)
    }
    const handleClickaway=()=>{
         setShowtextfield(false)
         setAddNote({...note,id:uuid()})
         if(addNote.heading || addNote.text)
         {
         setNotes(prevArr=>[addNote,...prevArr]);
         }
    }
    const note={
      id:'',
      heading:'',
      text:''
    }
    const [addNote, setAddNote] = useState({...note, id:uuid()});
    const {notes, setNotes}=useContext(DataContext);
    const onTextChnage=(e)=>{
      let changedNote={...addNote,[e.target.name]:[e.target.value]}
      setAddNote(changedNote);
    }
  return (
    <ClickAwayListener onClickAway={handleClickaway}>
    <Box sx={{display: 'flex',flexDirection:'column' ,width:'600px',marginLeft:'100px',border: '1px solid grey'}} >
   
      <TextField  placeholder="Title"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        name='heading' 
                        onClick={onTextAreaClicked}
                        onChange={(e)=>onTextChnage(e)}
                        value={addNote.heading}
                        />
                         
    { showtextfield && <TextField  placeholder="Take a note..."
                    multiline
                    maxRows={Infinity}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    name='text'
                    onChange={(e)=>onTextChnage(e)}
                    value={addNote.text}

                    />
  }
     
    </Box>
    </ClickAwayListener>
  )
}
