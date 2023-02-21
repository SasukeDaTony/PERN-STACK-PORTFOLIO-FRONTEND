import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_BASE_URL;

export default function Navbar() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    axios.get(`${API}treatments`).then((res) => setTreatments(res.data));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <nav>
        <div className="logo-container">
          <img
            onClick={() => navigate("/")}
            className="logo"
            src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2011/11/18/1321635230563/The-Body-Shop-logo-007.jpg?width=465&quality=85&dpr=1&s=none"
            width="200px"
            height="200px"
            alt="logo"
          />
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="btn" onClick={() => navigate("/treatments")}>
            Treatments
          </button>
          <button className="btn" onClick={() => navigate("/about")}>
            About
          </button>
        </div>
      </nav>
      <div className="drop-container">
        <label htmlFor="drop">Categories :&nbsp;</label>
        <select id="drop" name="drop">
          <option value=""></option>
          <option value="Facials">Facials</option>
          <option value="Body Treatments">Body Treatments</option>
          <option value="Waxes">Waxes</option>
          <option value="Massages">Massages</option>
        </select>
        <div className="new-btn-cntr">
          <button
            className="new-btn"
            onClick={() => navigate("/new-treatment")}
          >
            Add New Treatment
          </button>
        </div>
      </div>
    </div>
  );
}
