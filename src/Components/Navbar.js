import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <img
        onClick={() => navigate("/")}
        className="logo"
        src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2011/11/18/1321635230563/The-Body-Shop-logo-007.jpg?width=465&quality=85&dpr=1&s=none"
        width="50px"
        height="50px"
      />
      <div className="btn-container">
      <button className="btn btn-hme" onClick={() => navigate("/")}>
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
  );
}
