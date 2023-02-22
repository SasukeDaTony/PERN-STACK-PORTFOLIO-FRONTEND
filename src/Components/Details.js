import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_BASE_URL;

export default function Details({ setDropDwn }) {
  const navigate = useNavigate();
  const [treatment, setTreatment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}treatments/${id}`).then((res) => setTreatment(res.data));
  }, [id]);

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
            <p>
              <b>Price:</b> ${treatment.price}
            </p>
            <p>
              <b>Category:</b> {treatment.category}
            </p>
            <p>{treatment.description}</p>
            <img
              alt="therapist"
              src={treatment.therapist_image}
              width="100px"
              height="100px"
            />
            <p>
              <b>Therapist:</b> {treatment.therapist}
            </p>{" "}
          </div>

          <button
            className="btn"
            onClick={() => {
              navigate(`/treatments/${id}/edit`);
            }}
          >
            Edit
          </button>

          <button className="btn" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}
