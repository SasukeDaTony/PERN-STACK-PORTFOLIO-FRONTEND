import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

export default function Navbar({ setTreatments, dropDwn, setDropDwn }) {
  const navigate = useNavigate();

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
              setDropDwn(false);
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
              setDropDwn(false);
            }}
          >
            Home
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/treatments");
              setDropDwn(true);
            }}
          >
            Treatments
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/about");
              setDropDwn(false);
            }}
          >
            About
          </button>
        </div>
      </nav>
      {dropDwn === true ? (
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
                setDropDwn(false);
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
