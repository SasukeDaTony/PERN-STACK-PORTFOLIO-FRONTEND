import { useNavigate } from "react-router";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1 className="title">The Body Shop Spa</h1>
      <img
        className="land-img"
        width="400px"
        height="400px"
        src="https://selahsalonspa.com/wp-content/uploads/AdobeStock_129184958-1-1536x1062.jpeg"
        alt="logo"
      />
      <br />
      <button
        className="btn"
        onClick={() => {
          navigate("/treatments");
        }}
      >
        Go To All Treatments
      </button>
    </div>
  );
}

export default Landing;