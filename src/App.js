
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Clothing from './pages/Clothing';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/clothing' element={<Clothing />} />
            <Route path='/cart' element={<Cart />} />
            
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
