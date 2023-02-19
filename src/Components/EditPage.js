import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_BASE_URL;

export default function EditPage() {
  const [updateTreatment, setUpdateTreatment] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}treatments/${id}`)
      .then((res) => setUpdateTreatment(res.data));
  }, [id]);

  function handleChange(e) {
    setUpdateTreatment({ ...updateTreatment, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.put(`${API}treatments/${id}`, updateTreatment).then(() => {
      navigate(`/treatments/${id}`);
    });
  }
  return (
    <div className="form-grid">
      <h2> Update Treatment Form</h2>
      <div className="form-div">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Treatment Name:</label>
          <input
            type="text"
            required
            value={updateTreatment.name}
            id="name"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="treatment_image">Treatment Image URL:</label>
          <input
            type="text"
            required
            value={updateTreatment.treatment_image}
            id="treatment_image"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            required
            value={updateTreatment.category}
            id="category"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            required
            value={updateTreatment.description}
            id="description"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            required
            value={updateTreatment.price}
            id="price"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="therapist">Designated Therapist:</label>
          <input
            type="text"
            required
            value={updateTreatment.therapist}
            id="therapist"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="therapist_image">Therapist Image URL:</label>
          <input
            type="text"
            required
            value={updateTreatment.therapist_image}
            id="therapist_image"
            className="input"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
