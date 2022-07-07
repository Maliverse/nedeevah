import './App.css';
import { Navbar } from './container';

import Home from './pages/Home';
import About from './pages/About';
import Causes from './pages/Causes';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app__center'>

      <div className='app__container'>
      <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/about' element= {<About />}> </Route>
        <Route path='/causes' element= {<Causes />}> </Route>
        <Route path='/contact' element= {<Contact />}> </Route>
        <Route path='/donate' element= {<Donate />}> </Route>

      </Routes>
      

      </BrowserRouter>
      </div>
    
    </div>

  );
}

export default App;
