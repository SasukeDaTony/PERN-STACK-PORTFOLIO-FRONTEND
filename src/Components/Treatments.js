import TreatmentCard from "./TreatmentCard";

export default function Treatments({ treatments }) {
  return (
    <>
      <div className="index-grid">
        {treatments.map((treatment) => {
          return <TreatmentCard treatment={treatment} key={treatment.id} />;
        })}
      </div>
    </>
  );
}
