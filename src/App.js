
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Clothing from './pages/Clothing';

function App() {
  return (
    <div className="App bg-teal-900">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/clothing' element={<Clothing />} />
            
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
