import { useNavigate } from "react-router";

export default function LandingPage() {
  
  const navigate = useNavigate();

    return (
    <div className="landing">
      <h1 className="title">Welcome To Tony's Body Shop Spa</h1>
      <img
      width="500px"
      height="500px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sonne_Meer_und_M%C3%B6we.jpg/400px-Sonne_Meer_und_M%C3%B6we.jpg"
        alt="logo"
      /><br/>
      <button className="btn" onClick={() => navigate("/treatments")}>Go To All Treatments</button>
    </div>
  );
}
