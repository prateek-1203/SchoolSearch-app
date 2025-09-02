import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";
import Home from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSchool />} />
        <Route path="/show" element={<ShowSchools />} />
      </Routes>
    </Router>
  );
}

export default App
