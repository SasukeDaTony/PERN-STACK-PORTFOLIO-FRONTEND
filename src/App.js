import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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

const API = process.env.REACT_APP_BASE_URL;

function App() {
  const [dropDwn, setDropDwn] = useState(false);
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    axios.get(`${API}treatments`).then((res) => setTreatments(res.data));
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar setTreatments={setTreatments} dropDwn={dropDwn} setDropDwn={setDropDwn}/>
        <Routes>
          <Route path="/" element={<Landing setDropDwn={setDropDwn}/>} />
          <Route
            path="/treatments"
            element={<Index treatments={treatments} setDropDwn={setDropDwn}/>}
          />
          <Route path="/treatments/:id" element={<Show setDropDwn={setDropDwn}/>} />
          <Route path="/new-treatment" element={<NewForm />} />
          <Route path="/new-treatment/confirmation" element={<Confirm setDropDwn={setDropDwn}/>} />
          <Route path="/treatments/:id/edit" element={<EditForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
