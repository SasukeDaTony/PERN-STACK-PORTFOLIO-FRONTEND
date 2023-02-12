import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ViewPage() {
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
        navigate("/");
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      {treatment ? (
        <div className="">
          <img src={treatment.treatment_image} alt="" className="" />

          <div className="">
            <h2>{treatment.name}</h2>
            <p>Category: {treatment.category}</p>
            <p>Description: {treatment.description}</p>
            <p>Designated Therapist: {treatment.therapist}</p>

            <div>
              <div className="">
                <button
                  className=""
                  onClick={() => navigate(`/treatments/${id}/edit`)}
                >
                  Edit
                </button>

                <button className="" on onClick={() => handleDelete(id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
