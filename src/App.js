import logo from './logo.svg';
import './App.css';
import Login from './login';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/index'
import About from './pages/about';
import Navbar from './navbar';
import ContactUs from './pages/contactus';
import SignUp from './pages/signup';

function App() {
  const handleButtonClicked = () => {
    alert('Hello from React!')
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

      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<LoginPage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
