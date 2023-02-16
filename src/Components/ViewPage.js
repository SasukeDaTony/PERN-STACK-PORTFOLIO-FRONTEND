import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_BASE_URL;

export default function ViewPage() {
  const navigate = useNavigate();
  const [treatment, setTreatment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(API);
    axios.get(`${API}treatments/${id}`).then((res) => setTreatment(res.data));
  }, [id]);

  console.log(treatment);

  function handleDelete(id) {
    axios
      .delete(`${API}treatments/${id}`)
      .then(() => {
        navigate("/treatments");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      {treatment ? (
        <div className="view-container">
          <div className="view-top">
            <h1>
              <u>{treatment.name}</u>
            </h1>
            <img
              src={treatment.treatment_image}
              alt="treatment"
              width="250px"
              height="250px"
            />
          </div>
          <div className="view-bot">
            {" "}
            <p>Price: ${treatment.price}</p>
            <p>Category: {treatment.category}</p>
            <p>
            {treatment.description}
            </p>
          
            <img src={treatment.therapist_image} width="100px" height="100px" />
            <p>Therapist: {treatment.therapist}</p>{" "}
          </div>

          <button
            className="button"
            onClick={() => navigate(`/treatments/${id}/edit`)}
          >
            Edit
          </button>

          <button className="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}
