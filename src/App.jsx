import './App.css';
import { Navbar } from './pages/header';
import { Aside } from './pages/aside';
import { Home } from './components/home';
import { Routes, Route } from 'react-router-dom';
import {Archie} from './components/archive'
import { Important } from './components/important';
import { Bin } from './components/bin';
import { Footer } from './pages/footer';

function App() {
  return (
    <>
      <Navbar />
     

      <div className="flex">
        <Aside />

        <div className='pt-5'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/achive' element={<Archie/>}/>
            <Route path='/important' element={<Important/>}/>
            <Route path='/bin' element={<Bin/>}/>

          </Routes>
        </div>
      </div>
      <Footer/>

    </>
  );
}

export default App;
