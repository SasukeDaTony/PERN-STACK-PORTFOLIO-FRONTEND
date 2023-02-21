import axios from "axios";
import { useEffect, useState } from "react";
import TreatmentCard from "./TreatmentCard";

const API = process.env.REACT_APP_BASE_URL;

export default function Treatments() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    axios.get(`${API}treatments`).then((res) => setTreatments(res.data));
  }, []);

  return (
    <>
      <div className="index-grid">
        {treatments.map((treatment) => {
          return <TreatmentCard treatment={treatment} key={treatment.id} />;
        })}
      </div>
    </>
  );
}
