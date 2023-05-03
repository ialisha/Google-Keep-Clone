import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Note from './components/notes/Note';
import DataProvider from './components/context/DataProvider';
import Archives from './components/notes/Archives';
import DeleteNotes from './components/notes/DeleteNotes';
function App() {
  return (
    <div className="App">
     <Router>
    <DataProvider>
   
      <Routes>     
                    <Route path='/' element={<Note/>} />   
                    <Route path='/archive' element={<Archives />} />
                    <Route path='/delete' element={<DeleteNotes />} />
                </Routes>
           
                 </DataProvider>
            </Router>
            
    </div>
  );
}

export default App;
