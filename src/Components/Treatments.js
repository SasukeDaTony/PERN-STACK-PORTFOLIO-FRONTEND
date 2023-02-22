import TreatmentCard from "./TreatmentCard";

export default function Treatments({ treatments, setDropDwn }) {
  return (
    <>
      <div className="index-grid">
        {treatments.map((treatment) => {
          return <TreatmentCard treatment={treatment} key={treatment.id} setDropDwn={setDropDwn} />;
        })}
      </div>
    </>
  );
}
