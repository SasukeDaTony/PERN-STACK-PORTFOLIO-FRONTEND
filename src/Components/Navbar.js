import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <h2 className="logo">Body Shop</h2>

      <div className="far-right">
        <h3 className="home-btn" onClick={() => navigate("/")}>
          Home
        </h3>
        <button className="about-btn" onClick={() => navigate("/about")}>
          About Me
        </button>
      </div>
    </nav>
  );
}
