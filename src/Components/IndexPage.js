import axios from "axios";
import { useEffect, useState } from "react";
import TreatmentCard from "./TreatmentCard";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_BASE_URL;

export default function IndexPage() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    axios.get(`${API}treatments`).then((res) => setTreatments(res.data));
  });

  const navigate = useNavigate();

  return (
    <div className="index">
      <button className="new-btn" onClick={() => navigate("/new-treatment")}>
        Add A New Treatment
      </button>
      <div className="index-grid">
        {treatments.map((treatment) => {
          return <TreatmentCard treatment={treatment} />;
        })}
      </div>
    </div>
  );
}
