import { useNavigate } from "react-router";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1 className="title">Welcome To Tony's Body Shop Spa</h1>
      <img
        width="500px"
        height="500px"
        src="https://selahsalonspa.com/wp-content/uploads/AdobeStock_129184958-1-1536x1062.jpeg"
        alt="logo"
      />
      <br />
      <button className="btn" onClick={() => navigate("/treatments")}>
        Go To All Treatments
      </button>
    </div>
  );
}
