import zIndex from '@mui/material/styles/zIndex';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Sidebar from './components/Sidebar';

function App() {
  const [hide, setHide] = useState(true);
  let val = hide ? "-500px" : "0";
  const sideStyle = {
    position: "absolute",
    left: hide ? "-500px" : "0",
    zIndex: "10",
    transition: "all 0.5s"
  }
  return (
    <div className="App" style={{ backgroundColor: "rgb(246,246,255)", minHeight: "100vh", display: "flex" }}>
      <div style={sideStyle} >
        <Sidebar setHide={setHide} />
      </div>
      <div>
        <Header setHide={setHide} />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
