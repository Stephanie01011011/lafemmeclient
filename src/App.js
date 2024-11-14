
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App bg-orange-50">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
