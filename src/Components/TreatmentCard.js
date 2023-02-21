import { useNavigate } from "react-router-dom";

export default function TreatmentCard({ treatment }) {
  const navigate = useNavigate();
  return (
    <div
      className="treatment-card"
      onClick={() => navigate(`/treatments/${treatment.id}`)}
    >
      <div className="treatment-container">
        <h3>
          {treatment.name} : ${treatment.price}
        </h3>
        <img
          src={treatment.treatment_image}
          alt="therapist"
          className="img-therapist"
          width="350px"
          height="250px"
        />
      </div>

      <div className="img-container">
        <span className="thpst">Therapist : {treatment.therapist}</span>
       <br /> <img
          src={treatment.therapist_image}
          alt="therapist"
          className="img-therapist"
          width="100px"
          height="100px"
        />
      </div>
    </div>
  );
}
