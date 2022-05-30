import logo from './logo.svg';
import './App.css';
import Login from './login';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home'
import Navbar from './navbar';
import ContactUs from './pages/contactus';
import SignUp from './pages/signup';
import Sidebar from './sidebar';
import {useState} from 'react';
import AboutUsSection from './AboutUsSection/index';

function App() {
  const handleButtonClicked = () => {
    alert('Hello from React!')
  }

  const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  const LoginPage = () => {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={handleButtonClicked}>Greetings!</button>
          <a
            className="App-link"
            href="https://github.com/veiserath/Daftcode-frontend"
            target="_blank"
            rel="noopener noreferrer">
            Link to GitHub repo
          </a>
          <Login onChange={handleButtonClicked}></Login>
        </header>
      </div>
    );
  };




  return (
    <BrowserRouter>
      {/* <Route index path='/' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} /> */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<AboutUsSection />} />
          <Route path='/signin' element={<LoginPage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
