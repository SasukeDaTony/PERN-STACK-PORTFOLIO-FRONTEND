import { useNavigate } from "react-router";

export default function Confirm() {
  const navigate = useNavigate();
  return (
    <div className="confirmation">
      <h3>A New Treatment has been added!</h3>
      <div><img
      alt="congratulations"
        src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F01%2F01%2FLeonardo-DiCaprio-Gatsby.jpg&w=426&h=285&c=sc&poi=%5B810%2C396%5D&q=60"
        height="300px"
        width="300px"
      /></div>
      < br/>
      
      <button className="btn" onClick={() => navigate("/treatments")}>
        Back To Treatments
      </button>
    </div>
  );
}
