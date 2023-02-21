import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes> 
            <Route path="/" element={<Landing />} />
            <Route path="/treatments" element={<Index />} />
            <Route path="/treatments/:id" element={<Show />} />
            <Route path="/new-treatment" element={<NewForm />} />
            <Route path="/new-treatment/confirmation" element={<Confirm />} />
            <Route path="/treatments/:id/edit" element={<EditForm />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
