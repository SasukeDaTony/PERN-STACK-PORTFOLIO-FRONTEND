import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API = process.env.REACT_APP_BASE_URL;

export default function Navbar({ setTreatments }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleChange(e) {
    axios.get(`${API}treatments?category=${e.target.value}`).then((res) => {
      setTreatments(res.data);
    });
  }

  return (
    <div className="nav-container">
      <nav>
        <div className="logo-container">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="logo"
            src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2011/11/18/1321635230563/The-Body-Shop-logo-007.jpg?width=465&quality=85&dpr=1&s=none"
            width="200px"
            height="200px"
            alt="logo"
          />
        </div>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button className="btn" onClick={() => navigate("/treatments")}>
            Treatments
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </button>
        </div>
      </nav>
      {location.pathname === "/treatments" ? (
        <div className="drop-container">
          <label htmlFor="drop">Categories :&nbsp;</label>
          <select onChange={handleChange} id="drop" name="drop">
            <option value=""></option>
            <option value="Facials">Facials</option>
            <option value="Body Treatments">Body Treatments</option>
            <option value="Waxes">Waxes</option>
            <option value="Massages">Massages</option>
          </select>
          <div className="new-btn-cntr">
            <button
              className="new-btn"
              onClick={() => {
                navigate("/new-treatment");
              }}
            >
              Add New Treatment
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
