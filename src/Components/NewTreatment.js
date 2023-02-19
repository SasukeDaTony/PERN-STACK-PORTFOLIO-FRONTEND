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
    axios.post(`${API}treatments`, newTreatment).then(() => navigate("/new-treatment/confirmation"));
  }
  return (
    <div className="form-grid">
      <h2>New Treatment Form</h2> <br/>
      <div className="form-div">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Treatment Name:</label>
          <input
            type="text"
            required
            value={newTreatment.name}
            id="name"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="treatment_image">Treatment Image URL:</label>
          <input
            type="text"
            required
            value={newTreatment.treatment_image}
            id="treatment_image"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            required
            value={newTreatment.category}
            id="category"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            required
            value={newTreatment.description}
            id="description"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            required
            value={newTreatment.price}
            id="price"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="therapist">Designated Therapist:</label>
          <input
            type="text"
            required
            value={newTreatment.therapist}
            id="therapist"
            className="input"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="therapist_image">Therapist Image URL:</label>
          <input
            type="text"
            required
            value={newTreatment.therapist_image}
            id="therapist_image"
            className="input"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
