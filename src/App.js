
import './App.css';
import Navbar from './Components/Navbar';
import Maintextarea from './Components/Maintextarea';
import { useState } from 'react';
//import {Routes, Route} from 'react-router-dom'

function App() {
  const [mode,setmode] = useState('light');
  const togglemode = () => {
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = 'White';
    }
  }

  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} togglemode = {togglemode}/>
    <Maintextarea mode = {mode}/>
    </>
  );
}

export default App;
