import './App.css';
import Home from './components/home';
import JobApplicationForm from './components/apply_job_form'; 
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const App = ()=>{
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

    <Route path="/home" element={<Home/>} />
    <Route path="/jobs" element = {<JobApplicationForm/>} />
    <Route path='*' element = {<Navigate to="/home"/>}/>

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
