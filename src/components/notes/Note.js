import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../Sidenav';
import {DataContext } from '../context/DataProvider';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActions, 
    Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';

function Note() {

     const {notes,setNotes}=useContext(DataContext);
     const {archiveNotes,setArchiveNotes}=useContext(DataContext);
      const {deleteNotes,setDeleteNotes}=useContext(DataContext);
     const displayNote = notes.map((note)=>{   
    return [note.heading, note.text ,note.id];   
});
const archiveNote=(note)=>{
let newNote= notes.filter(data => data.id!==note[2]);
setNotes(newNote);
setArchiveNotes(prevArr=>[note,...prevArr]);
}

const deleteNote=(note)=>{
  let newNote= notes.filter(data => data.id!==note[2]);
setNotes(newNote);
setDeleteNotes(prevArr=>[note,...prevArr]);
}
  return (
      <div >
      <Sidenav/>
 <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' ,width: 1/2,mt: 20 ,}}>
 
            <Grid
                container
  direction="row-reverse"
  alignItems="center"
  spacing={8}
  >
                {displayNote.map(elem => (
                    <Grid  sx={{zIndex: 'tooltip'}} key={displayNote.indexOf(elem)}>
                        <Card>
                            
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                 {displayNote[displayNote.indexOf(elem)][0]}
                                </Typography>
                                 <Typography variant="h5" gutterBottom>
                                 {displayNote[displayNote.indexOf(elem)][1]}
                                </Typography>
                            </CardContent>
                            <CardActions>
                               <Button size="small" startIcon={<ArchiveIcon />} onClick={()=>archiveNote(displayNote[displayNote.indexOf(elem)])}> </Button>
                               <Button size="small" startIcon={<DeleteIcon />} onClick={()=>deleteNote(displayNote[displayNote.indexOf(elem)])}></Button>
                             </CardActions>
                        </Card>
                     </Grid>
                ))}
            </Grid>
       


    </Box>
     </div>
  )
}

export default Note
