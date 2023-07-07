// SummaryForm.tsx
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Key } from "react";

const SummaryForm = () => {
  const accommodationData = useSelector(
    (state: RootState) => state.form.accommodationData
  );
  const ownerData = useSelector((state: RootState) => state.form.ownerData);

  return (
    <>
      <div>
        <h2>Accomodation</h2>
        <p>Name: {accommodationData.name}</p>
        <p>Description: {accommodationData.description}</p>
        <p>Type: {accommodationData.type}</p>
        <div>
          {accommodationData.images.map(
            (image: Blob | MediaSource, index: Key | null | undefined) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt=""
                className="w-50 h-50 object-cover"
              />
            )
          )}
        </div>
      </div>
      <div>
        <h2>Owner</h2>
        <p>Name: {ownerData.name}</p>
        <p>Email: {ownerData.email}</p>
        <p>Telephone: {ownerData.phone}</p>
      </div>
    </>
  );
};

export default SummaryForm;
