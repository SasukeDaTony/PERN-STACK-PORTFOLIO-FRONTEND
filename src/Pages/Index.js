import Treatments from "../Components/Treatments";
import { useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

function Index({ treatments, setTreatments }) {
  // eslint-disable-next-line
  useEffect(() => {
    axios.get(`${API}treatments`).then((res) => setTreatments(res.data));
  }, [setTreatments]);

  return (
    <div className="index">
      <Treatments treatments={treatments} />
    </div>
  );
}

export default Index;
