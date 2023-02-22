import Treatments from "../Components/Treatments";

function Index( {treatments} ) {
  return (
    <div className="index">
      <Treatments treatments={treatments} />
    </div>
  );
}

export default Index;
