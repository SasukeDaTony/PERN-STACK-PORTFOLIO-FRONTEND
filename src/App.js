import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";


//COMPONENTS
import Navbar from "./Components/Navbar";
import Confirm from "./Components/Confirm.js";
import About from "./Pages/About.js";

//PAGES
import EditForm from "./Pages/EditForm";
import Landing from "./Pages/Landing.js";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import NewForm from "./Pages/NewForm";
import FourOFour from "./Pages/FourOFour";


function App() {
  const [treatments, setTreatments] = useState([]);

  return (
    <div className="app">
      <Router>
        <Navbar setTreatments={setTreatments} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/treatments"
            element={
              <Index treatments={treatments} setTreatments={setTreatments} />
            }
          />
          <Route path="/treatments/:id" element={<Show />} />
          <Route path="/new-treatment" element={<NewForm />} />
          <Route path="/new-treatment/confirmation" element={<Confirm />} />
          <Route path="/treatments/:id/edit" element={<EditForm />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
