import './App.css';
import {Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar';
import  Home  from './pages/Home';
 import Login  from './components/Login';
import Header from "./pages/Header"
import  Footer  from './components/Footer';
import HotelDetails from './components/HotelDetails';
import { GoogleOAuthProvider } from '@react-oauth/google';
                    
                    
                    
function App() {
  return (
    <GoogleOAuthProvider clientId="240411651497-dndkjeg5hei75qqeielojab369ca3rsl.apps.googleusercontent.com">
    <div className='App'>
      <Navbar />
      <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/header-content' element={<Header/>} />
            <Route path='/hotel_details/:hotelId' element={<HotelDetails/>} />
          </Routes>
          </div>
      <Footer />
      </div>
      </GoogleOAuthProvider>
    
  );
}

export default App;

