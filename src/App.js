import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home'
import Navbar from './navbar';
import RickAndMorty from './pages/rickandmorty';
import SignUp from './pages/signup';
import Sidebar from './sidebar';
import {useState} from 'react';
import AboutUsSection from './pages/AboutUsSection/index';
import LoginPage from './pages/login';

function App() {
  

  const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<AboutUsSection />} />
          <Route path='/signin' element={<LoginPage />} />
          <Route path='/rick-and-morty' element={<RickAndMorty />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
