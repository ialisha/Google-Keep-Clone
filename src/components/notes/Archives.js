import React, { useContext } from 'react';
import {DataContext } from '../context/DataProvider';
import Sidenav from '../Sidenav.js';
import Box from '@mui/material/Box';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActions, 
    Button
} from '@mui/material';
export default function Archives() {
   const {archiveNotes}=useContext(DataContext);
    const displayNote = archiveNotes.map((note)=>{   
    return [note[0],note[1] ];
    
});
console.log(displayNote);
  return (
    <div>
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
                          
                        </Card>
                     </Grid>
                ))}
            </Grid>
       


    </Box>
    </div>
  )
}
