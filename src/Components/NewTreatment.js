import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_BASE_URL;

export default function NewTreatment() {
  const [newTreatment, setNewTreatment] = useState({
    name: "",
    treatment_image: "",
    category: "",
    description: "",
    price: "",
    therapist: "",
    therapist_image: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setNewTreatment({ ...newTreatment, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API}treatments`, newTreatment)
      .then(() => navigate("/new-treatment/confirmation"));
  }
  return (
    <div className="form-grid">
      <h2>New Treatment Form</h2>
      <div className="form-div">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Treatment Name &nbsp;</label>
          <input
            type="text"
            required
            value={newTreatment.name}
            id="name"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="treatment_image">Treatment Image URL &nbsp;</label>
          <input
            type="text"
            required
            value={newTreatment.treatment_image}
            id="treatment_image"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="category">Category &nbsp; </label>
          <input
            type="text"
            required
            value={newTreatment.category}
            id="category"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="description">Description &nbsp; </label>
          <input
            type="text"
            required
            value={newTreatment.description}
            id="description"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="price">Price &nbsp;</label>
          <input
            type="number"
            required
            value={newTreatment.price}
            id="price"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="therapist">Designated Therapist &nbsp; </label>
          <input
            type="text"
            required
            value={newTreatment.therapist}
            id="therapist"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="therapist_image">Therapist Image URL &nbsp; </label>
          <input
            type="text"
            required
            value={newTreatment.therapist_image}
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
