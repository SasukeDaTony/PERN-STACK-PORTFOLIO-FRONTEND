import { useNavigate } from "react-router";

export default function Confirm() {
const  navigate = useNavigate();
  return <div>A New Treatment has been added!
    <button onClick={navigate(() => "/")}>Go To All Treatments</button>
  </div>;
}
