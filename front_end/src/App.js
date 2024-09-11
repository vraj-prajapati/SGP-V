import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

    <Route path="/home" element={<Home/>} />
    <Route path='*' element = {<Navigate to="/home"/>}/>

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
