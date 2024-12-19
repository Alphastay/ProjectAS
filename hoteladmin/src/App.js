import AddHotel from "./pages/AddHotel";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Update from "./pages/Update";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import PrivateComponent from "./pages/PrivateComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route element={<PrivateComponent />}>
            <Route path="/addhotel" element={<AddHotel />} />
          </Route> */}
           <Route path="/addhotel" element={<AddHotel />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
