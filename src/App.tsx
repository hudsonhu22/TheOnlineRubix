import './App.css';
import Tutorial from './Tutorial';
import Solve from './Solve';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div>
      <Routes>
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/" element={<Solve />} />
      </Routes> 
    </div>
  );
}

export default App;
