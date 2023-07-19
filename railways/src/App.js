import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Table from './components/Table';
import About from './components/About';

import {
  BrowserRouter as Router, 
  Route,
  Routes
} from "react-router-dom";
import Login from './components/Login';

function App() {
  

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Table></Table>} />
          <Route path="/About" element={<About/>} />
          <Route path="/api" element={<Login/>} />
        </Routes> 
      </Router>
    </>
  );
}

export default App;
