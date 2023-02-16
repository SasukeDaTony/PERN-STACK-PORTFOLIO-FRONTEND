import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import IndexPage from "./Components/IndexPage";
import ViewPage from "./Components/ViewPage";
import NewTreatment from "./Components/NewTreatment.js";
import Confirm from "./Components/Confirm.js";
import EditPage from "./Components/EditPage";
import About from "./Components/About.js";
import LandingPage from "./Components/LandingPage.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/treatments" element={<IndexPage />} />
        <Route path="/treatments/:id" element={<ViewPage />} />
        <Route path="/new-treatment" element={<NewTreatment />} />
        <Route path="/new-treatment/confirmation" element={<Confirm />} />
        <Route path="/treatments/:id/edit" element={<EditPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
